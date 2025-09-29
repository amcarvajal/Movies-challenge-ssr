import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { removeFromWishlist } from "../../store/slices/filmsSlice";
import Button from "../../components/ui/Button";
import "./wishlist.scss";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const wishlist = useSelector((state: RootState) => state.films.wishlist);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Any film added yet to wishlist.</p>
      ) : (
        <div className="wishlist-container__section">
          {wishlist.map((film) => (
            <div key={film.id}>
              <Link to={`/film/${film.id}`} key={film.id}>
                <img src={film.poster} alt={film.title} width={80} />
              </Link>
              <span className="wishlist-container__section__title">
                {film.title}
              </span>
              <Button
                onClick={() => handleRemove(film.id)}
                variant={"__removeButton"}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
