export type Character = {
  id: number;
  name: string;
  category: "Originals" | "Streetwear" | "Alter egos";
  color: string;
  detail: string;
};
export const characters: Character[] = [
  {
    id: 1,
    name: "Neon Ronin",
    category: "Originals",
    color: "Electric blue",
    detail: "Pink hair. Blue varsity. A little rebellion goes a long way.",
  },
  {
    id: 2,
    name: "Silver Ghost",
    category: "Originals",
    color: "Tangerine",
    detail: "Silver-haired and quietly fearless. Always one step ahead.",
  },
  {
    id: 3,
    name: "Golden Hour",
    category: "Streetwear",
    color: "Acid yellow",
    detail: "A bold puffer for someone who never blends into the crowd.",
  },
  {
    id: 10,
    name: "Night Shift",
    category: "Alter egos",
    color: "Electric blue",
    detail: "After dark, another side of the city comes alive.",
  },
  {
    id: 5,
    name: "Urban Nomad",
    category: "Streetwear",
    color: "Tangerine",
    detail: "Camo layers, ice-blue hair, and a path of their own.",
  },
  {
    id: 9,
    name: "Ghost Signal",
    category: "Alter egos",
    color: "Sky blue",
    detail: "A familiar silhouette with an otherworldly companion.",
  },
  {
    id: 7,
    name: "Flame Runner",
    category: "Originals",
    color: "Mint",
    detail: "A spark of color in a city that never switches off.",
  },
  {
    id: 14,
    name: "Good Fortune",
    category: "Streetwear",
    color: "Volt green",
    detail: "Big jacket. Bigger energy. Here for the good times.",
  },
  {
    id: 4,
    name: "Redline",
    category: "Originals",
    color: "Volt green",
    detail: "Classic red layers and a look that means business.",
  },
  {
    id: 6,
    name: "Off Grid",
    category: "Streetwear",
    color: "Amber",
    detail: "Goggles up. The next adventure is just around the corner.",
  },
  {
    id: 8,
    name: "Sun Chaser",
    category: "Streetwear",
    color: "Neon green",
    detail: "Warm colors, bright ideas, and a fresh perspective.",
  },
  {
    id: 11,
    name: "Wild Card",
    category: "Alter egos",
    color: "Hot pink",
    detail: "A flash of camo and an unexpected plus-one.",
  },
  {
    id: 12,
    name: "Blackout",
    category: "Originals",
    color: "Signal red",
    detail: "Stripped back to the essentials. Presence speaks for itself.",
  },
  {
    id: 13,
    name: "Blue Note",
    category: "Streetwear",
    color: "Tangerine",
    detail: "Old-school varsity with a new-school point of view.",
  },
  {
    id: 15,
    name: "Trailblazer",
    category: "Streetwear",
    color: "Tangerine",
    detail: "Packed light. Thinking big. Ready for whatever comes next.",
  },
  {
    id: 16,
    name: "Hot Streak",
    category: "Alter egos",
    color: "Signal red",
    detail: "A familiar face, reimagined with a little extra heat.",
  },
];
export const characterImage = (id: number) =>
  `/assets/character-${String(id).padStart(2, "0")}.webp`;
