import { Film } from "../interfaces/Film";

export async function fetchRecomendations(id: string): Promise<Film[]> {
 const res = await fetch(`/api/films/recomended/${id}`);
    if (!res.ok) throw new Error("Error fetching films");
    const data: Film[] = await res.json();

    return data;
}

