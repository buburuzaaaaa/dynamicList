import './App.css';
import Dynamiclist from './components/Dynamiclist';
import Searchbar from './components/Searchbar';
import Accordion  from './components/Accordion';
import RandomizedQuote from './components/RandomizedQuote'
import Question  from './components/Question';
function App() {
  // const [popupVisible, setPopupVisible] = useState(false);
  // const [activeApp, setActiveApp] = useState(null);

  // const openPopup = (appId) => {
  //   setPopupVisible(true);
  //   setActiveApp(appId);
  // };

  // const closePopup = () => {
  //   setPopupVisible(false);
  //   setActiveApp(null);
  // };

  // const handleAppClick = (appId) => {
  //   // Toggle the popup visibility for the clicked app
  //   if (activeApp === appId) {
  //     closePopup();
  //   } else {
  //     openPopup(appId);
  //   }
  // };

  return (
    
    <div className="App">
      {/* <div id="apps-container">
      <div className="app-box" id='app2' onClick={() => handleAppClick('Spotify')}>
        </div>
        <div className="app-box" id='app1' onClick={() => handleAppClick('Quote Gen')}>
        </div>
        </div> */}
      <Searchbar/>
      <Accordion />
      <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/4uVoHqqYPREMukeStfZNmZ?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <RandomizedQuote/>

      
    </div>
  
  );
}

export default App;
