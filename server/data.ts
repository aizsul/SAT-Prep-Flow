
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
} = 
{
  "verbal_mod1": [
    {
      "id": "v1-q1",
      "section": "verbal",
      "stage": 1,
      "text": "The way in which individual elements are balanced within a photographic image tends to affect how viewers perceive it: symmetry tends to give the elements equal importance, asymmetry emphasizes differences, and radial balance (organizing the elements around a central point) emphasizes the center over the periphery. What a photograph conveys is therefore largely contingent on how it is balanced.",
      "choices": [
        { "id": "A", "text": "inhibited by" },
        { "id": "B", "text": "contingent on" },
        { "id": "C", "text": "obligated to" },
        { "id": "D", "text": "reserved for" }
      ],
      "correctChoiceId": "B",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q2",
      "section": "verbal",
      "stage": 1,
      "text": "Microhistories tackle \"big questions\" about broad phenomena via narrow subjects. The questions they ask are often contingent on the practitioner's milieu. Distinct strains of microhistory emerged at different times in France, Russia, and elsewhere, for example, and while microhistories of the 1980s reflected the era's interest in women's history, the \"global turn\" in recent historiography sparked a wave of globally contextualized microhistories.",
      "choices": [
        { "id": "A", "text": "peripheral to the practitioner's discipline" },
        { "id": "B", "text": "indicative of the practitioner's ingenuity" },
        { "id": "C", "text": "controversial within the practitioner's specialty" },
        { "id": "D", "text": "contingent on the practitioner's milieu" }
      ],
      "correctChoiceId": "D",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q3",
      "section": "verbal",
      "stage": 1,
      "text": "The Stock Exchange of Thailand in Bangkok, Thailand, is a dedicated exchange for investing in companies operating in Thailand, ensuring those companies receive certain regulatory oversight. Knowing this can assuage potential investors' worries about bureaucratic minutiae and thereby allow them to instead focus on identifying sound business opportunities.",
      "choices": [
        { "id": "A", "text": "designate" },
        { "id": "B", "text": "amplify" },
        { "id": "C", "text": "assuage" },
        { "id": "D", "text": "convey" }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q4",
      "section": "verbal",
      "stage": 1,
      "text": "Farmhouse Interior, painted in the realist style by Jan Hendrik Weissenbruch, depicts a peasant woman knitting at a table while a cat sits underneath. The realists' emphasis on accurately portraying the experiences of average working people was largely a rejection of the romantic style evident in many paintings by Pierre-Auguste Cot, which instead exaggerate their subjects' beauty or heroism while hiding all imperfection.",
      "choices": [
        { "id": "A", "text": "undermine" },
        { "id": "B", "text": "correct" },
        { "id": "C", "text": "exaggerate" },
        { "id": "D", "text": "mock" }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q5",
      "section": "verbal",
      "stage": 1,
      "text": "Fossil evidence indicates that the End-Cretaceous mass extinction—the relatively sudden die-off of about 75 percent of species (including many species of mosasaurs)—occurred approximately 66 million years ago. Researchers have identified the effects of volcanic activity as a possible initial cause of this mass extinction. But mass extinctions, while abrupt in geological terms, unfold over thousands or millions of years; it's likely that multiple factors drove extensive species loss.",
      "choices": [
        { "id": "A", "text": "It offers support for an earlier claim about the primary cause of a mass extinction that is then qualified by the information." },
        { "id": "B", "text": "It concedes that the pace of mass extinctions as described in the information that follows is perceived differently when considered from another point of view." },
        { "id": "C", "text": "It emphasizes that a question about the beginning of a mass extinction raised by the researchers mentioned earlier is still unresolved." },
        { "id": "D", "text": "It expands on the uncertainty mentioned earlier regarding the pace of extinction of species of mosasaurs relative to that of other species." }
      ],
      "correctChoiceId": "B",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q6",
      "section": "verbal",
      "stage": 1,
      "text": "What is a city? The answer depends on where you live! Many countries define an area as a city based on how many people live there. However, not every country uses the same numbers. Albania defines a city as an area with a population of at least 400, while Greece defines a city as having a minimum population of 10,000. Some countries even define cities using other factors, like the number of buildings in the area.",
      "choices": [
        { "id": "A", "text": "It lists the number of cities in one country, then compares that number to the number of cities in another country." },
        { "id": "B", "text": "It poses a question, then explains why the question has many answers." },
        { "id": "C", "text": "It describes two locations, then explains why only one of the locations is considered a city." },
        { "id": "D", "text": "It offers a recommendation, then provides reasons for that recommendation." }
      ],
      "correctChoiceId": "B",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q7",
      "section": "verbal",
      "stage": 1,
      "text": "Though Vasily Grossman's novel Stalingrad is considered inferior to his later work Life and Fate, some critics praise it despite an arduous writing process required to satisfy Soviet censors (Aaron Lake Smith in Harper's Magazine called Stalingrad \"an accomplished historical war novel\"). Of the novel's eleven drafts, the first is largely illegible, the sixth closely hews to Soviet orthodoxy, and published versions most resemble the fifth. The English edition's translators culled material from unpublished drafts and published Russian versions to create a comprehensive edition.",
      "choices": [
        { "id": "A", "text": "It describes a novel whose critical reputation has declined over time, explains the cause of that decline, and reports the effort of translators to rehabilitate a work they believe has been unjustly ignored." },
        { "id": "B", "text": "It mentions a novel whose quality critics do not agree on, discusses obstacles that make it difficult to determine what the best version of that novel might be, and offers a reason why some critics find a translation of the novel to be superior to the original." },
        { "id": "C", "text": "It notes a novel's critical reception, addresses the complicated history of the novel's development, and suggests how that history informed the work of the novel's English translators." },
        { "id": "D", "text": "It refers to a novel that has several different published and unpublished versions, identifies characteristics that have led critics to prefer one version to others, and tells how translators justified their choice to bring one particular version of the novel into another language." }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q8",
      "section": "verbal",
      "stage": 1,
      "text": "Text 1: Graphic novels are increasingly popular in bookstores and libraries, but they shouldn't be classified as literature. By definition, literature tells a story or conveys meaning through language only; graphic novels tell stories through illustrations and use language only sparingly, in captions and dialogue. Graphic novels are experienced as series of images and not as language, making them more similar to film than to literature. Text 2: Graphic novels present their stories through both language and images. Without captions and dialogue, readers would be unable to understand what is depicted in the illustrations: the story results from the interaction of text and image. Moreover, Alison Bechdel's Fun Home and many other graphic novels feature text that is as beautifully written as the prose found in many standard novels. Therefore, graphic novels qualify as literary texts.",
      "choices": [
        { "id": "A", "text": "By asserting that language plays a more important role in graphic novels than the author of Text 1 recognizes." },
        { "id": "B", "text": "By acknowledging that the author of Text 1 has identified a flaw that is common to all graphic novels." },
        { "id": "C", "text": "By suggesting that the story lines of certain graphic novels are more difficult to understand than the author of Text 1 claims." },
        { "id": "D", "text": "By agreeing with the author of Text 1 that most graphic novels aren't as well crafted as most literary works are." }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q9",
      "section": "verbal",
      "stage": 1,
      "text": "Cats can judge unseen people's positions in space by the sound of their voices and thus react with surprise when the same person calls to them from two different locations in a short span of time. Saho Takagi and colleagues reached this conclusion by measuring cats' levels of surprise based on their ear and head movements while the cats heard recordings of their owners' voices from two speakers spaced far apart. Cats exhibited a low level of surprise when owners' voices were played twice from the same speaker, but they showed a high level of surprise when the voice was played once each from the two different speakers.",
      "choices": [
        { "id": "A", "text": "They watched how each cat moved its ears and head." },
        { "id": "B", "text": "They examined how each cat reacted to the voice of a stranger." },
        { "id": "C", "text": "They studied how each cat physically interacted with its owner." },
        { "id": "D", "text": "They tracked how each cat moved around the room." }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q10",
      "section": "verbal",
      "stage": 1,
      "text": "Matthew D. Rocklage and team examined whether consumer ratings of movies can predict box office success. The team considered both numeric star ratings and written reviews in their research. To analyze the written reviews, the team measured the emotionality—the degree to which a written review expresses an emotional reaction—of user reviews on a movie rating website, assigning each review an emotionality score. After reviewing this research, a student argues that the emotionality of movie reviews is unrelated to a movie's success at the box office.",
      "choices": [
        { "id": "A", "text": "Movies that had the highest average emotionality scores received the lowest average star ratings on the movie rating website." },
        { "id": "B", "text": "The average emotionality score of a movie's reviews was a positive predictor of that movie's box office earnings." },
        { "id": "C", "text": "More than half of the movies that the team examined received an average star rating of 3 out of 5 stars." },
        { "id": "D", "text": "The movies that were most successful at the box office tended to have high average star ratings." }
      ],
      "correctChoiceId": "B",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q11",
      "section": "verbal",
      "stage": 1,
      "text": "Researchers Carolina Laura Morales and Anna Traveset gathered data about flowering plants growing alongside each other in various locations. In each case, the researchers identified one plant as a \"target species\" and a nearby plant as a \"neighboring species.\" The researchers then calculated a positive or negative value to show how the neighboring species affected pollinator visits to the target species. One example of a neighboring species with a negative effect value is the...",
      "choices": [
        { "id": "A", "text": "Elands sourfig." },
        { "id": "B", "text": "creeping thistle." },
        { "id": "C", "text": "wild radish." },
        { "id": "D", "text": "leafy spurge." }
      ],
      "correctChoiceId": "D",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q12",
      "section": "verbal",
      "stage": 1,
      "text": "Microplastics are tiny pieces of plastic waste. Areas of the ocean with higher concentrations of microplastic particles also have smaller and fewer waves. A study by Yukun Sun and colleagues found that the concentration of microplastic particles cannot be the only reason for this reduced wave activity because the concentration of particles that would have the observed effect is much higher than that found in these areas of the ocean. However, they found that surfactants, chemicals often used to manufacture plastics, are released into the water from microplastics and have a much stronger wave-reducing effect.",
      "choices": [
        { "id": "A", "text": "They are mainly composed of water." },
        { "id": "B", "text": "They are helpful for removing microplastics from the ocean." },
        { "id": "C", "text": "They have a much stronger effect on wave activity than microplastics alone do." },
        { "id": "D", "text": "They can be used to contain microplastics within certain areas of the ocean." }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q13",
      "section": "verbal",
      "stage": 1,
      "text": "Issuing a one-dollar coin yields positive seigniorage—the profit generated when the face value of a coin exceeds the unit cost of producing it—for Singapore's government, which in turn can be used to fund such services as transportation. Some countries, such as the Netherlands, have ceased manufacturing certain coins because their production created negative seigniorage. In an economics class discussing the data in the table, one student argues that in 2023, the one-cent coin was the least financially sensible for the US to produce while another student argues that the five-cent coin was.",
      "choices": [
        { "id": "A", "text": "When evaluating the financial implications of issuing a coin, which is more important, the total seigniorage from issuing that coin or the seigniorage per dollar when issuing that coin?" },
        { "id": "B", "text": "If issuing a given coin results in negative seigniorage per dollar issued, can that be changed to positive seigniorage per dollar issued by reducing the cost of issuing the coin?" },
        { "id": "C", "text": "If issuing a given coin results in positive seigniorage per dollar but not as much positive seigniorage per dollar as issuing a different coin does, does it make financial sense to continue issuing the first coin?" },
        { "id": "D", "text": "When determining whether it makes financial sense to issue a given coin, which is more important, the total value of the units of that coin produced or the gross cost of issuing that coin?" }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q14",
      "section": "verbal",
      "stage": 1,
      "text": "Life Among the Paiutes is an 1882 autobiographical narrative by Sarah Winnemucca Hopkins. In the work, Winnemucca directly addresses the reader to establish her authority and credibility, writing...",
      "choices": [
        { "id": "A", "text": "\"My dear reader, I have not lived in this world for over thirty or forty years for nothing, and I know what I am talking about.\"" },
        { "id": "B", "text": "\"I was born somewhere near 1844, but am not sure of the precise time.\"" },
        { "id": "C", "text": "\"Oh, dear readers, these soldiers had gone only sixty miles away to Muddy Lake, where my people were then living and fishing.\"" },
        { "id": "D", "text": "\"But how can I describe the scene that followed? Some of you, dear readers, can imagine.\"" }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q15",
      "section": "verbal",
      "stage": 1,
      "text": "Pablo Picasso famously subverted the norms of traditional painting: in his cubist paintings he refused to let his expression be constrained, fragmenting objects and figures to present multiple perspectives simultaneously. Though less widely known, Picasso—who once lamented that writers of his time had limited themselves to \"moving around words somewhat while respecting the syntax\"—also wrote poetry that defied conventional grammar, semantic relationships, and text structure. Thus, the paintings and poems are linked in that...",
      "choices": [
        { "id": "A", "text": "the poems are intended to be understood as explanations of the artistic inclinations reflected in the paintings." },
        { "id": "B", "text": "both types of work are characterized by the simultaneous representation of multiple points of view that Picasso is known for." },
        { "id": "C", "text": "the poems present many of the same subjects as the paintings but with different thematic approaches." },
        { "id": "D", "text": "both exhibit Picasso's prioritization of creative expression over the standard rules of the art forms." }
      ],
      "correctChoiceId": "D",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q16",
      "section": "verbal",
      "stage": 1,
      "text": "Mary Cassatt and Edith Haworth were among the 300 artists who exhibited at the 1913 Armory Show, a groundbreaking New York City art exhibition that introduced modernism to American audiences. Marcel Duchamp's abstract cubist aesthetic received the most skepticism from critics, as it represented a radical departure from the more realistic painting style that was popular at the time.",
      "choices": [
        { "id": "A", "text": "we" },
        { "id": "B", "text": "it" },
        { "id": "C", "text": "they" },
        { "id": "D", "text": "these" }
      ],
      "correctChoiceId": "B",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q17",
      "section": "verbal",
      "stage": 1,
      "text": "Navajo artist Sally Black's mastery of traditional weaving techniques is apparent in her expertly crafted baskets, which typically are woven from sumac (a textured and flexible material) and feature bold colors.",
      "choices": [
        { "id": "A", "text": "had featured" },
        { "id": "B", "text": "were featuring" },
        { "id": "C", "text": "featured" },
        { "id": "D", "text": "feature" }
      ],
      "correctChoiceId": "D",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q18",
      "section": "verbal",
      "stage": 1,
      "text": "Named for the number of hoofed toes they possess, even-toed ungulates, such as the domestic goat (Capra aegagrus hircus), belong to a vast and diverse order of animals.",
      "choices": [
        { "id": "A", "text": "belongs" },
        { "id": "B", "text": "has belonged" },
        { "id": "C", "text": "is belonging" },
        { "id": "D", "text": "belong" }
      ],
      "correctChoiceId": "D",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q19",
      "section": "verbal",
      "stage": 1,
      "text": "Consider the mechanics of the pinhole camera: light passes through a small hole, resulting in a focused projected image. A ray diagram reveals how this works: it's because the hole's small size restricts light to a single ray, all light passing through the hole can only arrive at a single destination, eliminating diffraction and ensuring a clear image.",
      "choices": [
        { "id": "A", "text": "works because" },
        { "id": "B", "text": "works.Because" },
        { "id": "C", "text": "works,it’s because" },
        { "id": "D", "text": "works:it’s because" }
      ],
      "correctChoiceId": "D",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q20",
      "section": "verbal",
      "stage": 1,
      "text": "While the greater adjutant can be found in places like the Chao Phraya River in Thailand and the Teknaf Game Reserve in Bangladesh, more than 80 percent of this endangered stork species is found in Assam, India. There, wildlife biologist Dr. Purnima Devi Barman is on the front lines of conservation efforts that—through community involvement and scientific study—aim to bring adjutants back from near extinction.",
      "choices": [
        { "id": "A", "text": "study" },
        { "id": "B", "text": "study," },
        { "id": "C", "text": "study:" },
        { "id": "D", "text": "study—" }
      ],
      "correctChoiceId": "D",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q21",
      "section": "verbal",
      "stage": 1,
      "text": "Edwige Moyroud is a biologist at the University of Cambridge. She conducts research on plants.",
      "choices": [
        { "id": "A", "text": "Cambridge, she" },
        { "id": "B", "text": "Cambridge, she" },
        { "id": "C", "text": "Cambridge.She" },
        { "id": "D", "text": "Cambridge.Where she" }
      ],
      "correctChoiceId": "C",
      "domain": "Standard English Conventions"
    },
    {
      "id": "v1-q22",
      "section": "verbal",
      "stage": 1,
      "text": "Many English adjectives share a linguistic origin with their associated nouns, like the adjective \"monetary\" and the noun \"money,\" both of which come from the Latin \"monetarius.\" Nevertheless, some adjectives do not share an origin with their associated nouns. For example, the adjective \"bovine\" ultimately comes from the Latin \"bos,\" while its associated noun, \"cow,\" comes from the Old English \"cu.\"",
      "choices": [
        { "id": "A", "text": "Subsequently," },
        { "id": "B", "text": "For this reason," },
        { "id": "C", "text": "Nevertheless," },
        { "id": "D", "text": "Specifically," }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q23",
      "section": "verbal",
      "stage": 1,
      "text": "Amruta Yelamanchili has worked at NASA's famed Jet Propulsion Laboratory (JPL), one of the world's leading facilities for robotic space exploration. Specifically, Yelamanchili worked as a data scientist on the JPL's Mars 2020 Perseverance rover team, which improved upon the 2011 Curiosity rover design by adding a coring drill to the robot that could collect rock samples for later analysis.",
      "choices": [
        { "id": "A", "text": "Specifically," },
        { "id": "B", "text": "Conversely," },
        { "id": "C", "text": "Finally" },
        { "id": "D", "text": "Nevertheless" }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q24",
      "section": "verbal",
      "stage": 1,
      "text": "On a chilly spring morning in a Virginia park, as sunlight crested the treetops, Katrin Swoboda raised her Nikon D500 camera and captured an image that would win the Grand Prize in the 2019 Audubon Photography Awards: a red-winged blackbird, exhaling what appeared to be rings of smoke. Of course, the \"smoke\" was actually the blackbird's breath hitting the cold morning air as the bird sang.",
      "choices": [
        { "id": "A", "text": "Therefore," },
        { "id": "B", "text": "For example" },
        { "id": "C", "text": "Furthermore," },
        { "id": "D", "text": "Of course," }
      ],
      "correctChoiceId": "D",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q25",
      "section": "verbal",
      "stage": 1,
      "text": "The student wants to emphasize the global rank of Mali's youth population. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "choices": [
        { "id": "A", "text": "Making up roughly 40 percent of the continent's total population, Africa's under-fifteen population offers \"an opportunity for the continent's growth,\" according to the UN." },
        { "id": "B", "text": "\"Only if these new generations are fully empowered to realize their best potential,\" says the UN, will Africa's high percentage of young people lead to the continent's growth." },
        { "id": "C", "text": "With 47.3 percent of its population under fifteen years of age, Mali has the second-largest population for that age range in the world." },
        { "id": "D", "text": "Africa's high population of young people is due in part to the high percentage of young people in Mali." }
      ],
      "correctChoiceId": "C",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q26",
      "section": "verbal",
      "stage": 1,
      "text": "The student wants to explain what a sky island is. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "choices": [
        { "id": "A", "text": "The Galiuro Mountains are an isolated mountain range located in the southwestern United States whose environment differs drastically from that of the surrounding lowlands." },
        { "id": "B", "text": "The USFS considers the Galiuro Mountains to be a \"unique ecosystem.\"" },
        { "id": "C", "text": "The Galiuro Mountains, which are considered to be a sky island, are located in the southwestern US." },
        { "id": "D", "text": "A sky island is an isolated mountain range, such as the Galiuro Mountains in the southwestern US, whose environment differs drastically from that of the surrounding lowlands." }
      ],
      "correctChoiceId": "D",
      "domain": "Words in Context"
    },
    {
      "id": "v1-q27",
      "section": "verbal",
      "stage": 1,
      "text": "The student wants to indicate the location of the East Falkland Isthmus. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "choices": [
        { "id": "A", "text": "The East Falkland Isthmus is located in the Falkland Islands, where it connects Lafonia to the northern part of East Falkland." },
        { "id": "B", "text": "One example of an isthmus is the East Falkland Isthmus." },
        { "id": "C", "text": "An isthmus, also known as a land bridge, is a strip of land that connects two larger pieces of land across an expanse of water." },
        { "id": "D", "text": "An isthmus, or land bridge, like the East Falkland Isthmus, connects two larger pieces of land." }
      ],
      "correctChoiceId": "A",
      "domain": "Words in Context"
    }
  ],
  math_mod1: [
  {
    "id": "m1-q1",
    "section": "math",
    "stage": 1,
    "text": "For the polynomial function f, the graph of y = f(x) in the xy-plane passes through the points (−3, 0), (1, 0), and (7, 0). \n\nWhich of the following must be a factor of f(x)?",
    "choices": [
      { "id": "A", "text": "x + 1" },
      { "id": "B", "text": "x + 7" },
      { "id": "C", "text": "x − 1" },
      { "id": "D", "text": "x − 3" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q2",
    "section": "math",
    "stage": 1,
    "text": "Triangle ABC is similar to triangle XYZ, such that A, B, and C correspond to X, Y, and Z, respectively. The length of each side of triangle XYZ is 2 times the length of its corresponding side in triangle ABC. The measure of angle B is 17°. \n\nWhat is the measure of angle Y, in degrees?",
    "choices": [
      { "id": "A", "text": "15" },
      { "id": "B", "text": "17" },
      { "id": "C", "text": "19" },
      { "id": "D", "text": "34" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q3",
    "section": "math",
    "stage": 1,
    "text": "How many solutions does the equation 35x − 25 = 5(7x − 5) have?",
    "choices": [
      { "id": "A", "text": "Exactly one" },
      { "id": "B", "text": "Exactly two" },
      { "id": "C", "text": "Infinitely many" },
      { "id": "D", "text": "Zero" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q4",
    "section": "math",
    "stage": 1,
    "text": "The function f is defined by f(x) = (x − 2)(x − 8)(x + 3). In the xy-plane, the graph of y = h(x) is the result of translating the graph of y = f(x) up 6 units. \n\nWhat is the y-coordinate of the y-intercept of the graph of y = h(x)?",
    "choices": [
      { "id": "A", "text": "54" },
      { "id": "B", "text": "48" },
      { "id": "C", "text": "6" },
      { "id": "D", "text": "0" }
    ],
    "correctChoiceId": "A",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q5",
    "section": "math",
    "stage": 1,
    "text": "For the positive quantities m, q, and r, m is 20% of m + q + r, q is 30% of q + r, and the value of r is 1,526. \n\nWhat is the value of m?",
    "choices": [
      { "id": "A", "text": "436" },
      { "id": "B", "text": "545" },
      { "id": "C", "text": "654" },
      { "id": "D", "text": "720" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q6",
    "section": "math",
    "stage": 1,
    "text": "The measure of angle R is 2π/3 radians. The measure of angle T is 23π/18 radians greater than the measure of angle R. \n\nWhat is the measure of angle T, in degrees?",
    "choices": [
      { "id": "A", "text": "120" },
      { "id": "B", "text": "230" },
      { "id": "C", "text": "350" },
      { "id": "D", "text": "700" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q7",
    "section": "math",
    "stage": 1,
    "text": "In the xy-plane, an equation of circle A is (x − 2)² + (y − 7)² = 25. Circle B has the same center as circle A but has a radius that is twice the radius of circle A. \n\nWhich equation represents circle B?",
    "choices": [
      { "id": "A", "text": "(x − 2)² + (y − 7)² = 50" },
      { "id": "B", "text": "(x − 2)² + (y − 7)² = 100" },
      { "id": "C", "text": "(x − 2)² + (y − 7)² = 250" },
      { "id": "D", "text": "(x − 2)² + (y − 7)² = 625" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q8",
    "section": "math",
    "stage": 1,
    "text": "C(t) = 220 · (5/2)^((t-12)/51) + 8\n\nThe function C gives the estimated number of cephalopods, a class of marine animal, in a certain area, where t is the number of months since a study began. \n\nHow many months after the study began was the number of cephalopods in the area estimated to be 228?",
    "choices": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "12" },
      { "id": "C", "text": "51" },
      { "id": "D", "text": "63" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q9",
    "section": "math",
    "stage": 1,
    "text": "The table shows three values of x and their corresponding values of y. There is a linear relationship between x and y. \n\nWhich of the following equations represents this relationship?\n\n(Table data inferred: for x=0, y=8; for x=1, y=9; for x=2, y=10)",
    "choices": [
      { "id": "A", "text": "y = 8x" },
      { "id": "B", "text": "y = 10x + 2" },
      { "id": "C", "text": "y = 10x" },
      { "id": "D", "text": "y = x + 8" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q10",
    "section": "math",
    "stage": 1,
    "text": "A manager is responsible for ordering supplies for a coffee shop. The shop's inventory starts with 6,600 disposable cups, and the manager estimates that 110 of these cups are used each day. \n\nBased on this estimate, in how many days will the inventory of disposable cups reach 1,100?",
    "choices": [
      { "id": "A", "text": "5" },
      { "id": "B", "text": "50" },
      { "id": "C", "text": "55" },
      { "id": "D", "text": "60" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q11",
    "section": "math",
    "stage": 1,
    "text": "The expression 6x^22 / 18x^5 is equivalent to (1/3)x^b, where b is a constant and x > 0. What is the value of b?",
    "choices": [
      { "id": "A", "text": "5/22" },
      { "id": "B", "text": "22/5" },
      { "id": "C", "text": "17" },
      { "id": "D", "text": "27" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q12",
    "section": "math",
    "stage": 1,
    "text": "Which of the following equations has solutions 13 and -24?",
    "choices": [
      { "id": "A", "text": "(x - 24)(x + 13) = 0" },
      { "id": "B", "text": "(x - 13)(x + 24) = 0" },
      { "id": "C", "text": "(x + 13)(x + 24) = 0" },
      { "id": "D", "text": "(x - 24)(x - 13) = 0" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q13",
    "section": "math",
    "stage": 1,
    "text": "y < x; x < 31. For which of the following tables are all the values of x and their corresponding values of y solutions to the given system of inequalities?",
    "choices": [
      { "id": "A", "text": "Table with pairs (28, 27) and (29, 28)" },
      { "id": "B", "text": "Table with pairs (30, 31) and (32, 28)" },
      { "id": "C", "text": "Table with pairs (25, 26) and (27, 28)" },
      { "id": "D", "text": "Table with pairs (31, 30) and (32, 33)" }
    ],
    "correctChoiceId": "A",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q14",
    "section": "math",
    "stage": 1,
    "text": "An entomologist placed an initial population of 20 Tenebrio molitor, a type of beetle, into a habitat and monitored the population over time. When the number of Tenebrio molitor in the habitat reached 180% of the initial population, the entomologist moved 75% of the Tenebrio molitor to a second habitat. \n\nHow many Tenebrio molitor did the entomologist move to the second habitat at this time?",
    "choices": [
      { "id": "A", "text": "9" },
      { "id": "B", "text": "15" },
      { "id": "C", "text": "27" },
      { "id": "D", "text": "36" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q15",
    "section": "math",
    "stage": 1,
    "text": "The graph shows the total amount of rainfall y, in centimeters, from the start of a 10-hour period, where x is the number of hours after the start of the period. \n\nWhat was the average rate of change of the total amount of rainfall over time, in centimeters per hour, from x = 0 to x = 5?",
    "choices": [
      { "id": "A", "text": "0.5" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "2" },
      { "id": "D", "text": "5" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q16",
    "section": "math",
    "stage": 1,
    "text": "A chemist mixed x liters of a 4% saline solution with y liters of a 7% saline solution to produce a 6% saline solution. \n\nWhich equation best represents this situation? (Assume the volumes of the solutions are additive.)",
    "choices": [
      { "id": "A", "text": "0.4x + 0.7y = 0.6(x + y)" },
      { "id": "B", "text": "0.4x + 0.7y = 6(x + y)" },
      { "id": "C", "text": "0.04x + 0.07y = 0.06(x + y)" },
      { "id": "D", "text": "0.04x + 0.07y = 6(x + y)" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q17",
    "section": "math",
    "stage": 1,
    "text": "At the beginning of the year, Imani has $170 in her account. Each month this year, she will deposit between $30 and $60 into the account. \n\nWhich inequality represents all possibilities for the total amount of money x, in dollars, in Imani's account after 10 months of deposits this year?",
    "choices": [
      { "id": "A", "text": "x <= 300" },
      { "id": "B", "text": "x >= 600" },
      { "id": "C", "text": "170 <= x <= 620" },
      { "id": "D", "text": "470 <= x <= 770" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q18",
    "section": "math",
    "stage": 1,
    "text": "The scatterplot shows the relationship between two variables, x and y. A line of best fit is also shown. \n\nWhich of the following equations best represents the line of best fit shown?",
    "choices": [
      { "id": "A", "text": "y = 13.3 + 0.8x" },
      { "id": "B", "text": "y = 13.3 - 0.8x" },
      { "id": "C", "text": "y = -13.3 + 0.8x" },
      { "id": "D", "text": "y = -13.3 - 0.8x" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q19",
    "section": "math",
    "stage": 1,
    "text": "In the xy-plane, line p is parallel to line s. Line s has a slope of 8 and line p passes through the point (0, 7). \n\nWhich equation defines line p?",
    "choices": [
      { "id": "A", "text": "y = 8x - 7" },
      { "id": "B", "text": "y = 8x - (1/7)" },
      { "id": "C", "text": "y = 8x + 7" },
      { "id": "D", "text": "y = 8x + (1/7)" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q20",
    "section": "math",
    "stage": 1,
    "text": "The height of a right circular cylinder is 31 inches, and the circumference of its base is 310 inches. Which expression represents the total surface area, in square inches, of the cylinder?",
    "choices": [
      { "id": "A", "text": "(31)(310)" },
      { "id": "B", "text": "(pi)(155^2 / pi)(31)" },
      { "id": "C", "text": "(31)(310) + (pi)(155^2 / pi)" },
      { "id": "D", "text": "(31)(310) + (2pi)(155 / pi)^2" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q21",
    "section": "math",
    "stage": 1,
    "text": "In each of the following data sets of 5 values, p is a constant. Which of these data sets has the largest standard deviation?",
    "choices": [
      { "id": "A", "text": "p - 4, p, p, p, p + 4" },
      { "id": "B", "text": "p - 1, p - 1, p, p + 1, p + 1" },
      { "id": "C", "text": "p, p, p, p, p" },
      { "id": "D", "text": "p - 5, p - 4, p, p + 4, p + 5" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "m1-q22",
    "section": "math",
    "stage": 1,
    "text": "The ratio x to y is equivalent to the ratio 5 to 6. If x = 7t, what is the value of y in terms of t?",
    "choices": [
      { "id": "A", "text": "(5/42)t" },
      { "id": "B", "text": "(6/35)t" },
      { "id": "C", "text": "(35/6)t" },
      { "id": "D", "text": "(42/5)t" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
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
    "id": "q1",
    "section": "verbal",
    "stage": 2,
    "text": "In the 2010s, the price of vintage Muppets action figures rose dramatically, which had the counterintuitive effect of _______ demand: buyers who hadn't previously wanted to purchase old action figures thronged the market, believing prices would continue to rise and the toys could be resold later at a profit.",
    "choices": [
      { "id": "A", "text": "eliciting" },
      { "id": "B", "text": "satisfying" },
      { "id": "C", "text": "capitalizing" },
      { "id": "D", "text": "exploiting" }
    ],
    "correctChoiceId": "A",
    "domain": "Words in Context"
  },
  {
    "id": "q2",
    "section": "verbal",
    "stage": 2,
    "text": "Hydropower, wind power, and solar power constitute almost 21% of the United States' electricity production. Due to the geographical availability of renewable resources of energy, the United States is in an advantageous position to potentially _______ the proportion of electricity it produces from renewable resources in the future.",
    "choices": [
      { "id": "A", "text": "alleviate" },
      { "id": "B", "text": "induce" },
      { "id": "C", "text": "augment" },
      { "id": "D", "text": "exhaust" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "q3",
    "section": "verbal",
    "stage": 2,
    "text": "Mauricio Drelichman and Hans-Joachim Voth's analysis of the overall debt and revenue of the government of Philip II found an intriguing _______: although the government regularly defaulted on debt, it ran an even larger overall surplus than did the government of eighteenth-century Britain, which historians consider a model of fiscal virtue.",
    "choices": [
      { "id": "A", "text": "harbinger" },
      { "id": "B", "text": "exemplar" },
      { "id": "C", "text": "sanction" },
      { "id": "D", "text": "incongruity" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "q4",
    "section": "verbal",
    "stage": 2,
    "text": "Nancy Bird-Walton, who was an aviation pioneer, undoubtedly accomplished much, but to gain a lasting place in our historical memory, there is little that can _______ being the first to do something. For example, people will always remember that Aloha Wanderwell was the first woman to drive herself around the world.",
    "choices": [
      { "id": "A", "text": "overreach by" },
      { "id": "B", "text": "fluctuate with" },
      { "id": "C", "text": "constrain within" },
      { "id": "D", "text": "prevail over" }
    ],
    "correctChoiceId": "D",
    "domain": "Words in Context"
  },
  {
    "id": "q5",
    "section": "verbal",
    "stage": 2,
    "text": "Spanning the 1920s to the 1980s, Mexican architect Luis Barragán's prolific career evolved through distinct phases. As epitomized by the house in Calle Pedro Loza in Guadalajara, many of Barragán's first projects integrated traditional Mexican building techniques into Mediterranean designs. Extensive travels abroad later sparked an engagement with modernist and functionalist aesthetics—styles whose emphasis on utility and whose repudiation of traditional architecture's more ornamental elements are readily apparent in Barragán's Pizarro Suárez House.",
    "choices": [
      { "id": "A", "text": "It summarizes the career of a particular architect, states how that architect's heritage influenced his career choice, and then emphasizes the impact of that architect's career." },
      { "id": "B", "text": "It names a famous architect, outlines the primary aesthetic model evident in his work, and then offers examples illustrating his commitment to that model." },
      { "id": "C", "text": "It provides famous examples of an architect's projects, describes the original inspiration for those projects, and then suggests that lesser-known projects by that architect arose from other sources of inspiration." },
      { "id": "D", "text": "It presents a general claim about a particular architect's career, describes a design approach that typified the early stages of that career, and then explains a later shift in that career." }
    ],
    "correctChoiceId": "D",
    "domain": "Structure"
  },
  {
    "id": "q6",
    "section": "verbal",
    "stage": 2,
    "text": "Like all species of baleen whales, the humpback whale feeds on tiny creatures known as krill by filtering water through bristlelike keratin structures called baleen plates. In this way, baleen whales can eat up to 30 percent of their total mass per day. And while no one would call the humpback whale small—it can have a mass as high as 30,000 kg—it is one of the smaller baleen whales and is much smaller than the northern right whale, which can weigh a whopping 80,000 kg and consume as much as 24,000 kg of krill per day.",
    "choices": [
      { "id": "A", "text": "It describes a characteristic shared by all baleen whales and then illustrates a difference between the humpback whale and the northern right whale that is relevant to that characteristic." },
      { "id": "B", "text": "It discusses a unique feature of the humpback whale and how the lack of that feature in the northern right whale explains differences in the two species' behavior." },
      { "id": "C", "text": "It draws a distinction between the sizes of the humpback whale and the northern right whale and then presents a feature that they have in common." },
      { "id": "D", "text": "It details a relationship between humpback and northern right whales and krill and then discusses an unexpected consequence of a change in baleen whale populations." }
    ],
    "correctChoiceId": "A",
    "domain": "Structure"
  },
  {
    "id": "q7",
    "section": "verbal",
    "stage": 2,
    "text": "Vertical gene transfer involves the transmission of genetic material from a parent to offspring; horizontal gene transfer, on the other hand, involves the exchange of genetic material between organisms not in a parent-offspring relationship. While horizontal gene transfer is common among prokaryotes—single-celled organisms, such as the bacteria Brevibacillus borstelensis and Lactococcus lactis—it has rarely been observed among eukaryotes (multicellular organisms). However, new studies suggest that horizontal gene transfer is more common in eukaryotes than originally thought.",
    "choices": [
      { "id": "A", "text": "It explains why a common perception of a biological process is flawed." },
      { "id": "B", "text": "It argues that two biological phenomena are more similar than they may initially appear to be." },
      { "id": "C", "text": "It contrasts the frequency with which a biological phenomenon has been detected in two categories of organisms." },
      { "id": "D", "text": "It indicates a distinction between the mechanics of two kinds of biological processes." }
    ],
    "correctChoiceId": "C",
    "domain": "Function"
  },
  {
    "id": "q8",
    "section": "verbal",
    "stage": 2,
    "text": "Optimal foraging theory (OFT) holds that animals' foraging behaviors reflect cost-benefit trade-offs that vary by species and with dynamic ecological circumstances. One such circumstance is lunar intensity, which Nathan Upham and John Hafner found to be negatively associated with foraging by desert kangaroo rats but Ian C. Colquhoun found to be positively associated with foraging by black lemurs. This discrepancy is explicable in terms of OFT: the lemurs' greater reliance on vision means that higher lunar intensity benefits them more than it benefits the kangaroo rats.",
    "choices": [
      { "id": "A", "text": "As lunar intensity increases, black lemurs increase their foraging activity." },
      { "id": "B", "text": "Increased lunar intensity is more beneficial for black lemurs than it is for desert kangaroo rats." },
      { "id": "C", "text": "As lunar intensity increases, desert kangaroo rats reduce their foraging activity." },
      { "id": "D", "text": "During periods of high lunar intensity, black lemurs increase their reliance on vision." }
    ],
    "correctChoiceId": "A",
    "domain": "Detail"
  },
  {
    "id": "q9",
    "section": "verbal",
    "stage": 2,
    "text": "Research by economists Wei Feng and Jinzhe Yan indicates that the degree of linguistic abstraction in negative reviews influences how consumers perceive businesses: reviews with concrete details were more likely to result in stronger attributions of fault to companies than vague reviews were. They also found that varying levels of linguistic abstraction in reviews require different types of responses to mitigate their effects. Conciliatory responses were most effective at mitigating the impact of concrete reviews, whereas more defensive responses were more useful when reviews were relatively abstract.",
    "choices": [
      { "id": "A", "text": "The level of linguistic abstraction in negative reviews is an important consideration when companies devise a response strategy." },
      { "id": "B", "text": "N/A" },
      { "id": "C", "text": "Increasing linguistic abstraction in negative reviews correlates with the degree to which consumers hold companies accountable for negative experiences, but companies can mitigate this effect by responding to such reviews promptly." },
      { "id": "D", "text": "Consumers are more likely to find companies blameworthy for negative consumer experiences if the companies are overly defensive and linguistically abstract in their responses to negative reviews than if their responses are accommodating and linguistically concrete." }
    ],
    "correctChoiceId": "A",
    "domain": "Main Idea"
  },
  {
    "id": "q10",
    "section": "verbal",
    "stage": 2,
    "text": "Some animals evade predation with the help of contrasting markings that signal toxicity. Lisa Taylor and team studied how jumping spiders behave toward termites (their regular prey) to which solid black, solid white, or black-and-white striped (i.e., contrasting) capes were affixed. Each spider was placed in a clear container in the center of a circular dish in which six termites, two with each of the three cape types, could be seen. Noting which termites the spiders first looked at and which termites they ultimately targeted, the researchers concluded that contrasting markings were a deterrent.",
    "choices": [
      { "id": "A", "text": "For each type of cape, a majority of the spiders that first looked at a termite wearing that type of cape attacked a termite wearing that same type of cape." },
      { "id": "B", "text": "Regardless of the type of cape worn by termites the spiders first looked at, the large majority of spider attacks were on termites wearing solid-color capes." },
      { "id": "C", "text": "None of the spiders that first looked at a termite wearing a solid white cape attacked a termite wearing a black-and-white striped cape." },
      { "id": "D", "text": "Half of the spiders that first looked at a termite wearing a black-and-white striped cape attacked a termite wearing a solid white cape, and the other half of those spiders were just as likely to attack a termite wearing a black-and-white striped cape as they were to attack a termite wearing a solid black cape." }
    ],
    "correctChoiceId": "B",
    "domain": "Data Support"
  },
  {
    "id": "q11",
    "section": "verbal",
    "stage": 2,
    "text": "Neurobiologists Laura Cuaya, Raúl Hernández-Perez, and colleagues investigated the language detection abilities of eighteen dogs raised in similar settings. The researchers monitored the brain activity of Pán (an Australian shepherd), Alma (a mixed breed), and other dogs while the animals listened to three recordings: one of The Little Prince being read in Spanish, the second in Hungarian, and a third made up of short, randomly selected fragments of the first two, scrambled so that they didn't resemble human speech. Each dog was familiar with either Spanish or Hungarian, but not both. The team concluded that the amount of previous language exposure a dog has received may influence its ability to distinguish familiar languages from unfamiliar ones.",
    "choices": [
      { "id": "A", "text": "The similarity between the pattern of brain activity a dog showed in response to hearing the scrambled recording and the pattern of brain activity it showed in response to hearing the language it was not accustomed to was greatest among older dogs." },
      { "id": "B", "text": "Although the dogs' general hearing sensitivity declined with age, dogs of all ages showed more brain activity in response to hearing the language they were accustomed to than in response to hearing the other language." },
      { "id": "C", "text": "The difference between the pattern of brain activity a dog showed when hearing the language it was accustomed to and the pattern of brain activity it showed when hearing the language it was not accustomed to was greatest among older dogs." },
      { "id": "D", "text": "Dogs showed a different pattern of brain activity when hearing the language they were accustomed to than when hearing the scrambled recording, and the difference in brain activity increased with the age of the dog scanned." }
    ],
    "correctChoiceId": "C",
    "domain": "Strengthen"
  },
  {
    "id": "q12",
    "section": "verbal",
    "stage": 2,
    "text": "Rafael Núñez and colleagues studied how members of the Yupno, an Indigenous group in Papua New Guinea, conceptualize time. The researchers recorded Yupno speakers explaining certain temporal words and phrases, such as abjuk, a present-oriented expression that translates to 'now,' and coded each speaker's manual gestures. Previous research has found a tendency in many cultures to make temporal distinctions using spatial concepts and gestures, particularly along egocentric axes (i.e., relative to the orientation of the speaker): for instance, English speakers often refer to the front/back axis to describe events in time. In an anthropology paper, a student claims that the tendency toward ego-based conceptualizations of time is universal.",
    "choices": [
      { "id": "A", "text": "Some Yupno grammatical structures used when talking about time are also used in English." },
      { "id": "B", "text": "When Yupno speakers who are outdoors use gestures to refer to the past, they point downhill from their current location regardless of which way they are facing." },
      { "id": "C", "text": "A Yupno speaker points in opposite directions when indicating a past event versus a future event." },
      { "id": "D", "text": "Although Yupno speakers and English speakers both use gestures to indicate orientation in time, Yupno speakers tend to use fewer gestures overall when speaking than English speakers do." }
    ],
    "correctChoiceId": "B",
    "domain": "Weaken"
  },
  {
    "id": "q13",
    "section": "verbal",
    "stage": 2,
    "text": "Researchers have identified over eighty gestures made by nonhuman great apes, such as clapping and bowing, that appear to convey information and that seem to be biologically inherited. Kirsty E. Graham and Catherine Hobaiser hypothesized that humans may be able to interpret great ape gestures, either through an evolutionary inheritance or as part of more general human cognitive abilities. The researchers tested this hypothesis by enlisting participants in an online game in which they had to correctly identify the meanings of ape gestures seen in videos. Though participants achieved some success, it is unclear whether they sometimes did so by making use of additional context provided by the images or sounds in the video recordings.",
    "choices": [
      { "id": "A", "text": "Participants were more readily able to identify an ape gesture when it meant 'give me that food' than when it meant 'let's be friendly.'" },
      { "id": "B", "text": "Participants correctly identified gestures at the same rate for videos in which the apes made sounds in addition to gestures and videos in which the apes were silent." },
      { "id": "C", "text": "Participants correctly interpreted ape gestures more than 50 percent of the time, whereas they would have only identified gestures correctly 25 percent of the time if they had been guessing." },
      { "id": "D", "text": "When apes made mouth-touching gestures, which participants tended to correctly interpret as requests for food, the food was visible in the videos." }
    ],
    "correctChoiceId": "D",
    "domain": "Weaken"
  },
  {
    "id": "q14",
    "section": "verbal",
    "stage": 2,
    "text": "Given the immense scope of space, the search for extraterrestrial life is almost necessarily concentrated on the exoplanets deemed to have the most plausible chance of success—typically, atmosphere-bearing terrestrial planets orbiting within a certain range of their stars (termed the habitable zone). Claiming that Earth experienced a long transition from single-lid to plate tectonics that accelerated the emergence and evolution of complex organisms, researchers Robert J. Stern and Taras V. Gerya hold that consideration of tectonics, an often overlooked factor, could help further narrow the search for advanced extraterrestrial species.",
    "choices": [
      { "id": "A", "text": "It is probably more dependent on the presence of plate tectonics than on orbital distance from a host star or the presence of an atmosphere." },
      { "id": "B", "text": "It is unlikely unless the transition from single-lid to plate tectonics occurs before the acquisition of a lasting atmosphere." },
      { "id": "C", "text": "It is more likely to occur on habitable zone planets with atmospheres and plate tectonics than on otherwise similar planets that lack plate tectonics." },
      { "id": "D", "text": "It is more likely to occur if habitable zone planets with atmospheres transition from single-lid to plate tectonics late in their history than if they transition early in their history." }
    ],
    "correctChoiceId": "C",
    "domain": "Inference"
  },
  {
    "id": "q15",
    "section": "verbal",
    "stage": 2,
    "text": "Among social animals that care for their young, such as chickens, macaque monkeys, and humans, newborns appear to show an innate attraction to faces and face-like stimuli. Elisabetta Versace and her colleagues used an image of three black dots arranged in the shape of eyes and a nose or mouth to test whether this trait also occurs in Testudo tortoises, which live alone and do not engage in parental care. They found that tortoise hatchlings showed a significant preference for the image, suggesting that ______.",
    "choices": [
      { "id": "A", "text": "face-like stimuli are likely perceived as harmless by newborns of social species that practice parental care but as threatening by newborns of solitary species without parental care." },
      { "id": "B", "text": "researchers should not assume that an innate attraction to face-like stimuli is necessarily an adaptation related to social interaction or parental care." },
      { "id": "C", "text": "researchers can assume that the attraction to face-like stimuli that is seen in social species that practice parental care is learned rather than innate." },
      { "id": "D", "text": "newly hatched Testudo tortoises show a stronger preference for face-like stimuli than adult Testudo tortoises do." }
    ],
    "correctChoiceId": "B",
    "domain": "Logical Completion"
  },
  {
    "id": "q16",
    "section": "verbal",
    "stage": 2,
    "text": "Dating to around 1500, the Unicorn Tapestries are seven large tapestries depicting a unicorn hunt that hang in The Cloisters, a museum of medieval art in New York City. Attempting to explain the tapestries' symbolism, art historian and former Cloisters head curator Margaret B. _____ that while some have interpreted the tapestries as a Christian allegory, unicorns in that era were typically featured in secular rather than religious contexts.",
    "choices": [
      { "id": "A", "text": "Freeman, who noted" },
      { "id": "B", "text": "Freeman, noting" },
      { "id": "C", "text": "Freeman noted" },
      { "id": "D", "text": "Freeman, noted" }
    ],
    "correctChoiceId": "C",
    "domain": "Grammar/Syntax"
  },
  {
    "id": "q17",
    "section": "verbal",
    "stage": 2,
    "text": "Taking a structuralist approach to analyzing Willa Cather's novel My Antonia, would lead a critic to focus on the linguistic conventions inherent in the novel. On the other hand, a postcolonial analysis ______ on narrative perspective and the representation of marginalized groups might yield a radically different interpretation of Cather's novel.",
    "choices": [
      { "id": "A", "text": "would focus" },
      { "id": "B", "text": "focuses" },
      { "id": "C", "text": "focusing" },
      { "id": "D", "text": "would be focusing" }
    ],
    "correctChoiceId": "C",
    "domain": "Grammar/Syntax"
  },
  {
    "id": "q18",
    "section": "verbal",
    "stage": 2,
    "text": "All member nations of the North Atlantic Treaty Organization, or NATO — including Iceland, which joined in 1949; Hungary, which joined in 1999; and Bulgaria, which joined in _____ are committed to NATO's principle of collective defense, each member pledging to defend all others.",
    "choices": [
      { "id": "A", "text": "2004;" },
      { "id": "B", "text": "2004," },
      { "id": "C", "text": "2004" },
      { "id": "D", "text": "2004 —" }
    ],
    "correctChoiceId": "C",
    "domain": "Grammar/Syntax"
  },
  {
    "id": "q19",
    "section": "verbal",
    "stage": 2,
    "text": "The Proto-Uralic language, common ancestor of thirty-seven Eurasian languages with similar linguistic properties, ____ like all protolanguages, hypothetical: there's no direct evidence these ancestral languages actually existed.",
    "choices": [
      { "id": "A", "text": "are," },
      { "id": "B", "text": "were," },
      { "id": "C", "text": "have been," },
      { "id": "D", "text": "is," }
    ],
    "correctChoiceId": "D",
    "domain": "Grammar/Syntax"
  },
  {
    "id": "q20",
    "section": "verbal",
    "stage": 2,
    "text": "In his work, acclaimed Cahuilla _____ Gerald Clarke uses basketry, acrylic paintings, and other mediums to explore Native perspectives on truth and beauty.",
    "choices": [
      { "id": "A", "text": "artist, and 2007 Eiteljov Fellowship recipient" },
      { "id": "B", "text": "artist and 2007 Eiteljov Fellowship recipient" },
      { "id": "C", "text": "artist and 2007 Eiteljov Fellowship recipient—" },
      { "id": "D", "text": "artist and 2007 Eiteljov Fellowship recipient" }
    ],
    "correctChoiceId": "B",
    "domain": "Grammar/Syntax"
  },
  {
    "id": "q21",
    "section": "verbal",
    "stage": 2,
    "text": "Before the first railroads were built in Australia, engineers warned against using multiple track widths across the continent. ______ regional officials couldn't agree on a single-width system. Thus, railways in Queensland, like the Durundur Railway, were made using narrow tracks, while those in Victoria were built with wide tracks.",
    "choices": [
      { "id": "A", "text": "For this reason," },
      { "id": "B", "text": "In other words," },
      { "id": "C", "text": "Similarly," },
      { "id": "D", "text": "Nevertheless," }
    ],
    "correctChoiceId": "D",
    "domain": "Transitions"
  },
  {
    "id": "q22",
    "section": "verbal",
    "stage": 2,
    "text": "In a 1984 study by Warren et al., the researchers determined the ratio of three different plant subtypes within the diet of sheep: graminoids, forbs, and browse. ______ the researchers determined the relative quantities of the plants the animal consumed.",
    "choices": [
      { "id": "A", "text": "Next," },
      { "id": "B", "text": "That is," },
      { "id": "C", "text": "In addition," },
      { "id": "D", "text": "By contrast," }
    ],
    "correctChoiceId": "B",
    "domain": "Transitions"
  },
  {
    "id": "q23",
    "section": "verbal",
    "stage": 2,
    "text": "In 2015, geologist Peter Rogerson calculated that the geographic center of Kansas was a point 2.1 miles southeast of the municipality of Bushtown Bend. Rogerson's calculation was more accurate than the one from 1920 by the US Geological Survey. ______ this earlier calculation was made using far more rudimentary equipment—only cardboard and string.",
    "choices": [
      { "id": "A", "text": "Ultimately," },
      { "id": "B", "text": "Of course," },
      { "id": "C", "text": "Likewise," },
      { "id": "D", "text": "To that end," }
    ],
    "correctChoiceId": "B",
    "domain": "Transitions"
  },
  {
    "id": "q24",
    "section": "verbal",
    "stage": 2,
    "text": "The Madison is a type of line dance that involves neat rows of dancers performing a repeated sequence of steps in unison. ______ many other dances are also defined by order, repetition, and synchronicity, but the Madison is distinguished by its extreme uniformity; when an auditorium full of dancers performs the Madison, one almost gets the impression of a military march.",
    "choices": [
      { "id": "A", "text": "Of course," },
      { "id": "B", "text": "Specifically," },
      { "id": "C", "text": "Moreover," },
      { "id": "D", "text": "However," }
    ],
    "correctChoiceId": "A",
    "domain": "Transitions"
  },
  {
    "id": "q25",
    "section": "verbal",
    "stage": 2,
    "text": "While researching a topic, a student has taken the following notes:\n- A copyright prevents a book's contents from being reproduced (published) without permission from the copyright holder.\n- When a book's copyright expires, the book enters the public domain and can be legally reproduced by anyone.\n- The Prophet is a collection of prose poems by Kahlil Gibran.\n- It entered the public domain in 2019.\n- Barren Ground is a novel by Ellen Glasgow.\n- It entered the public domain in 2021.\n\nThe student wants to emphasize a similarity between The Prophet and Barren Ground. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      { "id": "A", "text": "The Prophet, a collection of prose poems by Kahlil Gibran, and Barren Ground, a novel by Ellen Glasgow, recently entered the public domain." },
      { "id": "B", "text": "The Prophet is a collection of prose poems, whereas Barren Ground is a novel." },
      { "id": "C", "text": "The Prophet, a collection of prose poems by Kahlil Gibran, entered the public domain in 2019, unlike Ellen Glasgow's novel Barren Ground, which would do so later." },
      { "id": "D", "text": "The year was 2021, and the copyright to Ellen Glasgow's Barren Ground had finally expired." }
    ],
    "correctChoiceId": "A",
    "domain": "Synthesis"
  },
  {
    "id": "q26",
    "section": "verbal",
    "stage": 2,
    "text": "While researching a topic, a student has taken the following notes:\n- The Highpointers Club is a hiking club.\n- One of the main goals among club members is to reach the highest points in all fifty US states.\n- Those who achieve this are called 50 Completers.\n- In Suk Han became a 50 Completer on November 15, 2013.\n- The highest point in Michigan is Mount Arvon, at 1,979 ft.\n- The highest point in New Mexico is Wheeler Peak, at 13,167 ft.\n\nWhich choice most effectively uses information from the given sentences to explain the 50 Completers hiking challenge to a new audience?",
    "choices": [
      { "id": "A", "text": "Hikers aiming to count themselves among the 50 Completers must reach not only Michigan's Mount Arvon but also the even higher peak of Wheeler Peak in New Mexico." },
      { "id": "B", "text": "Not until after you have reached the highest points in all fifty US states—including Mount Arvon in Michigan and Wheeler Peak in New Mexico—can you include yourself among the 50 Completers of the Highpointers Club." },
      { "id": "C", "text": "If you are looking for a new hiking challenge, consider joining the Highpointers Club, as did In Suk Han, a hiker who successfully reached the highest point in every US state." },
      { "id": "D", "text": "On November 15, 2013, In Suk Han finally completed the feat of reaching the highest point in all fifty US states, including Mount Arvon in Michigan and Wheeler Peak in New Mexico." }
    ],
    "correctChoiceId": "B",
    "domain": "Synthesis"
  },
  {
    "id": "q27",
    "section": "verbal",
    "stage": 2,
    "text": "While researching a topic, a student has taken the following notes:\n- 1926: The US Congress gave the US Commerce Department authority to regulate safety standards in the fledgling commercial airline industry.\n- 1938: Congress transferred this authority to a new independent government agency called the Civil Aeronautics Authority (CAA).\n- 1958: Congress transferred authority from the CAA to the newly established Federal Aviation Administration (FAA).\n- The FAA's first administrator, Elwood R. Quesada, updated safety standards and technologies for the era of commercial jets.\n- The FAA remains the regulatory authority for airline safety.\n\nWhich choice most effectively uses information from the notes to accurately summarize the regulatory authority over US airline safety?",
    "choices": [
      { "id": "A", "text": "The authority to regulate US airline safety transferred from the US Commerce Department to the CAA in 1938, then from the CAA to the FAA in 1958." },
      { "id": "B", "text": "The CAA had the authority to regulate safety for US airlines from 1938 until 1958, at which point authority was transferred to the US Commerce Department by Elwood R. Quesada." },
      { "id": "C", "text": "The FAA, CAA, and the US Commerce Department all had the authority to regulate US airline safety, but they possessed this authority at different times." },
      { "id": "D", "text": "The FAA has regulated airline safety since it was established by the US Congress in 1958." }
    ],
    "correctChoiceId": "A",
    "domain": "Synthesis"
  }
],
  // --- MATH MODULE 1 ---
  math_mod2_easy: [
  {
    "id": "m2m1-q1",
    "section": "math",
    "stage": 2,
    "text": "In triangle RST, the length of RS is 21, and the length of ST is 9. Triangle RST is dilated by a scale factor of 1/3 to obtain triangle R'S'T'. What is the length of S'T'?",
    "choices": [
      { "id": "A", "text": "3" },
      { "id": "B", "text": "7" },
      { "id": "C", "text": "27" },
      { "id": "D", "text": "63" }
    ],
    "correctChoiceId": "A",
    "domain": "Geometry and Trigonometry"
  },
  {
    "id": "m2m1-q2",
    "section": "math",
    "stage": 2,
    "text": "The price of an item increased by p% from 90 to 93. What is the value of p?",
    "choices": [
      { "id": "A", "text": "2.33" },
      { "id": "B", "text": "3.33" },
      { "id": "C", "text": "4.33" },
      { "id": "D", "text": "5.33" }
    ],
    "correctChoiceId": "B",
    "domain": "Problem Solving and Data Analysis"
  },
  {
    "id": "m2m1-q3",
    "section": "math",
    "stage": 2,
    "text": "The shaded region shown represents the solutions to which inequality?",
    "choices": [
      { "id": "A", "text": "y < 1/3x + 2" },
      { "id": "B", "text": "y < x + 2" },
      { "id": "C", "text": "y > 1/3x + 2" },
      { "id": "D", "text": "y > x + 2" }
    ],
    "correctChoiceId": "D",
    "domain": "Heart of Algebra"
  },
  {
    "id": "m2m1-q4",
    "section": "math",
    "stage": 2,
    "text": "Which expression is equivalent to 4x^3 + 20x^2?",
    "choices": [
      { "id": "A", "text": "x^2 + 20x" },
      { "id": "B", "text": "4x^2(x + 5)" },
      { "id": "C", "text": "4x^2(x + 16)" },
      { "id": "D", "text": "x^3 + 20x" }
    ],
    "correctChoiceId": "B",
    "domain": "Passport to Advanced Math"
  },
  {
    "id": "m2m1-q5",
    "section": "math",
    "stage": 2,
    "text": "3x^2 - 13x + 19 = 0. How many distinct real solutions does the given equation have?",
    "choices": [
      { "id": "A", "text": "Zero" },
      { "id": "B", "text": "Exactly one" },
      { "id": "C", "text": "Exactly two" },
      { "id": "D", "text": "Infinitely many" }
    ],
    "correctChoiceId": "A",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q6",
    "section": "math",
    "stage": 2,
    "text": "A rectangle has a length of 100 centimeters and a width of 400 centimeters. What is the area, in square centimeters, of the rectangle?",
    "choices": [
      { "id": "A", "text": "100" },
      { "id": "B", "text": "500" },
      { "id": "C", "text": "40,000" },
      { "id": "D", "text": "40,400" }
    ],
    "correctChoiceId": "C",
    "domain": "Geometry and Trigonometry"
  },
  {
    "id": "m2m1-q7",
    "section": "math",
    "stage": 2,
    "text": "The table summarizes the distribution of average pitching speed, in miles per hour mph, for a sample of 24 pitchers in a youth softball league. According to the table, how many pitchers in the sample have an average pitching speed of at least 30 mph but less than 35 mph?",
    "choices": [
      { "id": "A", "text": "12" },
      { "id": "B", "text": "7" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "1" }
    ],
    "correctChoiceId": "A",
    "domain": "Problem Solving and Data Analysis"
  },
  {
    "id": "m2m1-q8",
    "section": "math",
    "stage": 2,
    "text": "A manager is responsible for ordering supplies for a coffee shop. The shop's inventory starts with 8,900 disposable cups, and the manager estimates that 120 of these cups are used each day. Based on this estimate, in how many days will the inventory of disposable cups reach 1,700?",
    "choices": [
      { "id": "A", "text": "50" },
      { "id": "B", "text": "60" },
      { "id": "C", "text": "70" },
      { "id": "D", "text": "80" }
    ],
    "correctChoiceId": "B",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q9",
    "section": "math",
    "stage": 2,
    "text": "A line in the xy-plane passes through the points (9, 1), (0, 8), and (c, 0). What is the value of c?",
    "choices": [
      { "id": "A", "text": "63/7" },
      { "id": "B", "text": "72/7" },
      { "id": "C", "text": "81/7" },
      { "id": "D", "text": "90/7" }
    ],
    "correctChoiceId": "B",
    "domain": "Geometry and Trigonometry"
  },
  {
    "id": "m2m1-q10",
    "section": "math",
    "stage": 2,
    "text": "y = 10x + 48. One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?",
    "choices": [
      { "id": "A", "text": "y - 10x = -48" },
      { "id": "B", "text": "y - 10x = 48" },
      { "id": "C", "text": "y - 12x = 24" },
      { "id": "D", "text": "y - 12x = 0" }
    ],
    "correctChoiceId": "B",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q11",
    "section": "math",
    "stage": 2,
    "text": "The graph of a system of a linear equation and a quadratic equation is shown. What is the solution (x, y) to this system?",
    "choices": [
      { "id": "A", "text": "(6, 7)" },
      { "id": "B", "text": "(7, 6)" },
      { "id": "C", "text": "(-6, 7)" },
      { "id": "D", "text": "(6, -7)" }
    ],
    "correctChoiceId": "A",
    "domain": "Advanced Math"
  },
  {
    "id": "m2m1-q12",
    "section": "math",
    "stage": 2,
    "text": "The function f is defined by the equation f(x) = 320x. What is the value of f(10)?",
    "choices": [
      { "id": "A", "text": "320" },
      { "id": "B", "text": "1,600" },
      { "id": "C", "text": "3,200" },
      { "id": "D", "text": "6,400" }
    ],
    "correctChoiceId": "C",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q13",
    "section": "math",
    "stage": 2,
    "text": "During an experiment, a particle's speed was 41 feet per second. What is this speed in feet per minute?",
    "choices": [
      { "id": "A", "text": "71" },
      { "id": "B", "text": "101" },
      { "id": "C", "text": "1,230" },
      { "id": "D", "text": "2,460" }
    ],
    "correctChoiceId": "D",
    "domain": "Problem-Solving and Data Analysis"
  },
  {
    "id": "m2m1-q14",
    "section": "math",
    "stage": 2,
    "text": "The number b is 15 more than half of the number a. Which equation represents the relationship between a and b?",
    "choices": [
      { "id": "A", "text": "b = 30a" },
      { "id": "B", "text": "b = 15a + 2" },
      { "id": "C", "text": "b = a/15 + 2" },
      { "id": "D", "text": "b = a/2 + 15" }
    ],
    "correctChoiceId": "D",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q15",
    "section": "math",
    "stage": 2,
    "text": "The scatterplot shows the temperature, in degrees Fahrenheit °F, and the elevation, in feet, measured at 6 locations on a mountain. A line of best fit is also shown. At an elevation of 4,000 feet, what is the temperature, in °F, predicted by the line of best fit?",
    "choices": [
      { "id": "A", "text": "54" },
      { "id": "B", "text": "30" },
      { "id": "C", "text": "15" },
      { "id": "D", "text": "0" }
    ],
    "correctChoiceId": "B",
    "domain": "Problem Solving and Data Analysis"
  },
  {
    "id": "m2m1-q16",
    "section": "math",
    "stage": 2,
    "text": "An inspector checked a sample of 330 scales selected at random from a population of 8,000 scales to estimate what percentage of the 8,000 scales were inaccurate. From this sample, the inspector estimated that 7% of the 8,000 scales were inaccurate, with an associated margin of error of 2.8%. Which of the following is the most appropriate conclusion?",
    "choices": [
      { "id": "A", "text": "It is plausible that between 336 and 784 of the scales in the population are inaccurate." },
      { "id": "B", "text": "It is plausible that fewer than 336 of the scales in the population are inaccurate." },
      { "id": "C", "text": "Exactly 560 of the scales in the population are inaccurate." },
      { "id": "D", "text": "It is plausible that more than 784 of the scales in the population are inaccurate." }
    ],
    "correctChoiceId": "A",
    "domain": "Problem Solving and Data Analysis"
  },
  {
    "id": "m2m1-q17",
    "section": "math",
    "stage": 2,
    "text": "The function f is defined by f(x) = x^2 + 79. What is the value of f(x) when x = 10?",
    "choices": [
      { "id": "A", "text": "-179" },
      { "id": "B", "text": "-21" },
      { "id": "C", "text": "21" },
      { "id": "D", "text": "179" }
    ],
    "correctChoiceId": "D",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q18",
    "section": "math",
    "stage": 2,
    "text": "y = 5x^2 - 40x + 35. The given equation represents a parabola in the xy-plane. Which of the following equations that represent the same parabola displays the x-intercepts as constants or coefficients?",
    "choices": [
      { "id": "A", "text": "y = 5x^2 - 8x + 35" },
      { "id": "B", "text": "y = 5x(x - 8) + 35" },
      { "id": "C", "text": "y = 5(x - 4)^2 - 45" },
      { "id": "D", "text": "y = 5(x - 1)(x - 7)" }
    ],
    "correctChoiceId": "D",
    "domain": "Advanced Math"
  },
  {
    "id": "m2m1-q19",
    "section": "math",
    "stage": 2,
    "text": "A rectangle has a length of 10 centimeters and a width of 6,000 centimeters. What is the area, in square centimeters, of the rectangle?",
    "choices": [
      { "id": "A", "text": "10" },
      { "id": "B", "text": "6,010" },
      { "id": "C", "text": "60,000" },
      { "id": "D", "text": "66,000" }
    ],
    "correctChoiceId": "C",
    "domain": "Geometry and Trigonometry"
  },
  {
    "id": "m2m1-q20",
    "section": "math",
    "stage": 2,
    "text": "There are 450 objects in a box. Of these objects, 8% are spheres. How many spheres are in the box?",
    "choices": [
      { "id": "A", "text": "8" },
      { "id": "B", "text": "36" },
      { "id": "C", "text": "180" },
      { "id": "D", "text": "442" }
    ],
    "correctChoiceId": "B",
    "domain": "Problem-Solving and Data Analysis"
  },
  {
    "id": "m2m1-q21",
    "section": "math",
    "stage": 2,
    "text": "q(x) = 28(2^x). Which table gives three values of x and their corresponding values of q(x) for function q?",
    "choices": [
      { "id": "A", "text": "Table with values (-1, 14), (0, 28), (1, 56)" },
      { "id": "B", "text": "Table with values (-1, 14), (0, 28), (1, 28)" },
      { "id": "C", "text": "Table with values (-1, 28), (0, 56), (1, 112)" },
      { "id": "D", "text": "Table with values (-1, 7), (0, 14), (1, 28)" }
    ],
    "correctChoiceId": "A",
    "domain": "Algebra"
  },
  {
    "id": "m2m1-q22",
    "section": "math",
    "stage": 2,
    "text": "A bag contains only yellow marbles and red marbles. The probability of selecting a yellow marble from the bag at random is 8/17. What is the probability of selecting a red marble from the bag at random?",
    "choices": [
      { "id": "A", "text": "1/17" },
      { "id": "B", "text": "8/17" },
      { "id": "C", "text": "9/17" },
      { "id": "D", "text": "17/9" }
    ],
    "correctChoiceId": "C",
    "domain": "Problem-Solving and Data Analysis"
  }
],
  // --- EASY MODULE 2 ---
  verbal_mod2_easy: [
  {
    "id": "v2e-q1",
    "section": "verbal",
    "stage": 2,
    "text": "The Appalachian Trail is a hiking path in the eastern United States. Much of the 2,000 mile trail passes through wilderness areas. In order to protect those areas, the United States Congress passed the National Trails System Act in 1968, ensuring that the trail would not be sold or commercially developed.",
    "choices": [
      { "id": "A", "text": "borrow" },
      { "id": "B", "text": "postpone" },
      { "id": "C", "text": "protect" },
      { "id": "D", "text": "decorate" }
    ],
    "correctChoiceId": "C",
    "domain": "Words in Context"
  },
  {
    "id": "v2e-q2",
    "section": "verbal",
    "stage": 2,
    "text": "“Which container design best protects an egg from breaking when dropped?” One way to answer questions like this is to use the scientific method. This approach helps us learn about topics like egg container design. First, we make a prediction. Then we collect and analyze data. Eventually, we can draw a conclusion based on the data we have gathered.",
    "choices": [
      { "id": "A", "text": "fight" },
      { "id": "B", "text": "learn" },
      { "id": "C", "text": "forget" },
      { "id": "D", "text": "laugh" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "v2e-q3",
    "section": "verbal",
    "stage": 2,
    "text": "Osage Nation citizen Randy Tinker-Smith produced and directed the ballet Wahzhazhe, which vividly chronicles Osage history and culture. Telling Osage stories through ballet is a suitable choice because two of the foremost ballet dancers of the twentieth century were Osage: sisters Maria and Marjorie Tallchief.",
    "choices": [
      { "id": "A", "text": "a suitable" },
      { "id": "B", "text": "a determined" },
      { "id": "C", "text": "an arbitrary" },
      { "id": "D", "text": "an unpredictable" }
    ],
    "correctChoiceId": "A",
    "domain": "Words in Context"
  },
  {
    "id": "v2e-q4",
    "section": "verbal",
    "stage": 2,
    "text": "The sloping tile roofs and picturesque façade of Mission Santa Inés in Solvang, California, are enduring symbols of the Spanish contribution to Californian architecture. Elements of this style have been reproduced throughout the state—the design of the Los Angeles Herald-Examiner Building in Los Angeles, for example, is considered to imitate the style of the Spanish missions.",
    "choices": [
      { "id": "A", "text": "reject" },
      { "id": "B", "text": "imitate" },
      { "id": "C", "text": "neglect" },
      { "id": "D", "text": "renovate" }
    ],
    "correctChoiceId": "B",
    "domain": "Words in Context"
  },
  {
    "id": "v2e-q5",
    "section": "verbal",
    "stage": 2,
    "text": "Saturn is the first planet in our solar system to be discovered to have more than 100 moons orbiting it. A team of astronomers using the Canada-France-Hawaii Telescope (CFHT) in Hawaii detected 62 undiscovered moons that were previously too small or too dim to see. Saturn now outranks Jupiter as the planet in our solar system with the most observed moons. Which choice best states the main purpose of the text?",
    "choices": [
      { "id": "A", "text": "To explain how the CFHT works" },
      { "id": "B", "text": "To note a new finding about the number of Saturn’s moons" },
      { "id": "C", "text": "To discuss the history of Hawaii" },
      { "id": "D", "text": "To describe the atmospheric conditions of Jupiter" }
    ],
    "correctChoiceId": "B",
    "domain": "Central Ideas and Details"
  },
  {
    "id": "v2e-q6",
    "section": "verbal",
    "stage": 2,
    "text": "The following text is from Jerome K. Jerome's 1889 novel Three Men in a Boat. The narrator and two friends are taking a boat down the River Thames. In a boat, I have always noticed that it is the fixed idea of each member of the crew that he is doing everything. Harris's notion was, that it was he alone who had been working, and that both George and I had been imposing upon him. George, on the other hand, ridiculed the idea of Harris's having done anything more than eat and sleep, and had a cast-iron opinion that it was he—George himself—who had done all the labour worth speaking of. Which choice best describes the main purpose of the text?",
    "choices": [
      { "id": "A", "text": "To address a particular situation that the narrator finds unexpected" },
      { "id": "B", "text": "To convey the narrator's confidence that he understands the role expected of him in a group" },
      { "id": "C", "text": "To present the narrator's generalization along with supporting examples from a specific situation" },
      { "id": "D", "text": "To examine how the narrator and his friends each contributed to navigating a challenge" }
    ],
    "correctChoiceId": "C",
    "domain": "Craft and Structure"
  },
  {
    "id": "v2e-q7",
    "section": "verbal",
    "stage": 2,
    "text": "Ordinary soap bubbles usually exist for a minute or less before popping due to either a rupture forced by gravity-induced drainage or the evaporation of the liquid from which the bubble is composed. But physicist Aymeric Roux and colleagues discovered ways to mitigate these factors, resulting in bubbles that can last for a year or more. For example, glycerol tends to adhere to water molecules, so a bubble with a shell that contains both water and glycerol is able to draw additional water molecules from the surrounding air and thereby compensate for evaporation. Which choice best states the purpose of the underlined portion in the text as a whole?",
    "choices": [
      { "id": "A", "text": "It describes the effects of a process devised by researchers that increases the longevity of an object discussed in the text." },
      { "id": "B", "text": "It details the circumstances that prompted the research discussed in the text." },
      { "id": "C", "text": "It presents a reason why the phenomenon discussed in the text that the researchers wanted to avoid will inevitably occur." },
      { "id": "D", "text": "It mentions a method discussed in the text that researchers intend to test in future experiments." }
    ],
    "correctChoiceId": "A",
    "domain": "Craft and Structure"
  },
  {
    "id": "v2e-q8",
    "section": "verbal",
    "stage": 2,
    "text": "Microplastics are pieces of plastic that are smaller than a grain of rice. These small plastics can be found in large quantities in ocean waters. Ecologist Jessica Reichert and her team are studying the role reef-building corals have in capturing microplastics from ocean waters. Through research, her team has found that these corals may be storing up to 20 million kilograms of microplastics each year in their skeletons and tissues. Which choice best states the main idea of the text?",
    "choices": [
      { "id": "A", "text": "Ecologists are interested in learning more about how certain corals build large reefs." },
      { "id": "B", "text": "Questions remain around the impact certain corals have on ocean ecosystems." },
      { "id": "C", "text": "Microplastics are small pieces of plastic that can be found in ocean waters." },
      { "id": "D", "text": "Ecologists predict that corals store large amounts of microplastics from ocean waters." }
    ],
    "correctChoiceId": "D",
    "domain": "Information and Ideas"
  },
  {
    "id": "v2e-q9",
    "section": "verbal",
    "stage": 2,
    "text": "[Table missing in text format] In 2021, a report on hydroelectric power plants was published. Of the plants in the table, the plant with the lowest average power generated per year in 2019 was located in the state of ______. Which choice most effectively uses data from the table to complete the assertion?",
    "choices": [
      { "id": "A", "text": "Wyoming." },
      { "id": "B", "text": "South Carolina." },
      { "id": "C", "text": "North Carolina." },
      { "id": "D", "text": "Illinois." }
    ],
    "correctChoiceId": "D",
    "domain": "Information and Ideas"
  },
  {
    "id": "v2e-q10",
    "section": "verbal",
    "stage": 2,
    "text": "The Reckoning and Resilience (2022) exhibition at Duke University's Nasher Museum of Art was the first to focus entirely on North Carolina artists since the exhibition Across County Lines four years earlier. The curators of the 2022 exhibition included painters like Beverly McIver, photographers like Kennedi Carter, and printmakers like Ayla Gizlice. But whereas the work by Carter would have fit the theme for Across County Lines, works by McIver and Gizlice would not. Which finding about the Across County Lines exhibition, if true, would most directly support the underlined claim?",
    "choices": [
      { "id": "A", "text": "It consisted entirely of works by photographers." },
      { "id": "B", "text": "It consisted mostly of works by printmakers." },
      { "id": "C", "text": "It was curated specifically to emphasize works that are not owned by the Nasher Museum." },
      { "id": "D", "text": "It included a greater number of artists than Reckoning and Resilience." }
    ],
    "correctChoiceId": "A",
    "domain": "Information and Ideas"
  },
  {
    "id": "v2e-q11",
    "section": "verbal",
    "stage": 2,
    "text": "Peter Pan is a 1911 novel by J.M. Barrie. In the fantasy novel, Peter is a young boy who can fly. He brings Wendy, John, and Michael to Neverland, the mythical island where he lives. The narrator suggests that activity on the island stops when Peter is away and starts again when he is about to return. Which quotation from Peter Pan best supports the claim?",
    "choices": [
      { "id": "A", "text": "\"[Peter] had hoped to fly, keeping not far from the ground.\"" },
      { "id": "B", "text": "\"Wendy and John and Michael stood on tip-toe in the air to get their first sight of the island.\"" },
      { "id": "C", "text": "\"Feeling that Peter was on his way back, the Neverland had again woke into life.\"" },
      { "id": "D", "text": "\"The rock was very small now.\"" }
    ],
    "correctChoiceId": "C",
    "domain": "Command of Evidence"
  },
  {
    "id": "v2e-q12",
    "section": "verbal",
    "stage": 2,
    "text": "Book lovers are often eager to watch movies based on literary works they admire. Therefore, when a movie version of John Irving's novel The Cider House Rules was released in 1999, fans of the novel flocked to theaters. In a study, Klaudia H.Y. Lee concluded that movie adaptations of books can also inspire people to read the original books. Which quotation from a moviegoer would best illustrate Lee's conclusion?",
    "choices": [
      { "id": "A", "text": "\"Usually if I like a movie that's based on a book, I'll try to borrow that book from the library later on.\"" },
      { "id": "B", "text": "\"Sometimes if I find a movie interesting, I'll watch it more than once.\"" },
      { "id": "C", "text": "\"When watching a movie with a complicated plot, knowing the basic storyline beforehand can be helpful.\"" },
      { "id": "D", "text": "\"Books typically have more details than movies do, so I enjoy books more.\"" }
    ],
    "correctChoiceId": "A",
    "domain": "Command of Evidence"
  },
  {
    "id": "v2e-q13",
    "section": "verbal",
    "stage": 2,
    "text": "A student in an economics course is examining the decline since 1950 in average hours worked per person per year in various nations. The student researches how the decline in Belgium compares to that in other countries. Which choice most effectively uses data from the table to complete the student's conclusion?",
    "choices": [
      { "id": "A", "text": "though the decline in number of hours worked in Belgium was not as great as that in Ireland, it was greater than that in Finland and Mexico." },
      { "id": "B", "text": "though the decline in number of hours worked in Belgium was less than that in Ireland and Mexico, it was greater than that in Finland." },
      { "id": "C", "text": "the percent decrease in hours worked was greater in Belgium than it was in Ireland, Finland, or Mexico." },
      { "id": "D", "text": "while the number of hours worked rose in Belgium between 1950 and 2017, it declined in Ireland, Finland, and Mexico." }
    ],
    "correctChoiceId": "A",
    "domain": "Command of Evidence (Quantitative)"
  },
  {
    "id": "v2e-q14",
    "section": "verbal",
    "stage": 2,
    "text": "Evan MacLean and colleagues evaluated behavioral and genetic data from over 14,000 dogs, representing more than 100 breeds, and found that genetic variations track to differing extents with behavioral variations between the breeds. This was the case for the behavioral categories of separation problems and dog rivalry but was especially pronounced for attachment and attention-seeking. In another study, researchers found that the French bulldog and the cairn terrier breeds exhibit very different levels of attachment and attention-seeking. When considered in light of the study by MacLean and colleagues, this finding suggests that...",
    "choices": [
      { "id": "A", "text": "there may be a substantial dissimilarity between French bulldogs and cairn terriers in the genes associated with attachment and attention-seeking." },
      { "id": "B", "text": "French bulldogs and cairn terriers are more likely to share genes associated with attachment and attention-seeking than to share genes associated with separation problems or dog rivalry." },
      { "id": "C", "text": "there may be a greater tendency toward attachment and attention-seeking in French bulldogs and cairn terriers than in some other dog breeds." },
      { "id": "D", "text": "individual French bulldogs may display higher levels of attachment and attention-seeking than individual cairn terriers do." }
    ],
    "correctChoiceId": "A",
    "domain": "Inferences"
  },
  {
    "id": "v2e-q15",
    "section": "verbal",
    "stage": 2,
    "text": "Data collected by the Mars rover Curiosity at the Gale Crater's Murray Formation are suggestive of hydrological deposition of sediment in the distant past. To characterize the nature of the depositional environment, Frances Rivera-Hernández et al. analyzed the grain size of Murray Formation sediment. They concluded that the coarse grains are sandstone, which tends to be deposited by flowing water, whereas the fine grains are mudstone, which is slowly deposited by settling out of suspension in low-flow water, leading the researchers to posit that...",
    "choices": [
      { "id": "A", "text": "although the area of the Murray Formation experienced a prolonged period of dryness that prevented a lake from forming, water flowing from a distant source was present." },
      { "id": "B", "text": "one or more streams existed at the Murray Formation for an extended period until being replaced by a lake that persisted for only a brief period before permanently drying." },
      { "id": "C", "text": "a stream-fed lake was present at the Murray Formation for an extended period, and although the streams experienced occasional drying, the lake did not." },
      { "id": "D", "text": "a lake existed at the Murray Formation for a prolonged period, though the lake occasionally experienced drying and there were periods in which one or more streams were present." }
    ],
    "correctChoiceId": "D",
    "domain": "Inferences"
  },
  {
    "id": "v2e-q16",
    "section": "verbal",
    "stage": 2,
    "text": "Mathematician Grigori Perelman, sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau, _______ credited with proving the Poincaré conjecture.",
    "choices": [
      { "id": "A", "text": "are" },
      { "id": "B", "text": "are being" },
      { "id": "C", "text": "is" },
      { "id": "D", "text": "have been" }
    ],
    "correctChoiceId": "C",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q17",
    "section": "verbal",
    "stage": 2,
    "text": "One of the muscles in the hand is called the pollical palmar interosseous. _______ muscle helps with curling the fingers.",
    "choices": [
      { "id": "A", "text": "Those" },
      { "id": "B", "text": "This" },
      { "id": "C", "text": "These" },
      { "id": "D", "text": "Which" }
    ],
    "correctChoiceId": "B",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q18",
    "section": "verbal",
    "stage": 2,
    "text": "When a given term—\"self-fulfilling prophecies\" and \"role models\" are two well-known examples—is generally accepted and frequently used, _______ susceptible to obliteration by incorporation (OBI).",
    "choices": [
      { "id": "A", "text": "these often become" },
      { "id": "B", "text": "they often become" },
      { "id": "C", "text": "it often becomes" },
      { "id": "D", "text": "this often becomes" }
    ],
    "correctChoiceId": "C",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q19",
    "section": "verbal",
    "stage": 2,
    "text": "Neha Savant is a biologist at Columbia _______ conducts research on amphibians.",
    "choices": [
      { "id": "A", "text": "University, she" },
      { "id": "B", "text": "University. She" },
      { "id": "C", "text": "University she" },
      { "id": "D", "text": "University. Where she" }
    ],
    "correctChoiceId": "B",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q20",
    "section": "verbal",
    "stage": 2,
    "text": "Leptoptilos dubius, also known as the greater _______ can be found in places like the Central Tanintharyi Coast in Myanmar and Chitwan National Park in Nepal, but more than 80 percent of this endangered stork species is found in Assam, India.",
    "choices": [
      { "id": "A", "text": "adjutant" },
      { "id": "B", "text": "adjutant—" },
      { "id": "C", "text": "adjutant;" },
      { "id": "D", "text": "adjutant," }
    ],
    "correctChoiceId": "D",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q21",
    "section": "verbal",
    "stage": 2,
    "text": "Roger & Steve, London is a photograph by Sunil Gupta, an Indian Canadian artist. Gupta created ——— in 1984.",
    "choices": [
      { "id": "A", "text": "them" },
      { "id": "B", "text": "it" },
      { "id": "C", "text": "these" },
      { "id": "D", "text": "those" }
    ],
    "correctChoiceId": "B",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q22",
    "section": "verbal",
    "stage": 2,
    "text": "Dorien Schröder is a biologist at the Dutch Shark ——— conducts research on sharks.",
    "choices": [
      { "id": "A", "text": "Society. She" },
      { "id": "B", "text": "Society, she" },
      { "id": "C", "text": "Society she" },
      { "id": "D", "text": "Society. Where she" }
    ],
    "correctChoiceId": "A",
    "domain": "Boundaries"
  },
  {
    "id": "v2e-q23",
    "section": "verbal",
    "stage": 2,
    "text": "It has long been thought that humans first crossed a land bridge into the Americas approximately 13,000 years ago. ——— based on radiocarbon dating of samples uncovered in Mexico, a research team recently suggested that humans may have arrived more than 30,000 years ago.",
    "choices": [
      { "id": "A", "text": "As a result," },
      { "id": "B", "text": "Similarly," },
      { "id": "C", "text": "However," },
      { "id": "D", "text": "In conclusion," }
    ],
    "correctChoiceId": "C",
    "domain": "Transitions"
  },
  {
    "id": "v2e-q24",
    "section": "verbal",
    "stage": 2,
    "text": "When sculptor Frédéric Auguste Bartholdi was designing the Statue of Liberty, he sought the advice of engineer Gustave Eiffel. Eiffel suggested that he make the statue's arm thick and position it straight above the figure's head. ——— Bartholdi decided to slim the arm and tilt it out at an angle.",
    "choices": [
      { "id": "A", "text": "Additionally," },
      { "id": "B", "text": "Instead," },
      { "id": "C", "text": "Thus," },
      { "id": "D", "text": "For example," }
    ],
    "correctChoiceId": "B",
    "domain": "Transitions"
  },
  {
    "id": "v2e-q25",
    "section": "verbal",
    "stage": 2,
    "text": "Famous for its four-degree tilt, the leaning Garisenda Tower is a popular attraction in Bologna's city center. However, measurements taken in 2023 showed that the tower was rotating in a concerning way. ——— city officials closed the area around the tower so experts could explore solutions to stabilize the historical twelfth-century structure.",
    "choices": [
      { "id": "A", "text": "Similarly," },
      { "id": "B", "text": "As a result," },
      { "id": "C", "text": "For example," },
      { "id": "D", "text": "In comparison," }
    ],
    "correctChoiceId": "B",
    "domain": "Transitions"
  },
  {
    "id": "v2e-q26",
    "section": "verbal",
    "stage": 2,
    "text": "The student wants to emphasize a similarity between the Laas Geel paintings and the Dhagah Nabi Galay paintings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      { "id": "A", "text": "The earliest examples of writing in East Africa are thought to be featured in the paintings at the Dhagah Nabi Galay caves in Somaliland." },
      { "id": "B", "text": "The paintings at the Dhagah Nabi Galay caves feature examples of writing, while those at the Laas Geel caves feature humans and animals." },
      { "id": "C", "text": "In Somaliland, the paintings in the Laas Geel caves feature human figures and animals." },
      { "id": "D", "text": "The Laas Geel paintings and the Dhagah Nabi Galay paintings are both examples of ancient rock art found in Somaliland." }
    ],
    "correctChoiceId": "D",
    "domain": "Rhetorical Synthesis"
  },
  {
    "id": "v2e-q27",
    "section": "verbal",
    "stage": 2,
    "text": "The student wants to describe Kosuth's sculpture. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      { "id": "A", "text": "Joseph Kosuth and Shezad Dawood are artists who have used neon in their sculptures." },
      { "id": "B", "text": "Joseph Kosuth created his sculpture in 1986, and Shezad Dawood's was made in 2013." },
      { "id": "C", "text": "Joseph Kosuth's sculpture Catharsis, Conversion, Traumata is crafted from blue neon lighting that spells out the title phrase (\"catharsis, conversion, traumata\")." },
      { "id": "D", "text": "Harvest Moon is a neon sculpture by Shezad Dawood, and it contains an abstract moon shape in yellow neon lighting." }
    ],
    "correctChoiceId": "C",
    "domain": "Rhetorical Synthesis"
  }
]}
  