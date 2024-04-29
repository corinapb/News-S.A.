import React, { useContext } from 'react';
import MainPage from './pages/MainPage.tsx';
import DataContext from './context/DataContext.ts';
import DataProvider from './context/DataProvider.tsx';

function App() {

  const { isLoading } = useContext(DataContext)


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <DataProvider>
      <MainPage />
    </DataProvider>
  );
}

export default App;

