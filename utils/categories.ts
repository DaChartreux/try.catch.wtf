import type { CategoryString } from "@typings/data";
import type { ColorShade } from "@typings/theme";

type Category = {
  [key in CategoryString]: {
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
  "front-end": {
    category: "Front End",
    color: "red-300",
  },
};
