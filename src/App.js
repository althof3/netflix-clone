import React, { useState } from 'react';
import './App.css';
import requests from './request';
import Row from './Row/Row';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

function App (){
  const [trailerUrl, setTrailer] = useState('')
  const [movieClicked, setMovieClicked] = useState('')
  const [titleClicked, setTitleClicked] = useState('')
  

  
return (
  <div className="app">
  <Navbar />
    <Banner />
    {
      requests.map((req, index) =>(
        <Row isLargeRow={req.large} key={index} title={req.name} fetchUrl={req.link} 
          setMovieClicked={setMovieClicked}
          movieClicked={movieClicked}
          setTrailer={setTrailer}
          trailerUrl={trailerUrl}
          titleClicked={titleClicked}
          setTitleClicked={setTitleClicked}
        />
      ))
    }
  </div>
);
  
}

export default App;
