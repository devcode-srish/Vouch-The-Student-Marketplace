export type SellerRating = "Bronze" | "Silver" | "Gold" | "Platinum";

export type Seller = {
  id: string;
  name: string;
  avatarUrl: string;
  rating: SellerRating;
  successfulOrders: number;
  address: string;
};

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number; // in ALGO
  imageUrl: string;
  imageHint: string;
  category: string;
  sellerId: string;
};

export type Reward = {
  id:string;
  name: string;
  brand: string;
  cost: number; // in-app currency
  imageUrl: string;
  imageHint: string;
};

export type PaymentStatus = "Completed" | "Held" | "Failed";

export type Purchase = {
  transactionId: string;
  item: Item;
  purchaseDate: string;
  status: PaymentStatus;
};

export type LoginRecord = {
  id: string;
  user: string;
  timestamp: string;
  location: string;
  platform: {
    os: string;
    browser: string;
  };
  avatarUrl?: string;
  paymentMethod: string;
};
