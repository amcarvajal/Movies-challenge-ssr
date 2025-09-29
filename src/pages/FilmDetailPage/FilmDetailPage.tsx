import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { addToWishlist, setFilms } from "../../store/slices/filmsSlice";
import "./filmDetail.scss";
import Carousel from "../../components/carousel/Carousel";
import { fetchRecomendations } from "../../services/recomendedService";
import { Film } from "../../interfaces/Film";
import FilmDetail from "../../components/film/FilmDetail";

export default function FilmDetailPage() {
  const { id } = useParams();
  const films = useSelector((state: RootState) => state.films.items);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const film: Film | undefined = useSelector((state: RootState) =>
    state.films.items.find((f) => f.id === Number(id))
  );

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(film as Film));
  };

  if (!film) {
    return <p className="notFound">Film not found</p>;
  }

  useEffect(() => {
    fetchRecomendations(id as string)
      .then((data) => {
        const allFilms: Film[] = Object.values(data).flat();
        dispatch(setFilms(allFilms));
      })
      .catch((err) => err.message)
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      <FilmDetail
        title={film.title}
        description={film.description}
        poster={film.poster}
        category={film.category}
        onAddToWishlist={handleAddToWishlist}
      />
      <div className="film-detail__recomendations">
        {films && (
          <Carousel title={"Recomended films"}>
            {films.map((film) => (
              <Link to={`/film/${film.id}`} key={film.id} className="film-card">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="carousel__poster"
                />
              </Link>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
