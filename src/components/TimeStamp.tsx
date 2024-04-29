import React from "react";
import { differenceInDays, parse } from 'date-fns';

function TimeStamp(props) {

  // data atual
  const dataAtual = new Date();

  // data da publicação da matéria (string)
  const dataRecebidaString = props.publishingDate
  // transforma a data de string para object
  const dataRecebida = parse(dataRecebidaString, 'dd/MM/yyyy HH:mm:ss', new Date());

  // utiliza a função para calcular a diferença em dias
  const days = differenceInDays(dataAtual, dataRecebida);

  let timeStamp;
  if (days === 0) {
    timeStamp = "Publicado hoje";
  } else if (days === 1) {
    timeStamp = "1 dia atrás";
  } else {
    timeStamp = `${days} dias atrás`;
  }
  return (
    <p>{timeStamp}</p>
  )
}

export default TimeStamp;
