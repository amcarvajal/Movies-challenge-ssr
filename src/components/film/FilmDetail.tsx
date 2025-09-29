import {
  FilmCategories,
  FilmDetailProps,
  FilmTest,
} from "../../interfaces/Film";
import Button from "../ui/Button";
import "./filmDetail.scss";

export default function FilmDetail({
  title,
  description,
  poster,
  category,
  onAddToWishlist,
}: FilmDetailProps) {
  return (
    <div className="film-detail">
      <div className="film-section">
        <img src={poster} alt={title} className="film-detail__poster" />
        <div className="film-detail__info">
          <h1
            className={`film-detail__title film-detail__title--${category.toLowerCase()}`}
          >
            {title}
          </h1>
          <p className={`film-detail__description--${category.toLowerCase()}`}>
            <h3 className={`film-detail__info__category}`}>
              {FilmTest[category as FilmCategories]}
            </h3>
            {description}
          </p>
          <Button variant={category} onClick={onAddToWishlist}>
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}
