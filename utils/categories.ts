import type { CategoryString } from "@typings/data";
import type { ColorShade } from "@typings/theme";

type Category = {
  [_key in CategoryString]: {
    category: string;
    color: ColorShade;
  };
};

export const CATEGORIES: Category = {
  web: {
    category: "Web",
    color: "blue-300",
  },
  performance: {
    category: "Performance",
    color: "green-300",
  },
  frontend: {
    category: "Frontend",
    color: "red-300",
  },
};
