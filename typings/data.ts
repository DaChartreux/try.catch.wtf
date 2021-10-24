import { Dayjs } from "dayjs";

import type { HeroImageName } from "@typings/heroImageName";

export type Post = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  fileName: string;
  slug: string;
  createdAt: string | Dayjs;
  isPublished: boolean;
  heroImageName: HeroImageName;
  heroCreditSource?: string;
  heroCreditUserProfile?: string;
  heroCreditUserProfileUrl?: string;
};

export type CategoryString = "web" | "performance";
