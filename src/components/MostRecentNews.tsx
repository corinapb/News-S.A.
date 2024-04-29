import React, { useContext } from "react"
import DataContext from "../context/DataContext.ts"
import TimeStamp from "./TimeStamp.tsx";
import FavoriteButton from "./FavoriteButton.tsx";
import ReadNewsButton from "./ReadNewsButton.tsx";
import '../style/MostRecentNews.css'

function MostRecentNews() {
  const { mostRecentNews } = useContext(DataContext)

  if (mostRecentNews) {
    const imgJSONData = mostRecentNews?.imagens;
    const imgData = JSON.parse(imgJSONData);
    const imageSrc = `https://agenciadenoticias.ibge.gov.br/${imgData.image_intro}`;

    return (
      <section className="mostRecentNews">
        <img src={imageSrc} alt={mostRecentNews.titulo} className="mostRecentImg"/>
        <div className="mostRecentNewsContent">
          <div>
            <h3>Notícia mais recente</h3>
            <FavoriteButton news={ mostRecentNews } />
          </div>
          <h2>{mostRecentNews.titulo}</h2>
          <p>{mostRecentNews.introducao}</p>
          <div>
            <TimeStamp publishingDate={mostRecentNews.data_publicacao} />
            <ReadNewsButton link={mostRecentNews.link} />
          </div>
        </div>
      </section>
    )
  }
}

export default MostRecentNews