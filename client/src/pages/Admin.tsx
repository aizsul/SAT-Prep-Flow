import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Image as ImageIcon,
  Loader2,
  Plus,
  Save,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import {
  MODULE_IDS,
  type Choice,
  type ModuleType,
  type QuestionRow,
} from "@shared/schema";

const MODULE_LABELS: Record<ModuleType, string> = {
  verbal_mod1: "Verbal — Module 1",
  verbal_mod2_easy: "Verbal — Module 2 (Easy)",
  verbal_mod2_hard: "Verbal — Module 2 (Hard)",
  math_mod1: "Math — Module 1",
  math_mod2_easy: "Math — Module 2 (Easy)",
  math_mod2_hard: "Math — Module 2 (Hard)",
};

interface DraftQuestion {
  id?: number;
  externalId: string;
  module: ModuleType;
  orderIndex: number;
  text: string;
  imageUrl: string | null;
  choices: Choice[];
  correctChoiceId: string;
  domain: string | null;
}

const emptyDraft = (module: ModuleType, orderIndex: number): DraftQuestion => ({
  externalId: "",
  module,
  orderIndex,
  text: "",
  imageUrl: null,
  choices: [
    { id: "A", text: "" },
    { id: "B", text: "" },
    { id: "C", text: "" },
    { id: "D", text: "" },
  ],
  correctChoiceId: "A",
  domain: null,
});

function rowToDraft(row: QuestionRow): DraftQuestion {
  return {
    id: row.id,
    externalId: row.externalId,
    module: row.module as ModuleType,
    orderIndex: row.orderIndex,
    text: row.text,
    imageUrl: row.imageUrl,
    choices: row.choices,
    correctChoiceId: row.correctChoiceId,
    domain: row.domain,
  };
}

