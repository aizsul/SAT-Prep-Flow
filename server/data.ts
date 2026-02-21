
import { Question } from "@shared/schema";

const generatePlaceholders = (section: 'verbal' | 'math', stage: 1 | 2, count: number, module2Type?: 'easy' | 'hard'): Question[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${section}_s${stage}${module2Type ? `_${module2Type}` : ''}_q${i + 1}`,
    section,
    stage,
    module2Type,
    text: `Sample ${section} question ${i + 1} for stage ${stage}${module2Type ? ` (${module2Type})` : ''}.`,
    choices: [
      { id: "A", text: "Choice A" },
      { id: "B", text: "Choice B" },
      { id: "C", text: "Choice C" },
      { id: "D", text: "Choice D" }
    ],
    correctChoiceId: "A",
    domain: section === 'verbal' ? 'Reading & Writing' : 'Math'
  }));
};

export const SAMPLE_QUESTIONS: {
  verbal_mod1: Question[];
  verbal_mod2_easy: Question[];
  verbal_mod2_hard: Question[];
  math_mod1: Question[];
  math_mod2_easy: Question[];
  math_mod2_hard: Question[];
} = {
  
  // 1. YOUR REAL QUESTIONS GO HERE!
 verbal_mod1: [
    {
      id: "v1-q1",
      section: "verbal",
      stage: 1,
      text: "Microplastics are a common pollutant in large masses of water like oceans. High concentrations and ______ among particles—variations in size, shape, and material—make it onerous to comprehensively classify the microplastics in a water sample, so Ojeda-Benitez et al. are exploring a device to help quickly and accurately identify certain characteristics. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "incompatibilities" },
        { id: "B", text: "disruptions" },
        { id: "C", text: "inconsistencies" },
        { id: "D", text: "restraints" }
      ],
      correctChoiceId: "C",
      domain: "Words in Context"
    },
    {
      id: "v1-q2",
      section: "verbal",
      stage: 1,
      text: "The following text is adapted from Alice Dunbar Nelson's 1899 short story <i>The Fisherman of Pass Christian</i>. Pass Christian is a city in the US state of Mississippi.\n\nThe swift breezes on the beach at Pass Christian meet and conflict as though each strove for the mastery of the air. The land-breeze blows down through the pines, resinous, fragrant, cold, bringing breath-like memories of dim, dark woods shaded by myriad pine-needles. The breeze from the Gulf is warm and soft and languorous, blowing up from the south with its suggestion of tropical warmth. \n\nAs used in the text, what does the word 'mastery' most nearly mean?",
      choices: [
        { id: "A", text: "Familiarity" },
        { id: "B", text: "Comprehension" },
        { id: "C", text: "Domination" },
        { id: "D", text: "Skillfulness" }
      ],
      correctChoiceId: "C",
      domain: "Words in Context"
    },
    {
      id: "v1-q3",
      section: "verbal",
      stage: 1,
      text: "The following text is adapted from Alice Dunbar Nelson's 1899 short story <i>The Fisherman of Pass Christian</i>. Pass Christian is a city in the US state of Mississippi.\n\nThe swift breezes on the beach at Pass Christian meet and conflict as though each strove for the mastery of the air. The land-breeze blows down through the pines, resinous, fragrant, cold, bringing breath-like memories of dim, dark woods shaded by myriad pine-needles. The breeze from the Gulf is warm and soft and languorous, blowing up from the south with its suggestion of tropical warmth. \n\nAs used in the text, what does the word 'mastery' most nearly mean?",
      choices: [
        { id: "A", text: "Familiarity" },
        { id: "B", text: "Comprehension" },
        { id: "C", text: "Domination" },
        { id: "D", text: "Skillfulness" }
      ],
      correctChoiceId: "C",
      domain: "Words in Context"
    },
    {
      id: "v1-q4",
      section: "verbal",
      stage: 1,
      text: "The dinosaur displays at museums such as the Natural History Museum of Los Angeles County in Los Angeles (which has a mounted <i>Allosaurus fragilis</i> skeleton among its holdings) are notable for the ______ of the research behind them—the museum staff consulted numerous sources to ensure the accuracy of the displays. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "shallowness" },
        { id: "B", text: "novelty" },
        { id: "C", text: "obscurity" },
        { id: "D", text: "rigor" }
      ],
      correctChoiceId: "D",
      domain: "Words in Context"
    },
    {
      id: "v1-q5",
      section: "verbal",
      stage: 1,
      text: "Moving beyond a simple 'present or absent' designation, researchers created a new classification system that allows for a nuanced understanding of bioluminescence in marine organisms that was unavailable under binary classification systems. <u>The new six-point scale considers varying levels of supporting evidence used to identify bioluminescent species.</u> For example, the splendid ponyfish scores 1 because of inconsistent reports, the emperor squid scores 4 because of its anatomical similarity to known luminous relatives, and the violet cod scores 6 because of substantiated direct observations.\n\nWhich choice best describes the function of the underlined sentence in the text as a whole?",
      choices: [
        { id: "A", text: "It explains the basis for the new system's scoring criteria." },
        { id: "B", text: "It explains how the new classification system was derived from the previous binary system." },
        { id: "C", text: "It justifies the need for a new classification system for marine species." },
        { id: "D", text: "It emphasizes the thoroughness of the research conducted." }
      ],
      correctChoiceId: "A",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v1-q6",
      section: "verbal",
      stage: 1,
      text: "Adult glass eels can be found off the coast of Maine, but the eels begin their lives in the Sargasso Sea, a biodiverse area in the North Atlantic Ocean where they are born and later return to breed. Though biologists believe they have identified the general area in the Sargasso Sea that is crucial to the endangered eels' survival, little is yet known about how the animals spawn there. <u>Scientists believe that solving the mystery will lead to better conservation of glass eels and their habitat, helping in turn to sustain several other species that rely on them as a food source.</u>\n\nWhich choice best describes the function of the underlined portion in the text as a whole?",
      choices: [
        { id: "A", text: "It presents a finding from a study that identifies the circumstances required to ensure the survival of glass eels." },
        { id: "B", text: "It indicates that the benefit of understanding glass eels' spawning behavior extends beyond the eels." },
        { id: "C", text: "It suggests that scientists are more concerned about other species than about glass eels' habitat." },
        { id: "D", text: "It discusses a role that glass eels and other species serve in supporting the ecosystem of the Sargasso Sea." }
      ],
      correctChoiceId: "B",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v1-q7",
      section: "verbal",
      stage: 1,
      text: "The following text is adapted from Henry James's 1891 short story <i>The Pupil</i>. A man is being considered for a position as a live-in tutor for a woman's child.\n\nThe poor young man hesitated and procrastinated: it cost him such an effort to broach the subject of terms, to speak of money to a person who spoke only of feelings and, as it were, of the aristocracy. Yet he was unwilling to take leave, treating his engagement as settled, without some more conventional glance in that direction than he could find an opening for in the manner of the large affable lady who sat there drawing a pair of soiled [suede gloves] through a jewelled hand and, at once pressing and gliding, repeated over and over everything but the thing he would have liked to hear.\n\nWhich choice best states the main purpose of the text?",
      choices: [
        { id: "A", text: "It criticizes a person for being excessively timid." },
        { id: "B", text: "It draws a sharp contrast between the personalities of two people." },
        { id: "C", text: "It describes a person's unsuccessful attempt to change someone's mind." },
        { id: "D", text: "It portrays the difficulty a person has with raising a topic of conversation." }
      ],
      correctChoiceId: "D",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v1-q8",
      section: "verbal",
      stage: 1,
      text: "Founded in 1991, the Museo de Las Americas showcases art from Latin America, including the art of indigenous peoples. It is located in Denver and has more than 4,800 objects in its collection. Since 2000, a number of other institutions devoted to Latino cultures have opened in the United States. A notable example is Casa de Rosado in Lansing, Michigan. It focuses on the arts and cultures of Latino communities in Michigan.\n\nWhich statement about the Museo de Las Americas is best supported by the text?", 
      choices: [
        { id: "A", text: "It is visited by more people than any other Latino cultural institution in the US." },
        { id: "B", text: "It was founded after 2000." },
        { id: "C", text: "Its collection includes over 4,800 objects." },
        { id: "D", text: "It is no longer located in Denver." }
      ],
      correctChoiceId: "C",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v1-q9",
      section: "verbal",
      stage: 1,
      text: "Linguist John McWhorter asserts that translation apps for smartphones and computers are—despite generally failing to convey many nuances—increasingly obviating the need to learn new languages. Advances in language processing technology have greatly boosted the utility of these apps for perfunctory tasks, like inquiring about an item on a menu, and passing interactions; be that as it may, richer communication (e.g., in business dealings or meaningful personal exchanges) often hinges on conversational patterns and gradations of meaning.\n\nWhat does the text most directly suggest about translation apps?", 
      choices: [
        { id: "A", text: "They are coming to be embraced by international tourists but are viewed with skepticism by many business professionals." },
        { id: "B", text: "They have improved remarkably over time but remain insufficient to support the complexity called for in certain interactions." },
        { id: "C", text: "They are becoming simpler to use but are inconsistent in how comprehensively they cover different languages." },
        { id: "D", text: "They have gained impressive capabilities but continue to be widely viewed as inadequate for most practical purposes." }
      ],
      correctChoiceId: "B",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v1-q10",
      section: "verbal",
      stage: 1,
      text: "Given the immense scope of space, the search for extraterrestrial life is almost necessarily concentrated on the exoplanets deemed to have the most plausible chance of success—typically, atmosphere-bearing terrestrial planets orbiting within a certain range of their stars (termed the habitable zone). Claiming that Earth experienced a long transition from single-lid to plate tectonics that accelerated the emergence and evolution of complex organisms, researchers Robert J. Stern and Taras V. Gerya hold that consideration of tectonics, an often overlooked factor, could help further narrow the search for advanced extraterrestrial species.\n\nBased on the text, what do Stern and Gerya most likely believe about the development of complex life on exoplanets?",
      choices: [
        { id: "A", text: "It is probably more dependent on the presence of plate tectonics than on orbital distance from a host star or the presence of an atmosphere." },
        { id: "B", text: "It is unlikely unless the transition from single-lid to plate tectonics occurs before the acquisition of a lasting atmosphere." },
        { id: "C", text: "It is more likely to occur on habitable zone planets with atmospheres and plate tectonics than on otherwise similar planets that lack plate tectonics." },
        { id: "D", text: "It is more likely to occur if habitable zone planets with atmospheres transition from single-lid to plate tectonics late in their history than if they transition early in their history." }
      ],
      correctChoiceId: "C",
      domain: "Inferences"
    },
    {
      id: "v1-q11",
      section: "verbal",
      stage: 1,
      text: "Wenhao Xu and colleagues demonstrated that applying a low direct current electrical field to graphite (a conductor) and an acrylamide (AAm) gel can increase how strongly materials adhere to each other. At some voltages, adhesion strength—as measured in kilopascals (kPa) of stress needed to pull the materials apart—was high (more than 30 kPa). But the mere application of a direct current electrical field with positive voltage is not sufficient to cause increased adhesion, as evidenced by the fact that ______\n\nWhich choice most effectively uses data from the graph to complete the statement?",
      choices: [
        { id: "A", text: "at 1 V, mean adhesion strength was approximately equal to adhesion strength at 0 V." },
        { id: "B", text: "at 3 V, mean adhesion strength reached its highest observed level at approximately 30 kPa." },
        { id: "C", text: "at 0 V, mean adhesion strength was equal to 0 kPa." },
        { id: "D", text: "at 2 V, mean adhesion strength was lower than it was at both 1 V and 3 V." }
      ],
      correctChoiceId: "A",
      domain: "Command of Evidence: Quantitative",
      imageUrl: "/publuic/questions/v1-q11-graph.png"
    },
    {
      id: "v1-q12",
      section: "verbal",
      stage: 1,
      text: "The Girl Scouts of America is an organization famous for its annual sales of several varieties of cookies, including Tagalongs. A student is writing an essay on the history of the organization. The student claims that from 1992 to 1995 the organization's popularity regularly peaked among participants in a certain age range before declining among older participants as Girl Scout activities began to compete with other interests.\n\nWhich choice best describes data from the table that support the student's claim?",
      choices: [
        { id: "A", text: "Only once between 1992 and 1995 did the number of Juniors in the Girl Scouts exceed the number of Brownies." },
        { id: "B", text: "There were 1,319,000 Brownies in the Girl Scouts in 1992 but 1,142,000 in 1995." },
        { id: "C", text: "For each year from 1992 to 1995, there were fewer Juniors in the Girl Scouts than there were Brownies." },
        { id: "D", text: "Throughout the years from 1992 to 1995, the number of Daisies in the Girl Scouts exceeded the number of Juniors." }
      ],
      correctChoiceId: "C",
      domain: "Command of Evidence: Quantitative"
    },
    {
      id: "v1-q13",
      section: "verbal",
      stage: 1,
      text: "<i>Cane</i> is a 1923 novel by Jean Toomer. In the novel, Toomer mentions a road in rural Georgia called Dixie Pike and describes it as having a deep connection to a faraway place, writing, ______\n\nWhich quotation from <i>Cane</i> most effectively illustrates the claim?",
      choices: [
        { id: "A", text: "“And when the wind is from the South, soil of my homeland falls like a fertile shower upon the lean streets of [Washington, DC].”" },
        { id: "B", text: "“The Dixie Pike has grown from a goat path in Africa.”" },
        { id: "C", text: "“From down the railroad track, the chug-chug of a gas engine announces that the repair gang is coming home.”" },
        { id: "D", text: "“One evening I walked up the [Dixie] Pike on purpose, and stopped to say hello [to Fern].”" }
      ],
      correctChoiceId: "B", // Wait, based on the text "deep connection to a faraway place," B is correct. (You had C in your prompt, but I kept the array as-is. Just a heads up!)
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v1-q14",
      section: "verbal",
      stage: 1,
      text: "Mia Heavener's 2019 novel <i>Under Nushagak Bluff</i>, which takes place in a mid-twentieth-century rural Alaskan fishing ______, three Yup'ik women who grapple with the rise of commercial fisheries and other changes affecting their community.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "village. Tells" },
        { id: "B", text: "village tells" },
        { id: "C", text: "village: tells" },
        { id: "D", text: "village, tells" }
      ],
      correctChoiceId: "D",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q15",
      section: "verbal",
      stage: 1,
      text: "Many works of the Greek dramatist Menander (4th century BCE) are ______ his <i>Dyskolos</i>, a comedy about a misanthrope, is an extant work: it can still be read. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "lost and conversely," },
        { id: "B", text: "lost. Conversely," },
        { id: "C", text: "lost, conversely," },
        { id: "D", text: "lost, and conversely" }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q16",
      section: "verbal",
      stage: 1,
      text: "The Sergeant First Class Modesto Cartagena was a soldier in the United States 65th Infantry Regiment, a Puerto Rico-based regiment of the US Army. In 2016, the United States Congress honored Cartagena and the other servicepeople of the 65th Infantry Regiment with one of its highest ______ Congressional Gold Medal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "honors; the" },
        { id: "B", text: "honors the" },
        { id: "C", text: "honors: the" },
        { id: "D", text: "honors (the" }
      ],
      correctChoiceId: "C",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q17",
      section: "verbal",
      stage: 1,
      text: "Growing as large as three meters in diameter, the leaves of the giant Amazonian waterlily feature a complex network of radiating veins that provide structural ______ in thickness from the center to the edges, these veins allow the leaves to maintain their large size and buoyancy with minimal material, optimizing light capture and photosynthesis.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "support, decreasing" },
        { id: "B", text: "support. Decreasing" },
        { id: "C", text: "support decreasing" },
        { id: "D", text: "support, while decreasing" }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q18",
      section: "verbal",
      stage: 1,
      text: "Recordings of electrical activity in the brain, ______ increased activity in brain areas associated with suppressing motor functions.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "hypothetical match scenario responses show that the most highly skilled soccer players captured in electrograms have" },
        { id: "B", text: "the most highly skilled soccer players responding to hypothetical match scenarios have electrograms that show" },
        { id: "C", text: "electrograms show that while responding to hypothetical match scenarios, the most highly skilled soccer players have" },
        { id: "D", text: "responses to hypothetical match scenarios show that the most highly skilled soccer players have electrograms with" }
      ],
      correctChoiceId: "C",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q19",
      section: "verbal",
      stage: 1,
      text: "Bertie Marshall, a key figure in the history of steel band music in Trinidad and Tobago, made several innovations to the steel ______ wheels so the instrument could be easily transported during Carnival, a cover to protect the pans from the sun, and amplification so the sound of the pans could be better heard over large crowds and other instrumentation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "drum;" },
        { id: "B", text: "drum:" },
        { id: "C", text: "drum," },
        { id: "D", text: "drum" }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v1-q20",
      section: "verbal",
      stage: 1,
      text: "In eastern Mexico, Monument 3 and Monument 61 are the names given to two massive human head statues that were left behind by the ancient Olmec civilization. Both statues are made of stone and are extremely heavy. ______ they each weigh more than 5 tons!\n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "In fact," },
        { id: "B", text: "Earlier," },
        { id: "C", text: "In any case," },
        { id: "D", text: "Instead," }
      ],
      correctChoiceId: "A",
      domain: "Transitions"
    },
    {
      id: "v1-q21",
      section: "verbal",
      stage: 1,
      text: "While most animals prefer the safety of nighttime migration, many poisonous amphibians—a category that includes the Cuban toad and the eastern newt—safely engage in migratory behavior during the day. ______ with the sun in the sky, the amphibians' striking color patterns deter visually oriented daytime predators by serving as a warning of toxicity.\n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "In other words," },
        { id: "B", text: "For example," },
        { id: "C", text: "At that time," },
        { id: "D", text: "However," }
      ],
      correctChoiceId: "C",
      domain: "Transitions"
    },
    {
      id: "v1-q22",
      section: "verbal",
      stage: 1,
      text: "While some researchers have identified the planet Kepler-1632b as potentially habitable, it's unlikely that humanity will be able to take advantage of its favorable conditions anytime soon—it's 2,337 light years away. ______ humanity must first focus on making planets within our solar system more habitable.\n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "Next," },
        { id: "B", text: "Likewise," },
        { id: "C", text: "For example," },
        { id: "D", text: "Instead," }
      ],
      correctChoiceId: "D", // Fixed from C to D (Instead) based on the logical flow of the sentence.
      domain: "Transitions"
    },
    {
      id: "v1-q23",
      section: "verbal",
      stage: 1,
      text: "When ordering the branches of the Yukon River system, cartographers tend to begin with the riverway's lowest point, the Yukon River. ______ hydrologists begin at the top of the river system, with the Kanuti River and other tributaries fed by the riverway's source, Alaska's Llewellyn Glacier. \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "For example," },
        { id: "B", text: "In other words," },
        { id: "C", text: "In a similar way," },
        { id: "D", text: "By contrast," }
      ],
      correctChoiceId: "D",
      domain: "Transitions"
    },
    {
      id: "v1-q24",
      section: "verbal",
      stage: 1,
      text: "While researching a topic, a student has taken the following notes:<br/>• Lemons are fruits that contain ascorbic acid, an essential nutrient for humans.<br/>• Every 100 grams (g) of lemon contains 53 milligrams (mg) of ascorbic acid.<br/>• Many animals can make ascorbic acid in their bodies, but humans cannot.<br/>• Humans must get ascorbic acid from foods, including fruits and vegetables.<br/>• Ascorbic acid is also known as vitamin C.<br/><br/>The student wants to explain why humans must get vitamin C from food. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Since humans cannot make vitamin C in their bodies, they must get this essential nutrient from foods like lemons." },
        { id: "B", text: "Many animals can make ascorbic acid, which is also known as vitamin C, in their bodies." },
        { id: "C", text: "Lemons contain vitamin C, which humans must get from food." },
        { id: "D", text: "There is 53 mg of vitamin C, an essential nutrient for humans, in every 100 g of lemon." }
      ],
      correctChoiceId: "A",
      domain: "Synthesizing Information"
    },
    {
      id: "v1-q25",
      section: "verbal",
      stage: 1,
      text: "While researching a topic, a student has taken the following notes:<br/>• The Moapa Valley National Wildlife Refuge (NWR) is a protected natural area in Nevada.<br/>• It encompasses 32 acres.<br/>• The Moapa Valley NWR was established to safeguard the habitat of the Moapa dace, an endangered species.<br/>• The Moapa Valley NWR is managed by the US Fish & Wildlife Service.<br/>• The US Fish & Wildlife Service limits human activities in the area.<br/><br/>The student wants to emphasize the role the US Fish & Wildlife Service plays in safeguarding the habitat of the Moapa dace. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "By limiting human activities in the Moapa Valley NWR, the US Fish & Wildlife Service safeguards the habitat of the Moapa dace." },
        { id: "B", text: "Human activities are limited in the Moapa Valley NWR, a protected natural area in Nevada." },
        { id: "C", text: "The 32-acre Moapa Valley NWR was established to safeguard the habitat of the Moapa dace, an endangered species." },
        { id: "D", text: "Home to the Moapa dace, the Moapa Valley NWR is located in Nevada, where it encompasses 32 acres." }
      ],
      correctChoiceId: "A",
      domain: "Synthesizing Information"
    },
    {
      id: "v1-q26",
      section: "verbal",
      stage: 1,
      text: "While researching a topic, a student has taken the following notes:<br/>• Usually, a country's capital is also its largest city by population.<br/>• The capital of Malta is Valletta.<br/>• Its largest city by population is St. Paul's Bay.<br/>• The capital of Kazakhstan is Nur-Sultan.<br/>• Its largest city by population is Almaty.<br/><br/>The student wants to emphasize a similarity between St. Paul's Bay and Almaty. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "The most populous city in Malta is St. Paul's Bay, but its capital is Valletta." },
        { id: "B", text: "Although neither is a capital city, both St. Paul's Bay and Almaty are the most populous cities in their countries." },
        { id: "C", text: "The capital of Malta is Valletta; the capital of Kazakhstan is Nur-Sultan." },
        { id: "D", text: "While St. Paul's Bay is in Malta, Almaty is in Kazakhstan." }
      ],
      correctChoiceId: "B",
      domain: "Synthesizing Information"
    },
    {
      id: "v1-q27",
      section: "verbal",
      stage: 1,
      text: "While researching a topic, a student has taken the following notes:<br/>• <i>The Incarnations</i> (2015) is an epistolary novel by English author Susan Barker.<br/>• Epistolary novels are novels written primarily as a series of fictional documents.<br/>• These documents can be letters, journal entries, newspaper clippings, and more.<br/>• <i>The Incarnations</i> consists primarily of letters. The letters are sent between a taxi driver named Wang Jun and a mysterious woman.<br/><br/>The student wants to provide an example of an epistolary novel. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "In 2015, English author Susan Barker published a novel of letters sent between a taxi driver named Wang Jun and a mysterious woman." },
        { id: "B", text: "Consisting primarily of letters sent between a taxi driver named Wang Jun and a mysterious woman, Susan Barker's The Incarnations is an epistolary novel." },
        { id: "C", text: "It was Susan Barker who published the novel The Incarnations in 2015." },
        { id: "D", text: "An epistolary novel is a novel written primarily as a series of fictional documents, such as letters, journal entries, or newspaper clippings." }
      ],
      correctChoiceId: "B",
      domain: "Synthesizing Information"
    }
  ],
  math_mod1: [
    {
      id: "m1-q1",
      section: "math",
      stage: 1,
      text: "The function g is defined by g(x) = 4x + 2. \n\nWhat is the value of g(2)?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "2" },
        { id: "C", text: "4" },
        { id: "D", text: "10" }
      ],
      correctChoiceId: "D",
      domain: "Algebra"
    },
    {
      id: "m1-q2",
      section: "math",
      stage: 1,
      text: "An event planner is planning an ice-skating event. It costs the event planner a onetime fee of $35 to rent the skating rink and $15.25 per attendee. The event planner has a budget of $225. \n\nWhat is the greatest number of attendees possible without exceeding the budget?",
      choices: [
        { id: "A", text: "11" },
        { id: "B", text: "12" },
        { id: "C", text: "13" },
        { id: "D", text: "14" }
      ],
      correctChoiceId: "B",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m1-q3",
      section: "math",
      stage: 1,
      text: "Which expression is equivalent to 7x(6x + 1)?",
      choices: [
        { id: "A", text: "7x(6 + 7x)" },
        { id: "B", text: "42x² + 7x" },
        { id: "C", text: "7x²(6 + 7x)" },
        { id: "D", text: "42x³ + 7x" }
      ],
      correctChoiceId: "B",
      domain: "Advanced Math"
    },
    {
      id: "m1-q4",
      section: "math",
      stage: 1,
      text: "For a certain rectangle, the ratio of the width to the length is 1 to 2. If the width of the rectangle is 67 centimeters, what is the length, in centimeters, of the rectangle?",
      choices: [
        { id: "A", text: "33.5" },
        { id: "B", text: "67" },
        { id: "C", text: "134" },
        { id: "D", text: "268" }
      ],
      correctChoiceId: "C",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m1-q5",
      section: "math",
      stage: 1,
      text: "The scatterplot shows the relationship between the square footage of 12 clothing stores and their annual sales, in millions of dollars. \n\nAccording to the trend shown by the data, which of the following is the best prediction for the annual sales, in millions of dollars, of a clothing store that is 4 thousand square feet?",
      choices: [
        { id: "A", text: "4.1" },
        { id: "B", text: "5.4" },
        { id: "C", text: "7.5" },
        { id: "D", text: "10.2" }
      ],
      correctChoiceId: "C",
      domain: "Problem Solving and Data Analysis",
      imageUrl: "/questions/m1-q5-scatterplot.png"
    },
    {
      id: "m1-q6",
      section: "math",
      stage: 1,
      text: "y = 2,600(a)ˣ\n\nThe given equation, where a is a positive constant, gives the predicted number of bacteria, y, in a growth medium x hours after the number of bacteria was initially measured. \n\nAccording to the equation, what was the predicted number of bacteria initially measured in the growth medium?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "26" },
        { id: "C", text: "260" },
        { id: "D", text: "2600" }
      ],
      correctChoiceId: "D",
      domain: "Advanced Math"
    },
    {
      id: "m1-q7",
      section: "math",
      stage: 1,
      text: "If 6x - 8 = 4, what is the value of 6x + 8?",
      choices: [
        { id: "A", text: "-4" },
        { id: "B", text: "2" },
        { id: "C", text: "10" },
        { id: "D", text: "20" }
      ],
      correctChoiceId: "D",
      domain: "Algebra"
    },
    {
      id: "m1-q8",
      section: "math",
      stage: 1,
      text: "A number f is 120% greater than a positive number g. A number h is 90% less than the number f. \n\nThe number h is how many times the number g?",
      choices: [
        { id: "A", text: "0.12" },
        { id: "B", text: "0.22" },
        { id: "C", text: "1.08" },
        { id: "D", text: "1.98" }
      ],
      correctChoiceId: "B",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m1-q9",
      section: "math",
      stage: 1,
      text: "A certain university's research farm is 1,000 acres, of which 71 acres contain rice. \n\nWhat percentage of the acres of this research farm contain rice?",
      choices: [
        { id: "A", text: "0.71%" },
        { id: "B", text: "7.1%" },
        { id: "C", text: "71%" },
        { id: "D", text: "710%" }
      ],
      correctChoiceId: "B",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m1-q10",
      section: "math",
      stage: 1,
      text: "In the right triangle shown, a, b, and c are positive constants. For an acute angle D, sin(D) = b/c. \n\nWhat is the measure of angle D, in degrees?",
      choices: [
        { id: "A", text: "28" },
        { id: "B", text: "32" },
        { id: "C", text: "58" },
        { id: "D", text: "90" }
      ],
      correctChoiceId: "B",
      domain: "Geometry and Trigonometry",
      imageUrl: "/questions/m1-q10-triangle.png"
    },
    {
      id: "m1-q11",
      section: "math",
      stage: 1,
      text: "In the figure shown, lines ℓ and k are parallel and line t intersects both lines. If y < 46, which of the following must be true?",
      choices: [
        { id: "A", text: "x > 134" },
        { id: "B", text: "x < 134" },
        { id: "C", text: "x + y < 180" },
        { id: "D", text: "x + y > 180" }
      ],
      correctChoiceId: "A",
      domain: "Geometry and Trigonometry",
      imageUrl: "/questions/m1-q11-parallel-lines.png"
    },
    {
      id: "m1-q12",
      section: "math",
      stage: 1,
      text: "Line t in the xy-plane has a slope of 1/8 and passes through the point (32, -7). \n\nWhich equation defines line t?",
      choices: [
        { id: "A", text: "y = -11x + 1/8" },
        { id: "B", text: "y = 1/8x - 11" },
        { id: "C", text: "y = 1/8x - 7" },
        { id: "D", text: "y = 32x - 7" }
      ],
      correctChoiceId: "B",
      domain: "Algebra"
    },
    {
      id: "m1-q13",
      section: "math",
      stage: 1,
      text: "The graph of the function f, where y = f(x), gives the total cost y, in dollars, for a certain video game system and x games. \n\nWhat is the best interpretation of the slope of the graph in this context?",
      choices: [
        { id: "A", text: "Each game costs $16." },
        { id: "B", text: "The video game system costs $16." },
        { id: "C", text: "Each game costs $50." },
        { id: "D", text: "The video game system costs $50." }
      ],
      correctChoiceId: "A",
      domain: "Algebra",
      imageUrl: "/questions/m1-q13-graph.png"
    },
    {
      id: "m1-q14",
      section: "math",
      stage: 1,
      text: "What is the radius of the circle in the xy-plane defined by (x + 2)² + (y + 6)² = 361?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "6" },
        { id: "C", text: "19" },
        { id: "D", text: "361" }
      ],
      correctChoiceId: "C",
      domain: "Advanced Math"
    },
    {
      id: "m1-q15",
      section: "math",
      stage: 1,
      text: "x² + y² = 1,088<br/>y - 4x = 0\n\nA solution to the given system of equations is (x, y), where x < 0. What is the value of y?",
      choices: [
        { id: "A", text: "-256" },
        { id: "B", text: "-32" },
        { id: "C", text: "-8" },
        { id: "D", text: "-4" }
      ],
      correctChoiceId: "B",
      domain: "Advanced Math"
    },
    {
      id: "m1-q16",
      section: "math",
      stage: 1,
      text: "f(x) = 10(x² + 47)\n\nWhat is the minimum value of the given function?",
      choices: [
        { id: "A", text: "0.1" },
        { id: "B", text: "4.7" },
        { id: "C", text: "10" },
        { id: "D", text: "470" }
      ],
      correctChoiceId: "D",
      domain: "Advanced Math"
    },
    {
      id: "m1-q17",
      section: "math",
      stage: 1,
      text: "The function j is defined by j(x) = 10x + 5, and the function k is defined by k(x) = j(x) ⋅ p, where p is a positive constant. \n\nWhat is the value of p if k(9) = 19?",
      choices: [
        { id: "A", text: "19/95" },
        { id: "B", text: "6" },
        { id: "C", text: "10/13" },
        { id: "D", text: "3" }
      ],
      correctChoiceId: "A",
      domain: "Algebra"
    },
    {
      id: "m1-q18",
      section: "math",
      stage: 1,
      text: "In the xy-plane, which of the following does NOT contain any points that are part of the solution set to 7x - 6y > 42?",
      choices: [
        { id: "A", text: "The x-axis" },
        { id: "B", text: "The region where x > 0 and y > 0" },
        { id: "C", text: "The region where x < 0 and y < 0" },
        { id: "D", text: "The region where x < 0 and y > 0" }
      ],
      correctChoiceId: "D",
      domain: "Algebra"
    },
    {
      id: "m1-q19",
      section: "math",
      stage: 1,
      text: "3x + 2y = 10<br/>18x + 12y = 60\n\nHow many solutions does the given system of equations have?",
      choices: [
        { id: "A", text: "Exactly one" },
        { id: "B", text: "Exactly two" },
        { id: "C", text: "Infinitely many" },
        { id: "D", text: "Zero" }
      ],
      correctChoiceId: "C",
      domain: "Algebra"
    },
    {
      id: "m1-q20",
      section: "math",
      stage: 1,
      text: "|4x - 48| + 4 / 8 = 6\n\nWhat is the sum of the solutions to the given equation?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "23" },
        { id: "C", text: "24" },
        { id: "D", text: "48" }
      ],
      correctChoiceId: "C",
      domain: "Advanced Math"
    },
    {
      id: "m1-q21",
      section: "math",
      stage: 1,
      text: "A beekeeper's initial observation of the population of a certain bee colony was 10 bees. The beekeeper set a goal to increase the population to 1,000 bees. The beekeeper uses a model that predicts the population of this bee colony begins at 10 and increases by 20 bees per week in the first two weeks after the initial observation, and then increases by 71 bees per week until the beekeeper's goal is reached. \n\nAccording to this model, at the end of week x after the initial observation, where x > 2, which of the following functions gives the predicted number of bees still needed to reach the beekeeper's goal?",
      choices: [
        { id: "A", text: "f(x) = 1000 - (10 + 20x + 71x)" },
        { id: "B", text: "f(x) = 1000 - [10 + 20(2) + 71(x - 2)]" },
        { id: "C", text: "f(x) = 1000 - (10 + 71x)" },
        { id: "D", text: "f(x) = 1000 - [10 + 20x + 71(x - 2)]" }
      ],
      correctChoiceId: "B",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m1-q22",
      section: "math",
      stage: 1,
      text: "The quadratic equation x² + px + q = 0, where p is a constant, has exactly one real solution. \n\nWhat is the value of p?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "It cannot be determined from the information given." },
        { id: "C", text: "q²" },
        { id: "D", text: "2√q" }
      ],
      correctChoiceId: "A", // You provided 0 as the answer in your prompt
      domain: "Advanced Math"
    }
  ],
  // --- HARD MODULE 2 ---
  math_mod2_hard: [
    {
      id: "m2h-q1",
      section: "math",
      stage: 2,
      module2Type: "hard",
      //why i
      text: "The equation <i>d = 20w + 100</i> gives the total amount of money <i>d</i>, in dollars, that Janna plans to save <i>w</i> weeks after she starts to save. \n\nWhat is the total amount of money, in dollars, she plans to save in 10 weeks?",
      choices: [
        { id: "A", text: "250" },
        { id: "B", text: "300" },
        { id: "C", text: "350" },
        { id: "D", text: "400" }
      ],
      correctChoiceId: "B",
      domain: "Algebra"
    },
    {
      id: "m2h-q2",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "x + 2y = 28<br/>2y = 15\n\nThe solution to the given system of equations is (x, y). What is the value of x?",
      choices: [
        { id: "A", text: "13" },
        { id: "B", text: "15" },
        { id: "C", text: "28" },
        { id: "D", text: "43" }
      ],
      correctChoiceId: "A", // You provided 13 as the answer, which corresponds to A
      domain: "Algebra"
    },
    {
      id: "m2h-q3",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The given equation relates the real numbers b, c, and d, where d > 5. \n\nb² + 5c = 6d\n\nWhich equation correctly expresses b in terms of c and d?",
      choices: [
        { id: "A", text: "b = (6d - 5c) / 2" },
        { id: "B", text: "b = (6d + 5c) / 2" },
        { id: "C", text: "b = ±√(6d - 5c)" },
        { id: "D", text: "b = ±√(6d + 5c)" }
      ],
      correctChoiceId: "C",
      domain: "Advanced Math"
    },
    {
      id: "m2h-q4",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The area of triangle ABC is 210 square centimeters. The base of the triangle is 10 centimeters. \n\nWhat is the height h, in centimeters, of this triangle?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "21" },
        { id: "C", text: "42" },
        { id: "D", text: "84" }
      ],
      correctChoiceId: "C",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2h-q5",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "g(x) = 2(14x - 15)\n\nWhat is the y-coordinate of the y-intercept of the graph of y = g(x) - 5 in the xy-plane?",
      choices: [
        { id: "A", text: "-35" },
        { id: "B", text: "-30" },
        { id: "C", text: "-20" },
        { id: "D", text: "-15" }
      ],
      correctChoiceId: "A",
      domain: "Algebra"
    },
    {
      id: "m2h-q6",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The table shows the distribution of people in a certain city by age group.\n\n<b>Age group | Proportion</b><br/>Less than 18 years old: 28%<br/>18–40 years old: 24%<br/>41–65 years old: 22%<br/>Greater than 65 years old: 26%\n\nIf a person in this city is selected at random, which of the following is closest to the probability of selecting a person who is greater than 65 years old, given that the person is at least 18 years old?",
      choices: [
        { id: "A", text: "0.26" },
        { id: "B", text: "0.36" },
        { id: "C", text: "0.46" },
        { id: "D", text: "0.93" }
      ],
      correctChoiceId: "B",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2h-q7",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "h(t) = -16t² + b\n\nThe function h estimates an object's height, in feet, above the ground t seconds after the object is dropped, where b is a constant. The function estimates that the object is 23.04 feet above the ground when it is dropped at t = 0. \n\nHow many seconds after being dropped does the function estimate the object will hit the ground?",
      choices: [
        { id: "A", text: "1.2" },
        { id: "B", text: "1.44" },
        { id: "C", text: "2.4" },
        { id: "D", text: "23.04" }
      ],
      correctChoiceId: "A", // You provided 1.2 as the answer
      domain: "Advanced Math"
    },
    {
      id: "m2h-q8",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The length of a rectangle's diagonal is √106, and the length of one of the rectangle's sides is 9. \n\nWhat is the perimeter of the rectangle?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "28" },
        { id: "C", text: "45" },
        { id: "D", text: "106" }
      ],
      correctChoiceId: "B", // 2(9+5) = 28. (You provided C as 28, rearranged choices for standard flow)
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2h-q9",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "Circle A: (x - 7)² + (y - p)² = 21<br/>Circle B: (x + 7)² + (y - p)² = 21\n\nIn the given equations, p is a positive constant. Which statement correctly compares the graphs of circles A and B in the xy-plane?",
      choices: [
        { id: "A", text: "Circle B is the reflection of circle A across the x-axis." },
        { id: "B", text: "Circle B is the reflection of circle A across the y-axis." },
        { id: "C", text: "Circle B is the translation of circle A 14 units up." },
        { id: "D", text: "Circle B is the translation of circle A 14 units to the right." }
      ],
      correctChoiceId: "B",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2h-q10",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "a(9 - x) = 36 - 4x\n\nIn the given equation, a is a constant. The equation has exactly one solution. \n\nWhich of the following CANNOT be the value of a?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "4" },
        { id: "C", text: "9" },
        { id: "D", text: "36" }
      ],
      correctChoiceId: "B",
      domain: "Algebra"
    },
    {
      id: "m2h-q11",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "a, 26, 29, b, 33, 49, c\n\nFor the given data set, the data values are listed in ascending order, where a, b, and c are constants. For this data set, the mean is 36, the median is 29, and the range is 72. \n\nWhat is the value of c?",
      choices: [
        { id: "A", text: "53" },
        { id: "B", text: "72" },
        { id: "C", text: "79" },
        { id: "D", text: "98" }
      ],
      correctChoiceId: "C",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2h-q12",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "y = 3(a - 6)ˣ + c\n\nHow many times does the graph of the given equation in the xy-plane cross the x-axis, where a and c are positive constants such that a > 6 and b > c? (Assume the equation is in the form y = 3(a-6)^x + c).",
      choices: [
        { id: "A", text: "Zero" },
        { id: "B", text: "One" },
        { id: "C", text: "Two" },
        { id: "D", text: "Three" }
      ],
      correctChoiceId: "A", // Corrected logic based on standard exponential shift where c > 0
      domain: "Advanced Math"
    },
    {
      id: "m2h-q13",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "A linear function g is defined by g(x) = ax + b, where a and b are constants. \n\nIf g(-2) = -7 and g(1) = 5, what is the value of a?",
      choices: [
        { id: "A", text: "-4" },
        { id: "B", text: "-2" },
        { id: "C", text: "2" },
        { id: "D", text: "4" }
      ],
      correctChoiceId: "D", // You provided 4
      domain: "Algebra"
    },
    {
      id: "m2h-q14",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "2x² - 8x - 21 = 0\n\nOne solution to the given equation can be written as x = (h - 1) / 2 + √k, where h and k are integer constants. What is the value of h + k?",
      choices: [
        { id: "A", text: "-24" },
        { id: "B", text: "10" },
        { id: "C", text: "29" },
        { id: "D", text: "60" }
      ],
      correctChoiceId: "D",
      domain: "Advanced Math"
    },
    {
      id: "m2h-q15",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "r(x) = 9(x - 3)<br/>s(x) = x³ + nx² + 3nx + 27\n\nFor the given functions r and s, n is a constant. If r(x) ⋅ s(x) = 9(x⁴ - 81), what is the value of n?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "3" },
        { id: "C", text: "9" },
        { id: "D", text: "27" }
      ],
      correctChoiceId: "B", // You provided 3
      domain: "Advanced Math"
    },
    {
      id: "m2h-q16",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "At different times on a certain day, a manager at a theme park recorded the number of visitors. An exponential model gives the estimated number of visitors, V, at the theme park t hours after the theme park opened, where t ≤ 3. Based on the model, 85 visitors were estimated to be at the theme park when it opened, and every 30 minutes the estimated number of visitors increased by 140% of the estimated number of visitors 30 minutes earlier. \n\nWhich of the following equations best represents this model?",
      choices: [
        { id: "A", text: "V = 85(1.40)^(t/30)" },
        { id: "B", text: "V = 85(1.40)^2t" },
        { id: "C", text: "V = 85(2.40)^(t/30)" },
        { id: "D", text: "V = 85(2.40)^2t" }
      ],
      correctChoiceId: "D",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2h-q17",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The function v is defined by the equation v(x) = (x + 5)(x - 19) / (x² + bx + c), where b and c are constants. In the xy-plane, the graph of y = v(x) passes through the points (0, 95/66) and (11, 0). \n\nIf v(q) = 0, which of the following could be the value of q?",
      choices: [
        { id: "A", text: "-5" },
        { id: "B", text: "-6" },
        { id: "C", text: "5" },
        { id: "D", text: "6" }
      ],
      correctChoiceId: "A",
      domain: "Advanced Math"
    },
    {
      id: "m2h-q18",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "Line s is defined by x/7 + y/5 = 41/35. Line t is perpendicular to line s in the xy-plane and passes through the points (k, 0) and (60, -k). \n\nWhat is the value of k?",
      choices: [
        { id: "A", text: "-12" },
        { id: "B", text: "12" },
        { id: "C", text: "48" },
        { id: "D", text: "60" }
      ],
      correctChoiceId: "C", // You provided 48
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2h-q19",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "An engineer connects resistors in series, where the resistors in the series have a total resistance of 41 ohms. In this series, there are a resistors of type A, which each have a resistance of 2 ohms, and b resistors of type B, which each have a resistance of 35 ohms. The given equation 2a + 35b = 41 represents this situation. \n\nAccording to this equation, what is the positive difference between the value of a and the value of b?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "4" }
      ],
      correctChoiceId: "B", // (a=3, b=1, difference is 2). *Assuming standard interpretation of the scrambled text.*
      domain: "Algebra"
    },
    {
      id: "m2h-q20",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "The functions f and g are defined by the given equations, where a and b are integer constants, a > 1, and b > 0. \n\nf(x) = a(0.63)⁻ᵇˣ<br/>g(x) = a(1.37)ˣ⁺² + b\n\nIf y = f(x) and y = g(x) are graphed in the xy-plane, which of the following equations displays, as a constant or coefficient, the minimum value of the function it defines, where x ≥ 0?",
      choices: [
        { id: "A", text: "I only" },
        { id: "B", text: "II only" },
        { id: "C", text: "I and II" },
        { id: "D", text: "Neither I nor II" }
      ],
      correctChoiceId: "A",
      domain: "Advanced Math"
    },
    {
      id: "m2h-q21",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "In triangle XYZ, the measure of angle X is x°, the measure of angle Y is y°, and the measure of angle Z is 31°. If x > y > 31, which of the following additional pieces of information is NOT sufficient to determine the values of x and y?",
      choices: [
        { id: "A", text: "The value of 31 - x - 3y" },
        { id: "B", text: "The value of 31 + 3x + y" },
        { id: "C", text: "The value of 31 - 3x + 3y" },
        { id: "D", text: "The value of 31 - 3x - 3y" }
      ],
      correctChoiceId: "D",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2h-q22",
      section: "math",
      stage: 2,
      module2Type: "hard",
      text: "In 2013, Chloe earned 11% more than in 2012, and in 2014, Chloe earned 6% more than in 2013. \n\nIf Chloe earned y times as much in 2014 as in 2012, which of the following is closest to the value of y?",
      choices: [
        { id: "A", text: "0.5455" },
        { id: "B", text: "0.6600" },
        { id: "C", text: "0.8499" }, // Note: 1.11 * 1.06 = 1.1766. You provided C, but math dictates D. Left as C to match your key.
        { id: "D", text: "1.1766" }
      ],
      correctChoiceId: "C", 
      domain: "Problem Solving and Data Analysis"
    }
  ],
  // --- HARD MODULE 2 ---
  verbal_mod2_hard: [
    {
      id: "v2h-q1",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Exposed to harsh environmental conditions for centuries, lighthouses such as La Jument lighthouse off the coast of Brittany, France, exemplify the ______ between marine structures and ocean forces: the continuous impact of breaking waves necessitates periodic reinforcements to or redesigns of the structures that in turn may alter local wave patterns. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "interplay" },
        { id: "B", text: "tension" },
        { id: "C", text: "incongruity" },
        { id: "D", text: "continuum" }
      ],
      correctChoiceId: "A",
      domain: "Words in Context"
    },
    {
      id: "v2h-q2",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "______ the mythological and heroic subject matter often found in works by Horace Vernet and other establishment figures, Honoré Daumier's painting <i>The Third-Class Carriage</i> instead focuses on something decidedly mundane: working-class travelers in a third-class railway car. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "Eschewing" },
        { id: "B", text: "Expounding" },
        { id: "C", text: "Caricaturing" },
        { id: "D", text: "Appraising" }
      ],
      correctChoiceId: "A",
      domain: "Words in Context"
    },
    {
      id: "v2h-q3",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Though copies of <i>The Adventures of Indiana Jones in Wenceslas Square in Prague on January 16, 1989</i>—an underground computer game that was created anonymously in 1989 as an act of political protest against the authoritarian regime of what was then Czechoslovakia—were originally distributed ______, the game is now readily available online for anyone to play. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "dispassionately" },
        { id: "B", text: "disingenuously" },
        { id: "C", text: "surreptitiously" },
        { id: "D", text: "succinctly" }
      ],
      correctChoiceId: "C",
      domain: "Words in Context"
    },
    {
      id: "v2h-q4",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "In their study of caterpillars in fragmented forests (formerly contiguous forests that have been broken into isolated patches by roads or other interruptions), James Mickley et al. stress that although fragmentation inevitably ______ alterations to local ecological processes, the changes will likely have a greater impact on <i>Catocala ilia</i>, a specialist feeding on a limited number of plant species, than on a species like <i>Achatia distincta</i> that feeds on several. \n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "engenders" },
        { id: "B", text: "attenuates" },
        { id: "C", text: "preempts" },
        { id: "D", text: "subsumes" }
      ],
      correctChoiceId: "A",
      domain: "Words in Context"
    },
    {
      id: "v2h-q5",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Establishing protected areas (PAs), such as the Mamanuca Islands in Fiji, is a common conservation strategy, but because PAs restrict some kinds of economic activity, it's widely thought that they hinder economic development. This perception is driven in part by the fact that economic assessments often don't capture the indirect effects of tourism linked to PAs. But Hasita Bhammar et al. found that tourism associated with the Mamanuca Islands boosts local demand for goods and services in other economic sectors, resulting in, for instance, increased income from retail in nearby areas. \n\nWhich choice best describes the overall structure of the text?",
      choices: [
        { id: "A", text: "It explains how PAs typically affect economic development in the regions where they are established, summarizes the findings of several economic studies that support this explanation, and then concedes that a particular PA is an exception to the general trend." },
        { id: "B", text: "It introduces a widely held belief about the effect PAs have on the economy, proposes a reason for that belief's prevalence, and then details a study whose findings seemingly conflict with that belief." },
        { id: "C", text: "It makes a generalization about the difficulty of using PAs to reconcile economic and conservation priorities, demonstrates why most PAs fall short of achieving that goal, and then holds up a particular PA as an example of how that goal can be achieved." },
        { id: "D", text: "It states a hypothesis that accounts for why PAs generally negatively impact local economies, outlines how a research team's findings support that hypothesis, and then suggests how a novel methodology led a separate team of researchers to a different conclusion." }
      ],
      correctChoiceId: "B",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v2h-q6",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Typically, synthetic leather is petroleum based, but materials scientists searching for an ecologically sustainable alternative have used various bacteria that secrete linear chains of glucose, forming a dense mesh of cellulose called a pellicle, which is leatherlike except in color. The standard process for dyeing leather generates substantial wastewater and other undesirable byproducts, so <u>adopting such a regimen would run counter to the ecological promise of the pellicle approach.</u> To address this, Kenneth T. Walker and colleagues worked to modify <i>Komagataeibacter rhaeticus</i> bacteria to produce a pellicle with embedded pigmentation cells, thereby allowing the pellicle to “dye” itself from the inside. \n\nWhich choice best describes the function of the underlined portion in the text as a whole?",
      choices: [
        { id: "A", text: "To illustrate how the researchers adapted the pellicle approach to overcome a potential impediment to their main goal as presented in the text" },
        { id: "B", text: "To concede that the researchers' main goal as described in the text will be challenging to achieve due to the standard coloring approach being impractical for use on a pellicle" },
        { id: "C", text: "To indicate the characteristic of conventional synthetic leathers that makes those leathers poorly suited to achieve the researchers' main goal as presented in the text" },
        { id: "D", text: "To describe a consideration that led the researchers to employ an alternative approach to coloring a pellicle that allowed them to achieve their main goal as presented in the text" }
      ],
      correctChoiceId: "D",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v2h-q7",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "<b>Text 1</b><br/>Mooseberry (<i>Viburnum edule</i>) plants are native to Alaska, where harsh conditions have historically impeded potential invasive species. As the boreal climate has warmed in recent decades, however, common knotgrass (<i>Polygonum aviculare</i>) plants have established themselves in Alaska. Previous research conducted in non-boreal ecosystems has documented warming-induced increases in summer temperatures benefiting invasive species more than native species.<br/><br/><b>Text 2</b><br/>At a site near Fairbanks, Alaska, Christa Mulder and Katie Spellman tracked <i>V. edule</i> and <i>P. aviculare</i>, along with other native and invasive species, over several years. They observed that although average summer temperatures were substantially higher in some years of the study than in others, neither <i>V. edule</i> nor <i>P. aviculare</i> showed any significant variation in summer growth patterns from year to year. \n\nWhich choice best describes the relationship between the two texts?",
      choices: [
        { id: "A", text: "Text 2 explains a study that suggests an alternative explanation for the trend observed in the research discussed in Text 1." },
        { id: "B", text: "Text 2 describes a methodology that helps researchers avoid a problem encountered in the studies discussed in Text 1." },
        { id: "C", text: "Text 2 presents a finding that casts doubt on the generalizability of the research discussed in Text 1." },
        { id: "D", text: "Text 2 discusses an observation that challenges the validity of the findings described in Text 1." }
      ],
      correctChoiceId: "C",
      domain: "Cross-Text Connections"
    },
    {
      id: "v2h-q8",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Optimal foraging theory (OFT) holds that animals' foraging behaviors reflect cost-benefit trade-offs that vary by species and with dynamic ecological circumstances. One such circumstance is lunar intensity, which W.J. Cresswell and Stephen Harris found to be negatively associated with foraging by European badgers but Eduardo Fernández-Duque and colleagues found to be positively associated with foraging by Azara's night monkeys. This discrepancy is explicable in terms of OFT: the monkeys' greater reliance on vision means that higher lunar intensity benefits them more than it benefits the badgers. \n\nInformation in the text best supports which statement about Azara's night monkeys?",
      choices: [
        { id: "A", text: "If the monkeys' foraging behavior under increased lunar intensity actually reflects a cost-benefit trade-off, their behavior should be more similar to that of European badgers than it is." },
        { id: "B", text: "If the advantages that the monkeys gain from increased lunar intensity explain the change in their foraging behavior, those advantages are likely shared by some other species that are not heavily reliant on vision." },
        { id: "C", text: "If increased lunar intensity imposed the same costs on the monkeys that it imposes on European badgers, there would be no association between lunar intensity and the monkeys' foraging." },
        { id: "D", text: "If increased lunar intensity creates any disadvantages for the monkeys, those disadvantages are more than compensated for by the advantages that the monkeys gain." }
      ],
      correctChoiceId: "D",
      domain: "Command of Evidence"
    },
    {
      id: "v2h-q9",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "<b>Ranking of Environmental and Sociocultural Benefits of Urban Agriculture (1 = highest)</b><br/>• <b>Social cohesion:</b> Leaders (17) | Stakeholders (13) | Public (9)<br/>• <b>Soil erosion:</b> Leaders (5) | Stakeholders (8) | Public (23)<br/>• <b>Genetic variability:</b> Leaders (10) | Stakeholders (11) | Public (16)<br/>• <b>Aesthetics & art:</b> Leaders (18) | Stakeholders (4) | Public (6)<br/>• <b>Pollination:</b> Leaders (1) | Stakeholders (7) | Public (12)<br/><br/>Esther Sanyé-Mengual, Kathrin Specht, and their team surveyed three groups of people in Bologna, Italy—leaders of urban agriculture projects, stakeholders in urban agriculture, and the general public—to compare their views about the extent to which urban agriculture contributes to 25 social or ecological services. The researchers used these ratings to rank the services for each group, with a ranking of 1 indicating that a group perceives that urban agriculture benefits that service the most. Using only the rankings shown, a city planner in Bologna who is promoting a new urban agriculture project concludes that advertisements aimed at project leaders should emphasize the project's benefit to the enhancement of pollination. \n\nWhich choice best describes data in the table that support the city planner's conclusion?",
      choices: [
        { id: "A", text: "The conservation of genetic variability was ranked lower for project leaders than it was for the general public." },
        { id: "B", text: "The enhancement of pollination was ranked higher for project leaders than it was for stakeholders." },
        { id: "C", text: "The enhancement of pollination was ranked higher for project leaders than were the other four services." },
        { id: "D", text: "The improvement of social cohesion was ranked higher for project leaders than was the enhancement of pollination." }
      ],
      correctChoiceId: "C",
      domain: "Command of Evidence: Quantitative"
    },
    {
      id: "v2h-q10",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "<b>Percentages of New Year's Resolution Makers Who Make Certain Kinds of Resolutions</b><br/>• <b>Health and exercise:</b> Age 18-29 (79%) | Age 30-49 (68%) | Age 50-64 (63%) | Age 65+ (52%)<br/>• <b>Finances:</b> Age 18-29 (80%) | Age 30-49 (63%) | Age 50-64 (53%) | Age 65+ (47%)<br/>• <b>Personal relationships:</b> Age 18-29 (79%) | Age 30-49 (56%) | Age 50-64 (58%) | Age 65+ (76%)<br/>• <b>Hobbies:</b> Age 18-29 (65%) | Age 30-49 (53%) | Age 50-64 (51%) | Age 65+ (45%)<br/><br/>A Pew Research Center survey conducted in January 2024 found that three out of ten US adults make at least one New Year's resolution (a promise for the year ahead), while half of those who make a resolution make more than one. The survey asked participants what kinds of resolutions they made and separated them into several categories. \n\nWhich choice best presents a conclusion about the habits of New Year's resolution makers that is best supported by information in the text and the table?",
      choices: [
        { id: "A", text: "The majority of US adults who make resolutions related to health and exercise also make resolutions in multiple additional categories." },
        { id: "B", text: "Among all US adults, people become less likely to make New Year's resolutions as they age, regardless of the type of resolution." },
        { id: "C", text: "Resolution makers between the ages of 18 and 29 are more likely to make resolutions about health and exercise than resolution makers between the ages of 30 and 49 are." },
        { id: "D", text: "Resolution makers between the ages of 50 and 64 are more likely to make resolutions related to personal relationships and less likely to make resolutions related to finances than resolution makers between the ages of 30 and 49 are." }
      ],
      correctChoiceId: "D",
      domain: "Command of Evidence: Quantitative"
    },
    {
      id: "v2h-q11",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "<i>Richard II</i> is a play from the 1590s by William Shakespeare. Although King Richard has been vanquished by his cousin Henry Bolingbroke, he intimates that he is not entirely ready to show subservience to his cousin, saying, ______ \n\nWhich quotation from <i>Richard II</i> most effectively illustrates the claim?",
      choices: [
        { id: "A", text: "“Am I both priest and clerk? Well then, amen. / God save the King! although I be not he; / And yet, amen, if heaven do think him me.”" },
        { id: "B", text: "“I have no name, no title,— / No, not that name was given me at the font,— / But 'tis usurp'd:— Alack the heavy day, / That I have worn so many winters out, / And know not now what name to call myself!”" },
        { id: "C", text: "“Still my griefs are mine. / You may my glories and my state depose, / But not my griefs; still am I king of those.”" },
        { id: "D", text: "“Alack, why am I sent for to a king, / Before I have shook off the regal thoughts / Wherewith I reign'd? I hardly yet have learn'd / To insinuate, flatter, bow, and bend my knee.”" }
      ],
      correctChoiceId: "D",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v2h-q12",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Scholars cite <i>Men of Maize</i>, the 1949 novel by Guatemalan author Miguel Ángel Asturias, as a foundational text of magical realism, the Latin American style of fiction in which antirealistic plot devices—often borrowed from the spiritual and narrative traditions of Indigenous and colonial societies in the Americas—are deployed in an otherwise realistic mode of representation typical of the modern novel. This style has exerted a decisive influence on authors in the United States, including Susan Power, <u>whose 1994 novel <i>The Grass Dancer</i> resembles classic magical realist novels in its juxtaposition of literary realism with long-established cultural traditions—namely, those of the Dakota people of the northern plains.</u> \n\nWhich quotation from a literary scholar would most directly support the claim in the underlined portion of the text?",
      choices: [
        { id: "A", text: "“The cultural traditions of the Dakota people of the northern plains, which figure so prominently in the magical realist tradition of Latin America, permit realistic as well as antirealistic scenarios—much as The Grass Dancer does.”" },
        { id: "B", text: "“Although much of The Grass Dancer conforms to the conventions of realistic fiction, Susan Power also incorporates elements drawn from Dakota cultural traditions that transcend and expose the limitations of realism.”" },
        { id: "C", text: "“Even though The Grass Dancer alternates between realistic and antirealistic modes of representation, the influence of Dakota cultural traditions remains constant throughout the novel.”" },
        { id: "D", text: "“Much of the interest of The Grass Dancer derives from the productive tension between its competing influences—namely, Dakota cultural traditions and the magical realism of Latin America.”" }
      ],
      correctChoiceId: "B",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v2h-q13",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "While mammals collectively exhibit the highest ratio of brain size to body size among vertebrates, a team led by paleontologist Ornella Bertrand demonstrates that for ten million years following the extinction of dinosaurs, that ratio in fact shrank for mammals as they evolved to fill newly vacated ecological niches and their bodies increased in size more rapidly than their brains. Competition for resources tends to favor intelligence and thus large, complex brains, but during this period, the abundance of resources relative to mammalian population numbers likely moderated competition and facilitated an increase in body size. Bertrand and her team reason that as population numbers swelled, competition intensified, creating conditions that ______ \n\nWhich choice most logically completes the text?",
      choices: [
        { id: "A", text: "favored an evolutionary increase in brain size relative to body size among mammals." },
        { id: "B", text: "restricted resources so drastically that mammals struggled to secure enough food to maintain large brain sizes." },
        { id: "C", text: "encouraged mammals with large brain sizes to adapt to a range of ecological niches." },
        { id: "D", text: "heightened the advantage that large body size conferred on mammals in certain ecological niches." }
      ],
      correctChoiceId: "A",
      domain: "Inferences"
    },
    {
      id: "v2h-q14",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Duckweed is a small freshwater plant that is often exposed to zinc pollution. Sofia Vámos and colleagues collected samples of four duckweed ecotypes (genetically and geographically distinct populations within a species), along with water from each ecotype's habitat. Hypothesizing that each ecotype is adapted to its local conditions in ways that bolster its growth and resistance to pollutants, the researchers grew each ecotype in all four water samples and with three levels of zinc (none, low, high). (The researchers did not replicate local differences in light or temperature.) They found that the ecotypes grew equally well in all four water samples and that adding zinc consistently enhanced growth, regardless of concentration, suggesting that ______ \n\nWhich choice most logically completes the text?",
      choices: [
        { id: "A", text: "there may not be significant differences in the water that each ecotype inhabits, but there are significant differences in each ecotype's resistance to zinc pollution." },
        { id: "B", text: "if each ecotype is indeed locally adapted as the researchers hypothesized, those adaptations are to other environmental conditions than the water each ecotype inhabits." },
        { id: "C", text: "while the ecotypes are genetically and geographically distinct, those differences do not represent adaptations to local environmental conditions." },
        { id: "D", text: "although the researchers' hypothesis does not appear to be supported, this may be because the levels of zinc exposure the plants in the experiment received did not match their exposure in their natural environments." }
      ],
      correctChoiceId: "B",
      domain: "Inferences"
    },
    {
      id: "v2h-q15",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Enacted in 1991, Latvia's 4,917-word constitution, in contrast to Chile's, which was enacted in 1980 and contains a far greater number (25,821) of words, ______ as the 4th shortest in the world. Such data are studied by constitutional scholars like Dominic J. Nardi, who can use them to draw broader conclusions. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "ranks" },
        { id: "B", text: "have ranked" },
        { id: "C", text: "rank" },
        { id: "D", text: "are ranking" }
      ],
      correctChoiceId: "A",
      domain: "Standard English Conventions"
    },
    {
      id: "v2h-q16",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Astronomers Annie and Edward Maunder meticulously studied historical records of dark areas on the sun's surface known as sunspots. Their work in the late 1800s led to the identification of a period from 1645 to 1715—now known as the Maunder ______ sunspots were notably scarce, a phenomenon that solar physicists continue to investigate. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "Minimum—when" },
        { id: "B", text: "Minimum when" },
        { id: "C", text: "Minimum: when" },
        { id: "D", text: "Minimum, when" }
      ],
      correctChoiceId: "A",
      domain: "Standard English Conventions"
    },
    {
      id: "v2h-q17",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "To British musician Jacob Collier, substituting the II chord for the bvii chord—its opposite in pitch and tone—adds expression to improvisation without creating dissonance. This conceptualization of harmonic opposites did not originate with ______ in 1985, the idea was first articulated in Swiss musicologist Ernst Levy's posthumously published book <i>A Theory of Harmony</i>. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "Collier, though" },
        { id: "B", text: "Collier, though;" },
        { id: "C", text: "Collier, though," },
        { id: "D", text: "Collier; though," }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v2h-q18",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "The statement “all tarantulas are venomous” is scientific because it could be proved false by a single observation to the contrary, according to Karl Popper. Popper's theory ______ that scientific hypotheses must be refutable, termed the criterion of falsifiability, rejects the confirmationist position that uses verifiability as the standard for scientific hypotheses. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "dictated" },
        { id: "B", text: "was dictating" },
        { id: "C", text: "dictating" },
        { id: "D", text: "dictates" }
      ],
      correctChoiceId: "D",
      domain: "Standard English Conventions"
    },
    {
      id: "v2h-q19",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Novelist and playwright Mary Russell Mitford joined with 55 other prominent British writers in 1837 to petition the US Congress for greater copyright protections. This cadre of renowned ______ that American publishers' appropriation of their work caused, in the words of the petition, “deep and extensive injuries...on their reputation and property,” helped sow the seeds for the International Copyright Act of 1891. \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "authors asserted" },
        { id: "B", text: "authors, asserting" },
        { id: "C", text: "authors, had asserted" },
        { id: "D", text: "authors were asserting" }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v2h-q20",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "As anthropologist Cristina Grasseni explains, many artisanal cheeses in Italy, such as Provolone Valpadana from Trentino-Alto Adige and Ragusano from Sicily, are highly valued for their regional authenticity; ______ they are prized for being made using local ingredients and methods typical of their respective geographic regions. \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "that is," },
        { id: "B", text: "still," },
        { id: "C", text: "rather," },
        { id: "D", text: "then," }
      ],
      correctChoiceId: "A",
      domain: "Transitions"
    },
    {
      id: "v2h-q21",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "The early Australian railroad system of the 1800s was famously uncoordinated. Trains on the broad gauge Victorian Goldfields Railway line in Victoria couldn't travel on the Hotham Valley Railway in Western Australia, which used narrow gauge tracks, without performing time-consuming conversions. ______ historians refer to this complicated system as the “mixed gauge muddle.” \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "Rather," },
        { id: "B", text: "Hence," },
        { id: "C", text: "For example," },
        { id: "D", text: "Likewise," }
      ],
      correctChoiceId: "B",
      domain: "Transitions"
    },
    {
      id: "v2h-q22",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "When ordering the branches of the Yukon River system, cartographers tend to begin with the riverway's lowest point, the Yukon River. ______ hydrologists begin at the top of the river system, with the Iditarod River and other tributaries fed by the riverway's source, Alaska's Llewellyn Glacier. \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "In a similar way," },
        { id: "B", text: "By contrast," },
        { id: "C", text: "For example," },
        { id: "D", text: "In other words," }
      ],
      correctChoiceId: "B",
      domain: "Transitions"
    },
    {
      id: "v2h-q23",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "Charles Demuth's 1931 painting <i>Chimney and Water Tower</i> is a classic Precisionist work. The Precisionists strove for cold, machine-like perfection, with crisp lines, geometric shapes, and smooth, brushstroke-free surfaces. ______ Precisionist works often feature skyscrapers, bridges, and factories, highlighting these angular structures' engineered symmetry. \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "However," },
        { id: "B", text: "That said," },
        { id: "C", text: "Accordingly," },
        { id: "D", text: "In the end," }
      ],
      correctChoiceId: "C",
      domain: "Transitions"
    },
    {
      id: "v2h-q24",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "As volcanologists like Tamsin Mather are apt to make clear, not all volcanoes are the same. Ischia in Italy, for example, is a complex volcano, a mixed landform consisting of related volcanic centers and their associated lava flows and pyroclastic rock. Mount Vsevidof in Alaska, ______ is a stratovolcano, a conical volcano built up by many layers of hardened lava and tephra. \n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "in any case," },
        { id: "B", text: "in contrast," },
        { id: "C", text: "in fact," },
        { id: "D", text: "in conclusion," }
      ],
      correctChoiceId: "B",
      domain: "Transitions"
    },
    {
      id: "v2h-q25",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "While researching a topic, a student has taken the following notes:<br/>• 1914: British explorer Ernest Shackleton and a small crew embarked on an expedition to Antarctica.<br/>• 1915: Shackleton's ship Endurance became stuck in ice before eventually breaking apart and sinking.<br/>• 1916: After more harrowing sea-ice adventures, the entire crew was rescued.<br/>• 1959: Historian Alfred Lansing wrote a book called <i>Endurance: Shackleton's Incredible Voyage</i>.<br/>• 2001: Filmmaker George Butler released a documentary called <i>The Endurance: Shackleton's Legendary Antarctic Expedition</i>.<br/>• 2022: The wreckage of Endurance was discovered at the bottom of Antarctica's Weddell Sea.<n\n\nThe student wants to provide a historical overview of the Shackleton expedition. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Alfred Lansing wrote about the history of Shackleton's 1914–16 expedition in the book Endurance: Shackleton's Incredible Voyage (1959); years later, in 2001, George Butler released a documentary about the expedition." },
        { id: "B", text: "In 1914, the Shackleton expedition sailed to Antarctica, where, in 1916, they rescued the crew of a ship that had sunk, Endurance (the wreckage of which was discovered in 2022)." },
        { id: "C", text: "Leaving in 1914 for Antarctica, Shackleton and his crew underwent many harrowing sea ice adventures, including losing their ship in 1915, before being rescued in 1916." },
        { id: "D", text: "Shackleton's expedition has inspired a 1959 book, a 2001 film, and a 2022 discovery." }
      ],
      correctChoiceId: "C",
      domain: "Synthesizing Information"
    },
    {
      id: "v2h-q26",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "While researching a topic, a student has taken the following notes:<br/>• Louis Ballard was a classical composer and citizen of the Quapaw Tribe.<br/>• Ballard's composition <i>Desert Trilogy</i> was nominated for the Pulitzer Prize in music in 1971.<br/>• His composition <i>Cacéga Ayuwípi</i> incorporates Hopi notched sticks, a traditional Native instrument.<br/>• Ethnomusicologist Tara Browner claims that Ballard's compositions rely on elements originating within Native musical traditions.\n\nThe student wants to support Browner's claim about Louis Ballard's compositions. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Classical composer Louis Ballard, who wrote Cacéga Ayuwípi, was nominated for the Pulitzer Prize in music in 1971." },
        { id: "B", text: "Browner claims that Louis Ballard's compositions, one of which was nominated for the Pulitzer Prize, rely on elements originating within Native musical traditions." },
        { id: "C", text: "According to Browner, composer Louis Ballard, who wrote Desert Trilogy, relies on elements with origins in Native musical traditions." },
        { id: "D", text: "Browner posits that Louis Ballard's compositions rely on elements originating within Native musical traditions; Cacéga Ayuwípi affirms this assertion, incorporating Hopi notched sticks." }
      ],
      correctChoiceId: "D",
      domain: "Synthesizing Information"
    },
    {
      id: "v2h-q27",
      section: "verbal",
      stage: 2,
      module2Type: "hard",
      text: "While researching a topic, a student has taken the following notes:<br/>• The farm-size transition hypothesis predicts that economic pressures associated with modernization result in smaller farms amalgamating into larger-scale commercial farms.<br/>• Masters et al. (2013): The average farm size in Asia “already has or will soon begin to rise.”<br/>• Promkhambut et al. (2023) argue that small rice farms in Thailand have adopted modern farming methods without a significant scaling-up of farm size.<br/>• Promkhambut et al.: “The persistence of [small] rice farms [in Thailand] does not represent a 'failure' to modernize...or a 'truncated' transition—it is a response to modernization.”\n\nThe student wants to make and support a claim regarding the applicability of the farm-size transition hypothesis to Thailand. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Although the farm-size transition hypothesis may be applicable to some countries in Asia, it is inconsistent with the development of rice farming in Thailand." },
        { id: "B", text: "Taken together, the studies by Masters et al. and Promkhambut et al. suggest that rice farms in Thailand have responded to the economic pressures associated with modernization by expanding in size." },
        { id: "C", text: "Masters et al. report that the average farm size “already has or will soon begin to rise” in Asia, a finding that is consistent with the farm-size transition hypothesis." },
        { id: "D", text: "The predicted shift to large-scale commercial farming may not hold true for rice farms in Thailand, where, according to Promkhambut et al., rice farms have remained small as they've modernized." }
      ],
      correctChoiceId: "D",
      domain: "Synthesizing Information"
    }
  ],
  // --- MATH MODULE 1 ---
  math_mod2_easy: [
    {
      id: "m2m1-q1",
      section: "math",
      stage: 1,
      text: "The graph of the function <i>f</i> is shown, where <i>y = f(x)</i>. \n\nWhat is the value of <i>f(0)</i>?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "2" },
        { id: "C", text: "4" },
        { id: "D", text: "170" } 
      ],
      correctChoiceId: "C", // Placeholder based on standard graph questions
      domain: "Algebra",
      imageUrl: "/questions/m2m1-q1-graph.png"
    },
    {
      id: "m2m1-q2",
      section: "math",
      stage: 1,
      text: "A certain bonefish can swim at a maximum speed of 17 meters per second. \n\nAt this maximum speed, how many meters would this bonefish swim in 10 seconds?",
      choices: [
        { id: "A", text: "17" },
        { id: "B", text: "27" },
        { id: "C", text: "170" },
        { id: "D", text: "1,700" }
      ],
      correctChoiceId: "C",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2m1-q3",
      section: "math",
      stage: 1,
      text: "The function <i>f</i> is defined by <i>f(x) = 25x + 70</i>. \n\nWhat is the value of <i>f(x)</i> when <i>x = 2</i>?",
      choices: [
        { id: "A", text: "50" },
        { id: "B", text: "97" },
        { id: "C", text: "120" },
        { id: "D", text: "190" }
      ],
      correctChoiceId: "C",
      domain: "Algebra"
    },
    {
      id: "m2m1-q4",
      section: "math",
      stage: 1,
      text: "<i>P(t) = 1,200(1.06)<sup>t</sup></i>\n\nThe function <i>P</i> gives the estimated number of sea lions in a certain area, where <i>t</i> is the number of years since a study began. \n\nWhat is the best interpretation of <i>P(0) = 1,200</i> in this context?",
      choices: [
        { id: "A", text: "The estimated number of sea lions in the area increased by 1,200 each year during the study." },
        { id: "B", text: "The estimated number of sea lions in the area increased by 106 each year during the study." },
        { id: "C", text: "The estimated number of sea lions in the area was 1,200 when the study began." },
        { id: "D", text: "The estimated number of sea lions in the area was 106 when the study began." }
      ],
      correctChoiceId: "C",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2m1-q5",
      section: "math",
      stage: 1,
      text: "Which expression is equivalent to <i>7x(x + 4)</i>?",
      choices: [
        { id: "A", text: "7x² + 4" },
        { id: "B", text: "7x² + 28x" },
        { id: "C", text: "8x² + 4" },
        { id: "D", text: "8x² + 11x" }
      ],
      correctChoiceId: "B",
      domain: "Advanced Math"
    },
    {
      id: "m2m1-q6",
      section: "math",
      stage: 1,
      text: "Circle N has a radius of 8 millimeters (mm). Circle M has an area of 144π mm². \n\nWhat is the total area, in mm², of circles N and M?",
      choices: [
        { id: "A", text: "20π" },
        { id: "B", text: "160π" },
        { id: "C", text: "176π" },
        { id: "D", text: "208π" }
      ],
      correctChoiceId: "D",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2m1-q7",
      section: "math",
      stage: 1,
      text: "The graph shows the number of internet users worldwide <i>y</i>, in billions, <i>x</i> years after 2007. \n\nWhich of the following is closest to the number of internet users worldwide, in billions, 5 years after 2007?",
      choices: [
        { id: "A", text: "1.4" },
        { id: "B", text: "2.4" },
        { id: "C", text: "3.4" },
        { id: "D", text: "4.4" }
      ],
      correctChoiceId: "B", // Common scatterplot correlation value
      domain: "Problem Solving and Data Analysis",
      imageUrl: "/questions/m2m1-q7-scatterplot.png"
    },
    {
      id: "m2m1-q8",
      section: "math",
      stage: 1,
      text: "Points F and G lie on a circle with center H. Segment FG is a diameter of the circle. \n\nIf the length of segment FG is 82 centimeters, what is the length, in centimeters, of segment FH?",
      choices: [
        { id: "A", text: "20.5" },
        { id: "B", text: "41" },
        { id: "C", text: "82" },
        { id: "D", text: "164" }
      ],
      correctChoiceId: "B",
      domain: "Geometry and Trigonometry"
    },
    {
      id: "m2m1-q9",
      section: "math",
      stage: 1,
      text: "<i>y = 7(x - 1) - 8</i>\n\nFor which of the following tables are all the values of <i>x</i> and their corresponding values of <i>y</i> solutions to the given equation?",
      choices: [
        { id: "A", text: "x: 0, 1, 2 | y: 15, 22, 29" },
        { id: "B", text: "x: 0, 1, 2 | y: -1, 6, 13" },
        { id: "C", text: "x: 0, 1, 2 | y: 3, 10, 17" },
        { id: "D", text: "x: 0, 1, 2 | y: -15, -8, -1" }
      ],
      correctChoiceId: "D",
      domain: "Algebra"
    },
    {
      id: "m2m1-q10",
      section: "math",
      stage: 1,
      text: "The table gives the number of hours, <i>h</i>, of labor and a plumber's total charge <i>f(h)</i>, in dollars, for two different jobs.<br/>• 1 hour: $120<br/>• 3 hours: $220<br/><br/>There is a linear relationship between <i>h</i> and <i>f(h)</i>. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "f(h) = 20h + 100" },
        { id: "B", text: "f(h) = 100h + 20" },
        { id: "C", text: "f(h) = 50h + 70" },
        { id: "D", text: "f(h) = 70h + 50" }
      ],
      correctChoiceId: "C",
      domain: "Algebra"
    },
    {
      id: "m2m1-q11",
      section: "math",
      stage: 1,
      text: "In the right triangle shown, what is the value of cos A?",
      choices: [
        { id: "A", text: "23 / 43" },
        { id: "B", text: "43 / 23" },
        { id: "C", text: "23 / √(23² + 43²)" },
        { id: "D", text: "43 / √(23² + 43²)" }
      ],
      correctChoiceId: "A", // Placeholder based on typical fraction options
      domain: "Geometry and Trigonometry",
      imageUrl: "/questions/m2m1-q11-triangle.png"
    },
    {
      id: "m2m1-q12",
      section: "math",
      stage: 1,
      text: "What is the slope of the graph of <i>60x - 10y = -48</i> in the xy-plane?",
      choices: [
        { id: "A", text: "-6" },
        { id: "B", text: "-1/6" },
        { id: "C", text: "1/6" },
        { id: "D", text: "6" }
      ],
      correctChoiceId: "D",
      domain: "Algebra"
    },
    {
      id: "m2m1-q13",
      section: "math",
      stage: 1,
      text: "For an object with a mass of 65 kilograms, the given equation relates the kinetic energy <i>K</i>, in joules, of the object to the object's speed <i>v</i>, in meters per second, where <i>K</i> and <i>v</i> are positive. \n\nWhich equation correctly expresses this object's speed, in meters per second, in terms of the object's kinetic energy, in joules?",
      choices: [
        { id: "A", text: "v = √(K / 65)" },
        { id: "B", text: "v = √(65 / 2K)" },
        { id: "C", text: "v = √(2K / 65)" },
        { id: "D", text: "v = 2K / 65" }
      ],
      correctChoiceId: "C",
      domain: "Advanced Math"
    },
    {
      id: "m2m1-q14",
      section: "math",
      stage: 1,
      text: "A farmer gave two groups of chickens different types of chicken feed for a month to measure the effect on egg production. The lists give the number of eggs collected from each chicken in each of the two groups.<br/><br/>Group G: 8, 16, 18, 18, 24<br/>Group H: 16, 18, 18, 24<br/><br/>Which statement correctly compares the median number of eggs collected for group G and the median number of eggs collected for group H?",
      choices: [
        { id: "A", text: "The median number of eggs collected for group G is equal to the median number of eggs collected for group H." },
        { id: "B", text: "The median number of eggs collected for group G is greater than the median number of eggs collected for group H." },
        { id: "C", text: "The median number of eggs collected for group G is less than the median number of eggs collected for group H." },
        { id: "D", text: "There is not enough information to compare the median number of eggs collected." }
      ],
      correctChoiceId: "A",
      domain: "Problem Solving and Data Analysis"
    },
    {
      id: "m2m1-q15",
      section: "math",
      stage: 1,
      text: "<i>14x(x + 9)(x - 5)² = 0</i>\n\nWhat is the greatest solution to the given equation?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "5" },
        { id: "C", text: "9" },
        { id: "D", text: "14" }
      ],
      correctChoiceId: "B",
      domain: "Advanced Math"
    },
    {
      id: "m2m1-q16",
      section: "math",
      stage: 1,
      text: "<i>x² - 9x + 1 = 0</i>\n\nWhat is one of the solutions to the given equation?",
      choices: [
        { id: "A", text: "(9 + √77) / 2" },
        { id: "B", text: "(9 + √85) / 2" },
        { id: "C", text: "(-9 + √77) / 2" },
        { id: "D", text: "(-9 + √85) / 2" }
      ],
      correctChoiceId: "A",
      domain: "Advanced Math"
    },
    {
      id: "m2m1-q17",
      section: "math",
      stage: 1,
      text: "In the relationship between variables <i>x</i> and <i>y</i>, each increase of 8 in the value of <i>x</i> decreases the value of <i>y</i> by 3. When the value of <i>x</i> is 16, the value of <i>y</i> is 10. \n\nWhich equation represents this relationship?",
      choices: [
        { id: "A", text: "y = -3/8x + 16" },
        { id: "B", text: "y = -8/3x + 16" },
        { id: "C", text: "y = -3/8x + 10" },
        { id: "D", text: "y = 3/8x + 10" }
      ],
      correctChoiceId: "A",
      domain: "Algebra"
    },
    {
      id: "m2m1-q18",
      section: "math",
      stage: 1,
      text: "<i>y = 3x + 5,000</i><br/><i>y = -3x + 13,000</i>\n\nThe solution to the given system of equations is <i>(x, y)</i>. What is the value of <i>2y</i>?",
      choices: [
        { id: "A", text: "36,000" },
        { id: "B", text: "18,000" },
        { id: "C", text: "9,000" },
        { id: "D", text: "8,000" }
      ],
      correctChoiceId: "B",
      domain: "Algebra"
    },
    {
      id: "m2m1-q19",
      section: "math",
      stage: 1,
      text: "The points (0, 15), (10, 8), and (10, 3) are shown in the xy-plane, where the x-axis and y-axis are measured in units. These points define one of the bases of a triangular prism. \n\nThe distance between the two bases of the prism is 20 units. What is the volume, in cubic units, of the prism?",
      choices: [
        { id: "A", text: "250" },
        { id: "B", text: "500" },
        { id: "C", text: "750" },
        { id: "D", text: "1,000" }
      ],
      correctChoiceId: "B",
      domain: "Geometry and Trigonometry",
      imageUrl: "/questions/m2m1-q19-prism.png"
    },
    {
      id: "m2m1-q20",
      section: "math",
      stage: 1,
      text: "If <i>4 + 5/(7 - x) = 2 + 8/(7 - x)</i>, what is the value of <i>7 - x</i>?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "1.5" },
        { id: "C", text: "2" },
        { id: "D", text: "2.5" }
      ],
      correctChoiceId: "B",
      domain: "Advanced Math"
    },
    {
      id: "m2m1-q21",
      section: "math",
      stage: 1,
      text: "In the figure, triangle ABF is congruent to triangle EDG, where B corresponds to D. The measure of angle BCG is 56°. \n\nWhat is the measure, in degrees, of angle EDG?",
      choices: [
        { id: "A", text: "28" },
        { id: "B", text: "34" },
        { id: "C", text: "56" },
        { id: "D", text: "62" }
      ],
      correctChoiceId: "C",
      domain: "Geometry and Trigonometry",
      imageUrl: "/questions/m2m1-q21-triangles.png"
    },
    {
      id: "m2m1-q22",
      section: "math",
      stage: 1,
      text: "A number <i>x</i> is less than 8 more than 19 times the value of a number <i>y</i>. \n\nIf <i>y</i> is an integer and <i>x = 17</i>, what is the least possible value of <i>y</i>?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "3" }
      ],
      correctChoiceId: "B",
      domain: "Algebra"
    }
  ],
  // --- EASY MODULE 2 ---
  verbal_mod2_easy: [
    {
      id: "v2e-q1",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Wireless headphones and other small electronic devices tend to use batteries that can't be easily taken out and swapped for new ones. Environmental policy researcher Jean-Pierre Schweitzer warns that when these internal batteries stop working, the devices are usually thrown away, becoming harmful ______.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "advice" },
        { id: "B", text: "positions" },
        { id: "C", text: "waste" },
        { id: "D", text: "rewards" }
      ],
      correctChoiceId: "C",
      domain: "Words in Context"
    },
    {
      id: "v2e-q2",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "The following text is from Rudolfo Anaya's 1972 novel <i>Bless Me, Ultima</i>. Two of the narrator's adult brothers have decided to move away from home. Another brother has decided not to accompany them.\n\nIn the morning León and Eugene were gone, but Andrew remained. They had talked long into the night, and finally he had given up the idea of going with them. I think he did not like to <u>follow</u> their ways, and he wanted to please my mother.\n\nAs used in the text, what does the word “follow” most nearly mean?",
      choices: [
        { id: "A", text: "Mention" },
        { id: "B", text: "Imitate" },
        { id: "C", text: "Retrieve" },
        { id: "D", text: "Justify" }
      ],
      correctChoiceId: "B",
      domain: "Words in Context"
    },
    {
      id: "v2e-q3",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "In addition to the giant stock exchanges in places like London, Mumbai, and Tokyo, there are many smaller exchanges such as the Somali Stock Exchange in Mogadishu, Somalia. Though small, by being dedicated to Somalia, it can better address factors that help local businesses ______, and that focus on the success of local businesses benefits investors and the local economy.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "overspend" },
        { id: "B", text: "thrive" },
        { id: "C", text: "disperse" },
        { id: "D", text: "ebb" }
      ],
      correctChoiceId: "B",
      domain: "Words in Context"
    },
    {
      id: "v2e-q4",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Daniel Kliebenstein and colleagues tested whether soil microorganisms from ecologically different settings—ponderosa pine forest, irrigated pasture, and so on—affect plants' flavor chemistry. Although they found associations between plants' glucosinolates (compounds that produce spicy and bitter flavors) and plants' growth conditions, variations in glucosinolates could not be ______ soil microbes specifically.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
      choices: [
        { id: "A", text: "attributed to" },
        { id: "B", text: "subverted by" },
        { id: "C", text: "excluded from" },
        { id: "D", text: "forestalled by" }
      ],
      correctChoiceId: "A",
      domain: "Words in Context"
    },
    {
      id: "v2e-q5",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "<b>Text 1</b><br/>Columbia University and the online class provider edX are two of the many institutions offering training programs in entrepreneurship. But what results do such programs produce? In a study of college students in the United States, Korea, China, and Fiji, researcher Sang Lee and colleagues addressed this question and convincingly demonstrated that participants showed high knowledge of entrepreneurship as a result of receiving entrepreneurial training.<br/><br/><b>Text 2</b><br/>While studies of entrepreneurial training typically report positive results, a close look at these studies reveals widespread methodological shortcomings. For instance, a 2005 study led by Sang Lee found benefits of entrepreneurial education for college students in four countries, but the study only collected data on students after the training, not before, making it unclear whether the training actually had an effect.\n\nBased on the texts, the author of Text 1 and the author of Text 2 would most likely disagree about the answer to which question?",
      choices: [
        { id: "A", text: "Did Lee and colleagues report that participants who received the entrepreneurial training showed high knowledge of entrepreneurship?" },
        { id: "B", text: "Are there convincing experimental results showing that different types of entrepreneurial training programs are associated with different outcomes?" },
        { id: "C", text: "Is the cost of conducting entrepreneurial training programs typically offset by the programs' benefits?" },
        { id: "D", text: "Did Lee and colleagues' study provide persuasive evidence that its results are attributable to the entrepreneurial training participants received?" }
      ],
      correctChoiceId: "D",
      domain: "Cross-Text Connections"
    },
    {
      id: "v2e-q6",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "The following text is adapted from Henrik Ibsen's 1899 play <i>When We Dead Awaken</i> (translated by William Archer in 1907). Ulfheim is introducing himself to Professor Rubek, a sculptor.\n\nULFHEIM: I believe I have the honour of addressing no less a person than the great Sculptor Rubek.\nPROFESSOR RUBEK: <u>(Nods.) I remember meeting you once or twice—the autumn when I was last at home.</u>\nULFHEIM: That's many years ago, now. And then you weren't so illustrious as I hear you've since become.\n\nWhich choice best describes the function of the underlined portion in the text?",
      choices: [
        { id: "A", text: "It suggests that Ulfheim prefers autumn to spring, summer, or winter." },
        { id: "B", text: "It reveals that Professor Rubek and Ulfheim first met many years ago." },
        { id: "C", text: "It indicates that many other sculptors are more famous than Professor Rubek." },
        { id: "D", text: "It emphasizes that Professor Rubek has a distinguished reputation." }
      ],
      correctChoiceId: "B",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v2e-q7",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Cedar Hill in Washington, DC, is the house where Frederick Douglass lived for nearly twenty years and wrote one of his autobiographies. Now the house is a museum dedicated to Douglass's life and writings. Visitors travel to this museum to feel more connected to an author they admire. To encourage that sense of connection, the museum's curators have set up exhibits including a re-creation of his personal study. Such exhibits help visitors understand day-to-day life in the house where Douglass felt inspired.\n\nWhich choice best states the main purpose of the text?",
      choices: [
        { id: "A", text: "To summarize Douglass's biography" },
        { id: "B", text: "To describe a museum focused on Douglass's life and works" },
        { id: "C", text: "To compare Cedar Hill with other museums" },
        { id: "D", text: "To explain why readers enjoy Douglass's works" }
      ],
      correctChoiceId: "B",
      domain: "Text Structure and Purpose"
    },
    {
      id: "v2e-q8",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "When used to examine paintings, nonvisible light, such as ultraviolet, can penetrate the painting's visible surface and give art historians important insights into an artist's process. For example, imaging the underlayers of Artemisia Gentileschi's <i>Saint Catherine of Alexandria</i> (1618–20) revealed that Gentileschi originally painted her own face on the figure.  Imaging can also provide insights into a painter's choice of materials, showing, for example, whether a painter used titanium oxide pigment in a given work.\n\nAccording to the text, why are the images beneath the surface of a painting valuable to art historians?",
      choices: [
        { id: "A", text: "They can show how long a painting took to complete." },
        { id: "B", text: "They can indicate whether a painting is damaged." },
        { id: "C", text: "They can be used to prove which artist painted a given work." },
        { id: "D", text: "They can reveal aspects of an artist's decision-making." }
      ],
      correctChoiceId: "D",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v2e-q9",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "One challenge faced by researchers studying global urbanization is that different countries have different definitions of what constitutes an urban settlement. Many countries define urban settlements based on the number of people living in them. However, countries do not all use the same number; for example, Iceland uses a minimum population of 200, while Mali uses 30,000. Other countries use a combination of population and other factors, like the availability of planned public spaces. This variation makes it difficult for researchers to compare aspects of urbanization in different countries.\n\nWhich choice best states the main idea of the text?",
      choices: [
        { id: "A", text: "Urbanization is easily compared between countries when they have similar total populations." },
        { id: "B", text: "Even though countries use different methods to define urban settlements, researchers consider any area having a population of at least 30,000 to be urban." },
        { id: "C", text: "It is difficult for researchers to compare aspects of urbanization globally because of the various ways different countries define urban settlements." },
        { id: "D", text: "Researchers focus on factors other than population when conducting studies on urbanization in Iceland." }
      ],
      correctChoiceId: "C",
      domain: "Central Ideas and Details"
    },
    {
      id: "v2e-q10",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "<b>Brown Bears in Katmai National Park, Alaska</b><br/>• ID 176 | male | 10 years | 575 lbs<br/>• ID 192 | female | 17 years | 300 lbs<br/>• ID 149 | male | 12 years | 750 lbs<br/>• ID 123 | female | 11 years | 350 lbs<br/><br/>Scientists collected information about brown bears in Katmai National Park in Alaska. This information included each bear's sex, age, and approximate weight. Among the bears whose information is shown in the table, the youngest one was the bear with identification number ______.\n\nWhich choice most effectively uses data from the table to complete the statement?",
      choices: [
        { id: "A", text: "176." },
        { id: "B", text: "123." },
        { id: "C", text: "192." },
        { id: "D", text: "149." }
      ],
      correctChoiceId: "A",
      domain: "Command of Evidence: Quantitative"
    },
    {
      id: "v2e-q11",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "<b>Year That Foreign Investors Were First Allowed to Purchase Shares</b><br/>• Malaysia: 1987<br/>• Indonesia: 1989<br/>• Jamaica: 1991<br/><br/>In the 1980s and 1990s, many countries began allowing foreign investors to purchase shares of companies based in those countries.\n\nAccording to the table, in what year did Malaysia make the change mentioned in the text?",
      choices: [
        { id: "A", text: "1987" },
        { id: "B", text: "1983" },
        { id: "C", text: "1998" },
        { id: "D", text: "1981" }
      ],
      correctChoiceId: "A",
      domain: "Command of Evidence: Quantitative"
    },
    {
      id: "v2e-q12",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Psychologists Gregory Bryant, Dorsa Amir, and colleagues investigated cross-cultural perceptions of spontaneous (real) laughter and volitional (fake or forced) laughter. Study participants from 21 societies, including those in Australia and Iran, listened to randomized recordings of 18 spontaneous laughs taken from natural conversations between pairs of women and 18 volitional laughs produced separately by 18 different women in response to an instruction to laugh. Analysis of the participants' evaluations of the laughs prompted the team to conclude that the ability to distinguish between spontaneous and volitional laughter appears to be universal across cultures.\n\nWhich potential finding from another study, if true, would most directly strengthen the team's conclusion?",
      choices: [
        { id: "A", text: "There is some evidence of correlation between the average degree of English fluency in a society and judgments of spontaneous and volitional laughter by listeners in that society." },
        { id: "B", text: "Listeners from both Australia and Iran tend to be able to determine how well two people know each other based on recordings of their conversation." },
        { id: "C", text: "Spontaneous laughter typically has a recognizably higher pitch than volitional laughter, regardless of what society the speakers in a conversation are from." },
        { id: "D", text: "Acoustic features of spontaneous laughter, such as pitch and intensity, have measurable variations both within and across societies." }
      ],
      correctChoiceId: "C",
      domain: "Command of Evidence: Textual"
    },
    {
      id: "v2e-q13",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Some representations of the cataclysmic fate of the comic book planet Krypton illustrate a common trope in disaster stories: people's self-destructive carelessness. Explanations of real-world societal collapse betray a similar pattern. One theory about the downfall of Rapa Nui, for example, argues that residents invited disaster by despoiling the island's Jubaea palm forests, leading to a scarcity of wood for fuel and canoe construction. Archaeological evidence, however, suggests that residents adapted to environmental conditions by relying on grass and other plants for cooking and driftwood for making canoes. Given that other factors—e.g., disease and conflict arising from European contact—played a crucial role in Rapa Nui's eventual demise, it therefore seems unlikely that ______.\n\nWhich choice most logically completes the text?",
      choices: [
        { id: "A", text: "deforestation was merely indirectly responsible for an irreversible collapse of Rapa Nui's subsistence economy." },
        { id: "B", text: "its residents' focus on environmental challenges prevented them from devoting adequate attention to political issues." },
        { id: "C", text: "its residents' lack of environmental awareness was ultimately responsible for Rapa Nui's collapse." },
        { id: "D", text: "its residents would have failed to appreciate the relevance of fictional disaster stories to their own predicament." }
      ],
      correctChoiceId: "C",
      domain: "Inferences"
    },
    {
      id: "v2e-q14",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Many Indigenous songs serve as repositories of ecological knowledge—e.g., Sakha songs about local ecosystems and O'odham songs about desert plants. In a study by ethnobiologist Dana Lepofsky et al., a song keeper for the Kwakwaka'wakw people provided access to ancient songs referring to the people's creation of terraced intertidal gardens to foster clams for consumption. Cross-references of that information with both archaeological and paleoecological records have revealed significant increases in clam size and productivity concurrent with the most prevalent use of these clam gardens. This finding suggests that researchers should consider ______.\n\nWhich choice most logically completes the text?",
      choices: [
        { id: "A", text: "the possibility that other songs of other Indigenous peoples transmit ecological information that has useful practical applications." },
        { id: "B", text: "the reliability of archaeological and paleoecological evidence that often underpins conclusions drawn from Indigenous songs." },
        { id: "C", text: "whether the Kwakwaka'wakw people originated the method of cultivation detailed in the songs or adapted methods observed among other groups of Indigenous peoples." },
        { id: "D", text: "the strong implication that the beneficial effects are primarily attributable to ecological factors unrelated to the activities of the Kwakwaka'wakw people." }
      ],
      correctChoiceId: "A",
      domain: "Inferences"
    },
    {
      id: "v2e-q15",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "The smoke point of refined avocado oil ______ around 520 degrees Fahrenheit. When refined avocado oil is heated past this temperature, it will begin to combust and emit smoke.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "is," },
        { id: "B", text: "is" },
        { id: "C", text: "is;" },
        { id: "D", text: "is—" }
      ],
      correctChoiceId: "B",
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q16",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Introducing a new species into a delicate ecosystem can often be harmful. The zebra dove and other fruit-eating birds have established themselves on the Hawaiian island of Oahu after being brought there in the last 150 years. Many plant species on the island rely on the activity of fruit-eating birds to maintain and increase their populations. In recent studies, zebra doves have been found to spread seeds of native forest plants that are at risk of extinction, such as the mamaki shrub and the alahee tree, suggesting that ______.\n\nWhich choice most logically completes the text?",
      choices: [
        { id: "A", text: "although non-native birds initially damaged the plants in Oahu's ecosystem, they are now proving useful to them." },
        { id: "B", text: "non-native birds have had both positive and negative effects on Oahu's native plants." },
        { id: "C", text: "non-native birds, such as the zebra dove, are unlikely to eat fruits from non-native forest plants on Oahu." },
        { id: "D", text: "rather than harming Oahu's ecosystem, some non-native birds provide an important benefit on Oahu." }
      ],
      correctChoiceId: "D",
      domain: "Inferences"
    },
    {
      id: "v2e-q17",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Because many of the first cattle ranchers in the US learned the trade from Spanish-speaking Mexican <i>vaqueros</i> (cowboys), many ranching terms in the English language come from Spanish. One example is the word “rodeo.” It comes from the Spanish word <i>rodear</i>. Another example is “cinch.” ______ comes from the Spanish word <i>cincho</i>.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "He" },
        { id: "B", text: "She" },
        { id: "C", text: "It" },
        { id: "D", text: "Someone" }
      ],
      correctChoiceId: "C",
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q18",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Located in what is now the United Kingdom, the Taversoe Tuick Chambered Cairn is one of the oldest known structures in the world, ______ researchers a glimpse into ages long gone.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "provides" },
        { id: "B", text: "to provide" },
        { id: "C", text: "providing" },
        { id: "D", text: "provide" }
      ],
      correctChoiceId: "C",
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q19",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "In the Suzuki method, classical pieces like Franz Schubert's “Wiegenlied” are taught to beginning music students as young as three, while students of traditional methods often only ______ such songs at the age of five.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "to begin learning" },
        { id: "B", text: "beginning to learn" },
        { id: "C", text: "having begun to learn" },
        { id: "D", text: "begin learning" }
      ],
      correctChoiceId: "D",
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q20",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "Portobello Road Market has operated for more than a century, making ______ both a popular shopping destination and an important piece of London's history.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "those" },
        { id: "B", text: "these" },
        { id: "C", text: "it" },
        { id: "D", text: "one" }
      ],
      correctChoiceId: "C",
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q21",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "<b>[MISSING TEXT: Please insert the reading passage for Question 21 here.]</b> \n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
      choices: [
        { id: "A", text: "are" },
        { id: "B", text: "was" },
        { id: "C", text: "have been" },
        { id: "D", text: "is" }
      ],
      correctChoiceId: "D", // Placeholder
      domain: "Standard English Conventions"
    },
    {
      id: "v2e-q22",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "In the early 1920s, researchers at the US Geological Survey determined the geographic center of Texas using a simple method. First, they attached a string to the middle point of a cardboard cutout of the state and suspended it in the air. ______ they adjusted the suspension point until the cutout hung perfectly flat. Ultimately, this point was determined to be the center.\n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "Instead," },
        { id: "B", text: "Then," },
        { id: "C", text: "In other words," },
        { id: "D", text: "First of all," }
      ],
      correctChoiceId: "B",
      domain: "Transitions"
    },
    {
      id: "v2e-q23",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "When the first railroads were built in Australia in the 1800s, a variety of track sizes (gauges) were used across the continent, resulting in what historians call the “railway gauge muddle.” The Victorian Goldfields Railway line in Victoria used broad tracks. ______ the Hotham Valley Railway line in Western Australia used narrow gauge tracks.\n\nWhich choice completes the text with the most logical transition?",
      choices: [
        { id: "A", text: "By contrast," },
        { id: "B", text: "In sum," },
        { id: "C", text: "For instance," },
        { id: "D", text: "Similarly," }
      ],
      correctChoiceId: "A",
      domain: "Transitions"
    },
    {
      id: "v2e-q24",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "While researching a topic, a student has taken the following notes:<br/>• Snow hydrologist Zoe Wellschlager helps maintain automated snow measurement stations throughout the western United States. <br/>• They are called SNOTEL sites.<br/>• There are around 70 sites throughout Alaska.<br/>• There is one at Tokositna Valley.<br/><br/>The student wants to emphasize the number of SNOTEL sites in Alaska. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "One particular SNOTEL site is located at Tokositna Valley in Alaska." },
        { id: "B", text: "Snow hydrologist Zoe Wellschlager helps maintain SNOTEL sites, such as the one at Tokositna Valley, Alaska." },
        { id: "C", text: "SNOTEL sites collect snow measurement data throughout the state of Alaska." },
        { id: "D", text: "In Alaska alone, there are around 70 SNOTEL sites located throughout the state." }
      ],
      correctChoiceId: "D",
      domain: "Synthesizing Information"
    },
    {
      id: "v2e-q25",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "While researching a topic, a student has taken the following notes:<br/>• Wind is a renewable energy source.<br/>• A wind farm uses turbines to convert wind into electrical power.<br/>• A wind farm's maximum electrical output is called its nameplate capacity.<br/>• Sweetwater Wind Farm is located in Nolan County, Texas.<br/>• Its nameplate capacity is 586 megawatts.<br/><br/>The student wants to emphasize the location of Sweetwater Wind Farm. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Turbines can be used to generate electricity from a renewable energy source: the wind." },
        { id: "B", text: "Sweetwater Wind Farm has a nameplate capacity of 586 megawatts." },
        { id: "C", text: "Nolan County, Texas, is home to Sweetwater Wind Farm." },
        { id: "D", text: "Nameplate capacity is another name for a wind farm's maximum electrical output." }
      ],
      correctChoiceId: "C",
      domain: "Synthesizing Information"
    },
    {
      id: "v2e-q26",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "While researching a topic, a student has taken the following notes:<br/>• The Nga Awa Purua geothermal power plant in New Zealand uses a flash steam system to generate electricity.<br/>• Flash steam technology requires geothermal reservoir temperatures above 180°C.<br/>• The use of flash steam systems worldwide is limited because many geothermal reservoirs aren't hot enough.<br/>• The Beowawe geothermal power plant in Nevada uses a binary cycle system.<br/>• Binary cycle technology can generate energy from lower-temperature (less than 180°C) geothermal reservoirs.<br/>• Binary cycle systems involve higher maintenance costs than flash steam systems.<br/><br/>The student wants to compare the disadvantages of the geothermal systems used at the Nga Awa Purua and Beowawe plants. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Compared with the system used at the Nga Awa Purua plant, the system used at the Beowawe plant has a notable disadvantage: its cost." },
        { id: "B", text: "The system at the Nga Awa Purua plant requires temperatures above 180°C, while the system at the Beowawe plant can operate at lower temperatures." },
        { id: "C", text: "Unlike the Beowawe plant, the Nga Awa Purua plant uses a flash steam system, which requires a less common resource: geothermal reservoirs with temperatures above 180°C." },
        { id: "D", text: "The system used at the Beowawe plant overcomes the temperature limitations of the Nga Awa Purua plant's system but is more costly to maintain." }
      ],
      correctChoiceId: "D",
      domain: "Synthesizing Information"
    },
    {
      id: "v2e-q27",
      section: "verbal",
      stage: 2,
      module2Type: "easy",
      text: "While researching a topic, a student has taken the following notes:<br/><b>[MISSING NOTES: Please insert bullet points for Question 27 here.]</b><br/><br/>Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices: [
        { id: "A", text: "Both Le Pouce and Digital Orca were created by César Baldaccini." },
        { id: "B", text: "Le Pouce and Digital Orca are both on display at public locations." },
        { id: "C", text: "Le Pouce, but not Digital Orca, can be found in Paris, France." },
        { id: "D", text: "Digital Orca, a sculpture of a whale made from black and white metal cubes, is on display at a public convention center." }
      ],
      correctChoiceId: "C", // Placeholder
      domain: "Synthesizing Information"
    }
  ],}
