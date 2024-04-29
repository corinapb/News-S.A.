import React from "react";
import '../style/MoreNewsButton.css';

function MoreNewsButton(props) {

  const {handleShowMoreNews} = props;

  return(
    <button 
    className="moreNewsButton"
    onClick={ handleShowMoreNews }
    >
      MAIS NOTÍCIAS
    </button>
  )
}

export default MoreNewsButton;
