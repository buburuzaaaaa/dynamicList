import React, { useState } from 'react';
import './App.css';
import Dynamiclist from './components/Dynamiclist';
import Searchbar from './components/Searchbar';
import Accordion  from './components/Accordion';
import RandomizedQuote from './components/RandomizedQuote'
import Question  from './components/Question';

function App() {
  const [spotifyVisible, setSpotifyVisible] = useState(false);

  const toggleSpotify = () => {
    setSpotifyVisible(!spotifyVisible);
  };

  return (
    <div className="App">
      <Searchbar />
      <Accordion />
      <div className="spotify-container" onClick={toggleSpotify}>
        Click here to {spotifyVisible ? 'hide' : 'show'} Spotify
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
  );
}

export default App;
