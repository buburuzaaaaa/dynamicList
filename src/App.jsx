import React, { useState } from 'react';
import './App.css';
import Dynamiclist from './components/Dynamiclist';
import Accordion from './components/Accordion';
import RandomizedQuote from './components/RandomizedQuote';
import Question from './components/Question';
import Searchbar from './components/Searchbar'; // Make sure to import Searchbar

function App() {
  const [spotifyVisible, setSpotifyVisible] = useState(false);

  const toggleSpotify = () => {
    setSpotifyVisible(!spotifyVisible);
  };

  return (
    <div className="App">
      <h1>IBROWSE</h1>
       <Searchbar />
      <div className="content-container">
        <Accordion />
        <div className="spotify-container" onClick={toggleSpotify}>
         {spotifyVisible ? 'hide' : 'show'} Spotify
        </div>
        {spotifyVisible && (
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/4uVoHqqYPREMukeStfZNmZ?utm_source=generator"
            width="50%" height="352" frameBorder="0" allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
          ></iframe>
        )}
        <RandomizedQuote />
      </div>
     
    </div>
  );
}

export default App;
