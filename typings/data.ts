import { Dayjs } from "dayjs";

export type Post = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  slug: string;
  createdAt: string | Dayjs;
  isPublished: boolean;
  heroCreditSource?: string;
  heroCreditUserProfile?: string;
  heroCreditUserProfileUrl?: string;
};

export type Views = {
  views: number;
};

export type CategoryString = "web" | "performance";
