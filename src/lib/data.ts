import type { Item, Seller, Reward } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

export const sellers: Seller[] = [
  {
    id: "seller-1",
    name: "Rohan K.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-1",
    rating: "Platinum",
    successfulOrders: 124,
    address: "ROHANKALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1",
  },
  {
    id: "seller-2",
    name: "Priya S.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-2",
    rating: "Gold",
    successfulOrders: 78,
    address: "PRIYASALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2",
  },
  {
    id: "seller-3",
    name: "Amit B.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-3",
    rating: "Silver",
    successfulOrders: 32,
    address: "AMITBALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3",
  },
  {
    id: "seller-4",
    name: "Sneha M.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-4",
    rating: "Bronze",
    successfulOrders: 11,
    address: "SNEHAMALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4",
  },
  {
    id: "seller-5",
    name: "Vikram R.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-5",
    rating: "Gold",
    successfulOrders: 95,
    address: "VIKRAMRALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX5",
  },
  {
    id: "seller-6",
    name: "Anjali P.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-6",
    rating: "Platinum",
    successfulOrders: 152,
    address: "ANJALIPALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6",
  },
  {
    id: "seller-7",
    name: "Karan G.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-7",
    rating: "Silver",
    successfulOrders: 45,
    address: "KARANGALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7",
  },
  {
    id: "seller-8",
    name: "Meera N.",
    avatarUrl: "https://i.pravatar.cc/150?u=seller-8",
    rating: "Gold",
    successfulOrders: 68,
    address: "MEERANALGOADDRESSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8",
  },
];


// Base data for items without image properties
const itemsBase: Omit<Item, 'imageUrl' | 'imageHint'>[] = [
  {
    id: "item-1",
    name: "Lab Coat (Medium)",
    description:
      "Slightly used white lab coat, perfect for chemistry and biology labs. Size Medium. No stains, clean and pressed.",
    price: 15,
    category: "Apparel",
    sellerId: "seller-1",
  },
  {
    id: "item-2",
    name: "CAD Stationary Kit",
    description:
      "Complete stationary kit for CAD classes. Includes drafter, set squares, roller scale, and drawing clips. Gently used for one semester.",
    price: 22,
    category: "Stationary",
    sellerId: "seller-2",
  },
  {
    id: "item-3",
    name: "Data Structures Textbook",
    description:
      "Textbook for CSE2001 - Data Structures and Algorithms. 5th Edition. No markings or highlights inside. Cover is in excellent condition.",
    price: 12,
    category: "Books",
    sellerId: "seller-1",
  },
  {
    id: "item-4",
    name: "Mini Drafter",
    description:
      "Omega Mini Drafter with case. Essential for engineering drawing subjects. In perfect working condition.",
    price: 8,
    category: "Stationary",
    sellerId: "seller-3",
  },
  {
    id: "item-5",
    name: "Classmate Notebooks (Pack of 5)",
    description: "Unused, sealed pack of 5 single-line Classmate notebooks. 240 pages each.",
    price: 5,
    category: "Stationary",
    sellerId: "seller-4",
  },
  {
    id: "item-6",
    name: "Scientific Calculator (Casio)",
    description: "Casio FX-991EX Classwiz scientific calculator. Allowed in university exams. Good condition with cover.",
    price: 10,
    category: "Electronics",
    sellerId: "seller-5"
  },
  {
    id: "item-7",
    name: "Introduction to Algorithms (CLRS)",
    description: "The 'bible' of algorithms. 3rd Edition. A must-have for any computer science student.",
    price: 18,
    category: "Books",
    sellerId: "seller-6"
  },
  {
    id: "item-8",
    name: "Yoga Mat",
    description: "Standard yoga mat, anti-slip surface. Barely used. Includes a carrying strap.",
    price: 7,
    category: "Other",
    sellerId: "seller-2"
  },
  {
    id: "item-9",
    name: "Used Bicycle",
    description: "A reliable bicycle for getting around campus. Single speed, includes a lock. Shows some wear and tear but works great.",
    price: 50,
    category: "Other",
    sellerId: "seller-7"
  },
  {
    id: "item-10",
    name: "Electric Kettle (1.5L)",
    description: "Prestige 1.5L electric kettle. Perfect for making instant noodles or coffee in your dorm.",
    price: 9,
    category: "Electronics",
    sellerId: "seller-8"
  }
];

// Base data for rewards without image properties
const rewardsBase: Omit<Reward, 'imageUrl' | 'imageHint'>[] = [
    {
        id: "reward-1",
        name: "Sony WH-1000XM4",
        brand: "Sony",
        cost: 5000,
    },
    {
        id: "reward-2",
        name: "Amazon Gift Card $25",
        brand: "Amazon",
        cost: 1000,
    },
    {
        id: "reward-3",
        name: "1-Year Spotify Premium",
        brand: "Spotify",
        cost: 1200,
    },
    {
        id: "reward-4",
        name: "6-Month Netflix Subscription",
        brand: "Netflix",
        cost: 900,
    },
    {
        id: "reward-5",
        name: "College Backpack",
        brand: "Wildcraft",
        cost: 1500,
    }
];

// Create a map for quick lookup of image data
const imageMap = new Map(PlaceHolderImages.map(p => [p.id, { imageUrl: p.imageUrl, imageHint: p.imageHint }]));

// Combine base item data with image data, filtering out items without a specific image
export const items: Item[] = itemsBase
  .filter(item => imageMap.has(item.id))
  .map(item => {
    const imageData = imageMap.get(item.id)!;
    return { 
        ...item, 
        imageUrl: imageData.imageUrl, 
        imageHint: imageData.imageHint || 'placeholder' 
    };
});

// Combine base reward data with image data
export const rewards: Reward[] = rewardsBase.map(reward => {
    const imageData = imageMap.get(reward.id);
    return { 
        ...reward, 
        imageUrl: imageData?.imageUrl || 'https://placehold.co/600x400', 
        imageHint: imageData?.imageHint || 'placeholder' 
    };
});
