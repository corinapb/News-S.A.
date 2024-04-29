import React, { useEffect, useState } from 'react';
import DataContext from './DataContext.ts';
import useFetch from '../hooks/useFetch';

type DataProviderType = {
  children: React.ReactNode;
};

function DataProvider({ children }: DataProviderType) {
  const apiURL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const { data, isLoading, error } = useFetch(apiURL);

  const [mostRecentNews, setMostRecentNews] = useState();
  const [firstPageNews, setFirstPageNews] = useState();
  // const [favoriteNews, setFavoriteNews] = useState();
  const [moreNews, setMoreNews] = useState();

  useEffect(() => {
    if (data) {
      setMostRecentNews(data.items[0])
      const selectedNews = data.items.slice(1, 10);
      setFirstPageNews(selectedNews);
      const moreNewsFromIBGE = data.items.slice(11, 20);
      setMoreNews(moreNewsFromIBGE);
    }
  }, [data])

  const values = {
    data,
    isLoading,
    error,
    mostRecentNews,
    firstPageNews,
    moreNews,
  };

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
