// PLACEHOLDER DATA ONLY. These are NOT real DreamNest properties.
// Before publishing, replace every field: name, location, category, description and image.
// Put photos in /public/images and set `image` (e.g. "/images/property-1.jpg").
export type Property = {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  image?: string;
  imageAlt: string;
  tone: string; // placeholder gradient used until an image is set
};

export const properties: Property[] = [
  {
    id: "p1",
    name: "[Property Name One]",
    location: "[Location]",
    category: "Farmhouse",
    description: "[Short description of the property and its setting.]",
    imageAlt: "Placeholder: farmhouse surrounded by greenery",
    tone: "from-[#6f8a74] to-[#d4c39b]",
  },
  {
    id: "p2",
    name: "[Property Name Two]",
    location: "[Location]",
    category: "Villa",
    description: "[Short description of the property and its setting.]",
    imageAlt: "Placeholder: contemporary villa at dusk",
    tone: "from-[#2d4a62] to-[#a9b8a0]",
  },
  {
    id: "p3",
    name: "[Property Name Three]",
    location: "[Location]",
    category: "Estate",
    description: "[Short description of the property and its setting.]",
    imageAlt: "Placeholder: estate with landscaped grounds",
    tone: "from-[#b9a77d] to-[#4f6b57]",
  },
];