export default function AdminPage() {
  const { toast } = useToast();
  const [activeModule, setActiveModule] = useState<ModuleType>("verbal_mod1");
  const [selectedId, setSelectedId] = useState<number | "new" | null>(null);
  const [draft, setDraft] = useState<DraftQuestion | null>(null);

  const { data: questions = [], isLoading } = useQuery<QuestionRow[]>({
    queryKey: ["/api/admin/questions"],
  });

  const filtered = useMemo(
    () =>
      questions
        .filter((q) => q.module === activeModule)
        .sort((a, b) => a.orderIndex - b.orderIndex || a.id - b.id),
    [questions, activeModule],
  );

  // Auto-select the first question in the active module
  useEffect(() => {
    if (selectedId === "new") return;
    if (selectedId && filtered.some((q) => q.id === selectedId)) return;
    if (filtered.length > 0) {
      setSelectedId(filtered[0].id);
      setDraft(rowToDraft(filtered[0]));
    } else {
      setSelectedId(null);
      setDraft(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModule, filtered.length]);

  // Sync draft when selection changes
  useEffect(() => {
    if (selectedId === null) return;
    if (selectedId === "new") return;
    const row = questions.find((q) => q.id === selectedId);
    if (row) setDraft(rowToDraft(row));
  }, [selectedId, questions]);

  const createMutation = useMutation({
    mutationFn: async (payload: Omit<DraftQuestion, "id">) => {
      return apiRequest("POST", "/api/admin/questions", payload);
    },
    onSuccess: async (res) => {
      const saved = (await res.json()) as QuestionRow;
      queryClient.invalidateQueries({ queryKey: ["/api/admin/questions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/questions"] });
      setSelectedId(saved.id);
      toast({ title: "Question created" });
    },
    onError: (err: Error) =>
      toast({ title: "Failed to create", description: err.message, variant: "destructive" }),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, payload }: { id: number; payload: Partial<DraftQuestion> }) => {
      return apiRequest("PATCH", `/api/admin/questions/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/questions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/questions"] });
      toast({ title: "Saved" });
    },
    onError: (err: Error) =>
      toast({ title: "Failed to save", description: err.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => apiRequest("DELETE", `/api/admin/questions/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/questions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/questions"] });
      setSelectedId(null);
      setDraft(null);
      toast({ title: "Question deleted" });
    },
    onError: (err: Error) =>
      toast({ title: "Failed to delete", description: err.message, variant: "destructive" }),
  });

  const handleNewQuestion = () => {
    const nextIndex =
      filtered.length > 0
        ? Math.max(...filtered.map((q) => q.orderIndex)) + 1
        : 0;
    setSelectedId("new");
    setDraft(emptyDraft(activeModule, nextIndex));
  };

  const handleSave = () => {
    if (!draft) return;
    if (!draft.text.trim()) {
      toast({ title: "Question text required", variant: "destructive" });
      return;
    }
    if (draft.choices.some((c) => !c.text.trim())) {
      toast({ title: "All choices need text", variant: "destructive" });
      return;
    }
    if (!draft.choices.some((c) => c.id === draft.correctChoiceId)) {
      toast({ title: "Pick a valid correct answer", variant: "destructive" });
      return;
    }

    if (draft.id) {
      updateMutation.mutate({
        id: draft.id,
        payload: {
          module: draft.module,
          orderIndex: draft.orderIndex,
          text: draft.text,
          imageUrl: draft.imageUrl,
          choices: draft.choices,
          correctChoiceId: draft.correctChoiceId,
          domain: draft.domain,
        },
      });
    } else {
      const { id: _ignored, ...rest } = draft;
      createMutation.mutate(rest);
    }
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              data-testid="link-home"
            >
              <ArrowLeft className="w-4 h-4" /> Back to app
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="text-xl font-bold text-gray-900">
              Question Admin
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            {questions.length} questions total
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        {/* Left: module selector + question list */}
        <aside className="col-span-12 md:col-span-4 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Module</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={activeModule}
                onValueChange={(v) => setActiveModule(v as ModuleType)}
              >
                <SelectTrigger data-testid="select-module">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MODULE_IDS.map((m) => (
                    <SelectItem key={m} value={m} data-testid={`option-module-${m}`}>
                      {MODULE_LABELS[m]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base">
                Questions ({filtered.length})
              </CardTitle>
              <Button
                size="sm"
                onClick={handleNewQuestion}
                data-testid="button-new-question"
              >
                <Plus className="w-4 h-4 mr-1" /> New
              </Button>
            </CardHeader>
            <CardContent className="p-0 max-h-[calc(100vh-280px)] overflow-auto">
              {isLoading && (
                <div className="p-4 text-sm text-gray-500">Loading…</div>
              )}
              {!isLoading && filtered.length === 0 && (
                <div className="p-4 text-sm text-gray-500">
                  No questions in this module yet.
                </div>
              )}
              <ul className="divide-y divide-gray-100">
                {selectedId === "new" && (
                  <li className="px-4 py-3 bg-blue-50 border-l-4 border-blue-600 text-sm text-blue-900">
                    New (unsaved)
                  </li>
                )}
                {filtered.map((q, idx) => {
                  const active = q.id === selectedId;
                  return (
                    <li key={q.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(q.id)}
                        data-testid={`item-question-${q.id}`}
                        className={[
                          "w-full text-left px-4 py-3 flex items-start gap-3 transition-colors",
                          active
                            ? "bg-blue-50 border-l-4 border-blue-600"
                            : "hover:bg-gray-50 border-l-4 border-transparent",
                        ].join(" ")}
                      >
                        <span className="text-xs font-semibold text-gray-500 mt-0.5 w-6 flex-shrink-0">
                          #{idx + 1}
                        </span>
                        <span className="flex-1 text-sm text-gray-800 line-clamp-2">
                          {q.text || "(empty)"}
                        </span>
                        {q.imageUrl && (
                          <ImageIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </aside>

        {/* Right: editor */}
        <section className="col-span-12 md:col-span-8">
          {!draft && (
            <Card>
              <CardContent className="p-12 text-center text-gray-500">
                Select a question on the left or click <strong>New</strong> to add one.
              </CardContent>
            </Card>
          )}
          {draft && (
            <QuestionEditor
              draft={draft}
              setDraft={setDraft}
              onSave={handleSave}
              onDelete={() => {
                if (!draft.id) return;
                if (confirm("Delete this question? This cannot be undone.")) {
                  deleteMutation.mutate(draft.id);
                }
              }}
              isSaving={isSaving}
              isDeleting={deleteMutation.isPending}
            />
          )}
        </section>
      </main>
    </div>
  );
}

function QuestionEditor({
  draft,
  setDraft,
  onSave,
  onDelete,
  isSaving,
  isDeleting,
}: {
  draft: DraftQuestion;
  setDraft: (d: DraftQuestion) => void;
  onSave: () => void;
  onDelete: () => void;
  isSaving: boolean;
  isDeleting: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const updateChoice = (idx: number, patch: Partial<Choice>) => {
    const next = draft.choices.map((c, i) => (i === idx ? { ...c, ...patch } : c));
    let correct = draft.correctChoiceId;
    if (patch.id && draft.choices[idx].id === draft.correctChoiceId) {
      correct = patch.id;
    }
    setDraft({ ...draft, choices: next, correctChoiceId: correct });
  };

  const addChoice = () => {
    const used = new Set(draft.choices.map((c) => c.id));
    const letter = ["A", "B", "C", "D", "E", "F"].find((l) => !used.has(l)) || `X${draft.choices.length}`;
    setDraft({
      ...draft,
      choices: [...draft.choices, { id: letter, text: "" }],
    });
  };

  const removeChoice = (idx: number) => {
    if (draft.choices.length <= 2) return;
    const removed = draft.choices[idx];
    const next = draft.choices.filter((_, i) => i !== idx);
    let correct = draft.correctChoiceId;
    if (removed.id === draft.correctChoiceId) correct = next[0].id;
    setDraft({ ...draft, choices: next, correctChoiceId: correct });
  };

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Upload failed (${res.status})`);
      }
      const data = (await res.json()) as { url: string };
      setDraft({ ...draft, imageUrl: data.url });
      toast({ title: "Image uploaded" });
    } catch (err: any) {
      toast({
        title: "Upload failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>{draft.id ? `Question #${draft.id}` : "New Question"}</CardTitle>
          {draft.externalId && (
            <p className="text-xs text-gray-500 mt-1 font-mono">
              {draft.externalId}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {draft.id && (
            <Button
              variant="outline"
              onClick={onDelete}
              disabled={isDeleting || isSaving}
              data-testid="button-delete-question"
            >
              {isDeleting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4 mr-1" />
              )}
              Delete
            </Button>
          )}
          <Button
            onClick={onSave}
            disabled={isSaving}
            data-testid="button-save-question"
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-1" />
            )}
            Save
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Module</Label>
            <Select
              value={draft.module}
              onValueChange={(v) => setDraft({ ...draft, module: v as ModuleType })}
            >
              <SelectTrigger data-testid="select-edit-module">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {MODULE_IDS.map((m) => (
                  <SelectItem key={m} value={m}>
                    {MODULE_LABELS[m]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="order">Order index</Label>
            <Input
              id="order"
              type="number"
              value={draft.orderIndex}
              onChange={(e) =>
                setDraft({ ...draft, orderIndex: Number(e.target.value) || 0 })
              }
              data-testid="input-order-index"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="domain">Domain (optional)</Label>
          <Input
            id="domain"
            value={draft.domain ?? ""}
            placeholder="e.g. Algebra, Words in Context"
            onChange={(e) =>
              setDraft({ ...draft, domain: e.target.value || null })
            }
            data-testid="input-domain"
          />
        </div>

        <div>
          <Label htmlFor="text">Question text</Label>
          <Textarea
            id="text"
            value={draft.text}
            onChange={(e) => setDraft({ ...draft, text: e.target.value })}
            rows={6}
            placeholder="Enter the question text. HTML is allowed."
            data-testid="input-text"
          />
          <p className="text-xs text-gray-500 mt-1">
            HTML markup is rendered when shown to students.
          </p>
        </div>

        <div>
          <Label>Image (optional)</Label>
          <div className="mt-1 space-y-3">
            {draft.imageUrl ? (
              <div className="relative inline-block">
                <img
                  src={draft.imageUrl}
                  alt="Question"
                  className="max-h-56 rounded-lg border border-gray-200"
                  data-testid="img-preview"
                />
                <button
                  type="button"
                  onClick={() => setDraft({ ...draft, imageUrl: null })}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-red-600"
                  data-testid="button-remove-image"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-gray-200 p-6 text-center text-sm text-gray-500">
                No image attached.
              </div>
            )}
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
                data-testid="input-file-image"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                data-testid="button-upload-image"
              >
                {uploading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4 mr-2" />
                )}
                {draft.imageUrl ? "Replace image" : "Upload image"}
              </Button>
              <Input
                placeholder="…or paste an image URL"
                value={draft.imageUrl ?? ""}
                onChange={(e) =>
                  setDraft({ ...draft, imageUrl: e.target.value || null })
                }
                data-testid="input-image-url"
              />
            </div>
            <p className="text-xs text-gray-500">
              PNG/JPG/GIF/WebP/SVG up to 8MB.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>Choices & correct answer</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addChoice}
              data-testid="button-add-choice"
            >
              <Plus className="w-4 h-4 mr-1" /> Add choice
            </Button>
          </div>
          <div className="space-y-3">
            {draft.choices.map((choice, idx) => {
              const isCorrect = draft.correctChoiceId === choice.id;
              return (
                <div
                  key={idx}
                  className={[
                    "flex items-start gap-2 rounded-lg border p-3",
                    isCorrect
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-white",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setDraft({ ...draft, correctChoiceId: choice.id })
                    }
                    title="Mark as correct answer"
                    data-testid={`button-mark-correct-${idx}`}
                    className={[
                      "h-9 w-9 rounded-full font-bold text-sm flex-shrink-0 flex items-center justify-center transition",
                      isCorrect
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    ].join(" ")}
                  >
                    {choice.id}
                  </button>
                  <Input
                    value={choice.id}
                    onChange={(e) =>
                      updateChoice(idx, { id: e.target.value.toUpperCase().slice(0, 3) })
                    }
                    className="w-16"
                    aria-label="Choice label"
                    data-testid={`input-choice-id-${idx}`}
                  />
                  <Textarea
                    value={choice.text}
                    onChange={(e) => updateChoice(idx, { text: e.target.value })}
                    rows={2}
                    placeholder="Choice text"
                    className="flex-1"
                    data-testid={`input-choice-text-${idx}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeChoice(idx)}
                    disabled={draft.choices.length <= 2}
                    data-testid={`button-remove-choice-${idx}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Click the letter on the left to mark a choice as the correct answer.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
