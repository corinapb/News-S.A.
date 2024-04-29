import React, { useEffect, useState } from "react";
import emptyHeart from '../images/emptyHeart.svg';
import filledHeart from '../images/filledHeart.svg';
import '../style/FavoriteButton.css';
import { NewsObjectType } from "../context/types";

type Prop = {
  news: NewsObjectType,
};

function FavoriteButton(props: Prop) {
  const { news } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');

    if (isFavorite) {
      const updatedFavoriteNews = favoriteNews.filter((favNews) => favNews.id === news.id);

      localStorage.setItem('favoriteNews', JSON.stringify(updatedFavoriteNews));
      setIsFavorite(false);

    } else {
      favoriteNews.push(news);
      localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const favoriteNews = localStorage.getItem('favoriteNews');
    if (favoriteNews) {
      const parsedFavoriteNews = JSON.parse(favoriteNews);
      const isNewsFavorite = parsedFavoriteNews.some((favNews) => favNews.id === news.id);
      setIsFavorite(isNewsFavorite);
    }
  }, [news]);

  return (
    <button 
      onClick={ handleClick }
      className="favoriteButton"
    >
      <img src={ isFavorite ? filledHeart : emptyHeart } alt="like" />
    </button>
  )
}

export default FavoriteButton