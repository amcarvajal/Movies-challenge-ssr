import { Film } from "../interfaces/Film";

export async function fetchFilms(
  categories: string[] = ["popular"]
): Promise<Record<string, Film[]>> {
  const results = await Promise.all(
    categories.map(async (category) => {
      const res = await fetch(`/api/films/${category}`);
      if (!res.ok) throw new Error("Error fetching films");
      const data: Film[] = await res.json();
      return { [category]: data };
    })
  );

  return Object.assign({}, ...results);
}
