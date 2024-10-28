type ContentType =
  | { category: "text"; body: string }
  | { category: "linkedBy"; user: string; body: string }
  | { category: "suggestions"; recommandedUsers: string[] }
  | { category: "photo"; url: string }
  | { category: "clip"; url: string };

declare const elements: ContentType[];

type typeContent = ContentType["category"];

type FilterByCategory<
  Elements extends { category: string },
  Category extends Elements["category"]
> = Elements extends { category: Category } ? Elements : never;

function filterItems<
  Elements extends { category: string },
  Category extends Elements["category"]
>(
  array: Elements[],
  category: Category[]
): FilterByCategory<Elements, Category>[] {
  return array.filter((itm) => category.includes(itm.category as Category));
}

type FilteredList = FilterByCategory<ContentType, "text" | "linkedBy">;

type FilterUnion<Element, U> = Element extends U ? Element : never;

type FFU = FilterUnion<ContentType, { category: "text" | "linkedBy" }>;

