import React from "react";
import '../style/ReadNewsButton.css'

function ReadNewsButton(props) {

  // direciona o usuário ao link da notícia
  const handleClick = () => {
    window.location.href = props.link;
  }

  return (
    <button className="readNewsButton" onClick={handleClick}>Leia a notícia aqui</button>
  )
}

export default ReadNewsButton