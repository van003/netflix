import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      
      <Banner/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="Tv Series" fetchUrl={requests.fetchTv} />
      <Row title="Tv Episode" fetchUrl={requests.fetchEpisodes} />
      <Row title="Genres" fetchUrl={requests.fetchList} />
    </div>
  );
}

export default App;
