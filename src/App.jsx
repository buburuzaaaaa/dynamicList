import './App.css';
import Dynamiclist from './components/Dynamiclist';
import Searchbar from './components/Searchbar';
function App() {
  const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="App">
      <Dynamiclist data = {data} type = {"ul"}/>
      <Searchbar />
    </div>
  
  );
}

export default App;
