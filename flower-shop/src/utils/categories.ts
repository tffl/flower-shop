import { ApiCategory } from "../types/types";
import { executeApiRequest } from "./universal";

export const fetchCategoryIds = async (): Promise<{
  mainCategories: string[];
  subCategories: string[];
}> => {
  try {
    const response = await executeApiRequest({
      endpoint: "categories",
      query: { limit: "100" },
    });

    const categories = response.results as ApiCategory[];

    return {
      mainCategories: categories
        .filter((cat) => !cat.parent)
        .map((cat) => cat.id),
      subCategories: categories
        .filter((cat) => cat.parent)
        .map((cat) => cat.id),
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { mainCategories: [], subCategories: [] };
  }
};
