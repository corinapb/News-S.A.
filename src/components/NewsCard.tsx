import React from "react";
import ReadNewsButton from "./ReadNewsButton.tsx";
import TimeStamp from "./TimeStamp.tsx";
import FavoriteButton from "./FavoriteButton.tsx";
import { NewsObjectType } from "../context/types.ts";
import '../style/NewsCard.css'

function NewsCard(props: { news: NewsObjectType }) {
  const { news } = props;

  return (
    <section className="newsCard">
      <h2>{news.titulo}</h2>
      <p>{news.introducao}</p>
      <div className="newsCardDiv">
        <TimeStamp publishingDate={news.data_publicacao} />
        <ReadNewsButton link={news.link} />
      </div>
      <div className="likeButton">
      <FavoriteButton news={news} />
      </div>
    </section>
  )
}

export default NewsCard;
