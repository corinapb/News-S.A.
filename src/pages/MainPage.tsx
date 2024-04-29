import React, { useContext, useState } from 'react';
import MostRecentNews from '../components/MostRecentNews.tsx';
import DataContext from '../context/DataContext.ts';
import NewsCard from '../components/NewsCard.tsx';
import Header from '../components/Header.tsx';
import '../style/MainPage.css'
import FilterSelection from '../components/FilterSelection.tsx';
import MoreNewsButton from '../components/MoreNewsButton.tsx';

function MainPage() {
  const { firstPageNews, moreNews } = useContext(DataContext);
  const [selectedFilter, setSelectedFilter] = useState('Mais recentes');
  const filters = ['Mais recentes', 'Favoritas'];

  let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');

  const [showMoreNews, setShowMoreNews] = useState(false);  

  const handleShowMoreNews = () => {
    setShowMoreNews(true);
  }

  return (
    <div className='mainPage'>
      <Header />
      <main>
        <MostRecentNews />
        <section className='filters'>
          {filters.map((filter) => <FilterSelection filter={filter} selectedFilter={selectedFilter} setSelectedFilter= {setSelectedFilter} />)}
        </section>
        <section>
          { selectedFilter === 'Mais recentes' ? (
            <div className='moreNewsWithButton'>
              <div className='moreNews'>
                {firstPageNews?.map((news) => <NewsCard news={news} />)}
              </div>
              {showMoreNews ? (
                <div className='moreNews'> 
                  {moreNews?.map((news) => <NewsCard news={news} />)}
                </div>  
              ) : (
                <MoreNewsButton handleShowMoreNews={handleShowMoreNews} />
              )}
            </div>
          ) : (
            <div className='moreNews'> 
              {favoriteNews?.map((news) => <NewsCard news={news} />)}
            </div>        
          ) }
        </section>
      </main>
    </div>
  )
}

export default MainPage;
