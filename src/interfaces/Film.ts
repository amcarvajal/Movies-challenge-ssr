export interface Film {
  id: number;
  title: string;
  poster: string;
  description: string;
  category: string;
}

export interface FilmsByCategory {
  [category: string]: Film[];
}

export interface FilmDetailProps {
  title: string;
  description: string;
  poster: string;
  category: string;
  onAddToWishlist: () => void;
}

export interface FilmsState {
  items: Film[];
  wishlist: Film[];
}

export enum FilmCategories {
  top_rated = "top_rated",
  popular = "popular",
  upcoming = "upcoming",
  recomendations = "recomendations",
}

export const FilmTest: Record<FilmCategories, string> = {
  [FilmCategories.top_rated]: "Top Rated",
  [FilmCategories.popular]: "Popular",
  [FilmCategories.upcoming]: "Upcoming",
  [FilmCategories.recomendations]: "Recommendations",
};

export const categoryClasses: Record<string, string> = {
  [FilmCategories.top_rated]: "category-top-rated",
  [FilmCategories.popular]: "category-popular",
  [FilmCategories.upcoming]: "category-upcoming",
  [FilmCategories.recomendations]: "category-recommendations",
};
