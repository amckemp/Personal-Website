export type CrochetPattern = {
  slug: "all_hats" | "two_totoro" | "two_hats" | "one_totoro";
  title: string;
  coverImage: string;
  images: string[];
  body: string[];
};

export const crochetPatterns: CrochetPattern[] = [
  {
    slug: "all_hats",
    title: "all hats",
    coverImage: "/photos/all_hats.jpeg",
    images: [
      "/photos/all_hats.jpeg",
      "/photos/all_hats.jpeg",
      "/photos/all_hats.jpeg",
    ],
    body: [
      "a set of crochet hats made in a coordinated palette, each with a slightly different texture and silhouette while staying within the same cozy design language. this piece was built as a practice in shaping, finishing, and colour mixing, and it became a collection of soft, wearable pieces that feel playful, bright, and handmade. the pattern is a great reminder that a single project can be expanded into multiple variations, each keeping the same charm while adding a bit of personality and a slightly different mood depending on the combination of stitches and colours.",
      "this piece was built as a practice in shaping, finishing, and colour mixing. the result is a collection of soft, wearable pieces that feel playful, bright, and handmade, but still cohesive as a group. the hats are simple enough to be wearable and charming enough to stand out as handmade works with their own little character and texture.",
      "this is a a set of crochet hats made in a coordinated palette, each with a slightly different texture and silhouette while staying within the same cozy design language. this piece was built as a practice in shaping, finishing, and colour mixing, and it became a collection of soft, wearable pieces that feel playful, bright, and handmade. the pattern is a great reminder that a single project can be expanded into multiple variations, each keeping the same charm while adding a bit of personality and a slightly different mood depending on the combination of stitches and colours.",
      "this is a piece was built as a practice in shaping, finishing, and colour mixing. the result is a collection of soft, wearable pieces that feel playful, bright, and handmade, but still cohesive as a group. the hats are simple enough to be wearable and charming enough to stand out as handmade works with their own little character and texture."
    ],
  },
  {
    slug: "two_totoro",
    title: "two totoro",
    coverImage: "/photos/two_totoro.jpeg",
    images: [
      "/photos/two_totoro.jpeg",
      "/photos/two_totoro.jpeg",
      "/photos/two_totoro.jpeg",
    ],
    body: [
      "this design features a pair of soft, whimsical motifs inspired by the friendly charm of totoro-style plush creatures. the construction focuses on rounded shapes, soft colour contrast, and a simple, comforting palette that makes each figure feel gentle, approachable, and wonderfully huggable. the goal was not only to make something adorable but also to practice miniature shaping, careful finish work, and a playful sense of proportion over a very small form.",
      "a fun project for texture play and miniature shaping, this pattern is built to be both expressive and easy to love at first glance. the details are intentionally simple, because the charm comes from the softness of the silhouette and the warmth of the palette rather than an overly busy pattern. the result feels cozy, familiar, and a little magical, which makes it ideal for display or gifting."
    ],
  },
  {
    slug: "two_hats",
    title: "two hats",
    coverImage: "/photos/two_hats.JPG",
    images: [
      "/photos/two_hats.JPG",
      "/photos/two_hats.JPG",
      "/photos/two_hats.JPG",
    ],
    body: [
      "this pair of hats explores contrast between simple stitches and softer, more textural finishes while preserving a clean silhouette. it is a grounded project with a practical goal: making warm, wearable accessories in a format that is easy to repeat and customize. the structure remains consistent, but the surface treatment shifts enough that each hat feels distinct without losing the sense of a matching set or pair. the result is a small collection of cheerful hats that feel cozy and handmade, each slightly different while still sharing the same overall rhythm and personality.",
      "the design process here was all about balance. the hats needed to feel useful and wearable, but also charming enough to show off the handmade details. by repeating the shape while varying the texture and finish, the project becomes a strong example of how a simple base can still feel inventive, warm, and full of character when the stitching choices change just enough."
    ],
  },
  {
    slug: "one_totoro",
    title: "one totoro",
    coverImage: "/photos/one_totoro.jpeg",
    images: [
      "/photos/one_totoro.jpeg",
      "/photos/one_totoro.jpeg",
      "/photos/one_totoro.jpeg",
    ],
    body: [
      "a single totoro-inspired crochet piece focused on soft volume, rounded edges, and a playful characterful shape. this pattern is a study in visual softness: gentle colour choices, simple stitching, and an adorable form that feels comforting and familiar. it is the kind of project that carries a lot of personality in a compact form, making it ideal for display or gifting, and it has the kind of charm that works perfectly when you want a handmade object that feels both whimsical and quietly cozy.",
      "what makes this design effective is how the softness of the silhouette does most of the storytelling. the colours stay calm and friendly, the curves are generous, and the overall form is simple enough to feel approachable while still being expressive. in a way, it is equal parts character study and texture experiment, and the final result feels instantly lovable even before you fully notice the detail work behind it."
    ],
  },
];
