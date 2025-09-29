import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import { Link } from "react-router-dom";
import { fetchFilms } from "../../services/filmService";
import { useDispatch } from "react-redux";
import { setFilms } from "../../store/slices/filmsSlice";
import type { AppDispatch } from "../../store";
import Spinner from "../../components/commons/spinner";
import "../../styles/app.scss";
import {
  Film,
  FilmCategories,
  FilmsByCategory,
  FilmTest,
} from "../../interfaces/Film";

export default function HomePage() {
  const [filmsByCategory, setFilmsByCategory] = useState<FilmsByCategory>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const categories = ["top_rated", "popular", "upcoming"];

  useEffect(() => {
    fetchFilms(categories)
      .then((data) => {
        const allFilms: Film[] = Object.values(data).flat();
        const uniqueFilmsMap = new Map<number, Film>();

        allFilms.forEach((film) => {
          const existing = uniqueFilmsMap.get(film.id);

          if (existing) {
            if (film.category === "upcoming") {
              uniqueFilmsMap.set(film.id, film);
            }
          } else {
            uniqueFilmsMap.set(film.id, film);
          }
        });

        const uniqueFilms = Array.from(uniqueFilmsMap.values());

        dispatch(setFilms(uniqueFilms));
        setFilmsByCategory(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p>Errosr: {error}</p>;

  return (
    <div className="homepage">
      {Object.entries(filmsByCategory).map(([category, films]) => (
        <section className="app__section" key={category}>
          <Carousel title={FilmTest[category as FilmCategories]}>
            {films.map((film) => (
              <Link to={`/film/${film.id}`} key={film.id}>
                <img
                  src={film.poster}
                  alt={film.title}
                  className="carousel__poster"
                />
              </Link>
            ))}
          </Carousel>
        </section>
      ))}
    </div>
  );
}
