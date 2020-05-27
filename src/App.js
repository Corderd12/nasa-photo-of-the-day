import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Media from "./Media";

const nasaAPIKey = 'rbS9YSQx5nnvUtqosZzRi4MwKDgbV6CjnOlOq3a6';
const nasaAPIUrl= 'https://api.nasa.gov/planetary/apod?api_key='

function App() {
  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    axios.get(nasaAPIUrl + nasaAPIKey)
      .then(res => {
        console.log(res.data);
        setPhotoData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div className="App">
      <header>
<h1>Dylan Corder's NASA Photo of the Day</h1>
<h2>"Space travel is life-enhancing, and anything that's life-enhancing is worth doing. It makes you want to live forever."  -Ray Bradbury</h2>
</header>


<section className="photo">
  {photoData ?
  [<Media url={photoData.url} />,
  <p>{photoData.title}</p>,
  <p>{photoData.explanation}</p>]
  :
  <h2>Loading your photo</h2>
  }
</section>
    </div>
  );
}

export default App;
