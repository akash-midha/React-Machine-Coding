import './App.css';
import { useEffect, useState } from 'react';
import { atlasResults } from './data/data';
import { API_URL, DELAY_TIME } from './data/constants';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [cachedResults, setCachedResults] = useState({});
  const isMock = false;


  const fetchJsonResults = (input) => {
    if (!input.trim()) {
      setData([]);
      return;
    }
    if (cachedResults[input]) {
      setData(cachedResults[input]);
      console.log(`From cached results: ${input}`);
      return;
    }
    const requiredData = atlasResults.filter((item) => item.toLowerCase().trim().includes(input.toLowerCase().trim()));
    setData(requiredData);
    setCachedResults((prev) => ({
      ...prev,
      [input]: requiredData
    }));
  }

  const fetchApiResults = async (input) => {
    if (!input.trim()) {
      setData([]);
      return;
    }
    if (cachedResults[input]) {
      setData(cachedResults[input]);
      console.log(`From cached results: ${input}`);
      return;
    }
    try {
      const apiData = await fetch(API_URL + input);
      const apiJson = await apiData.json();
      setData(apiJson?.recipes);
      setCachedResults((prev) => ({
        ...prev,
        [input]: apiJson?.recipes
      }));
    }
    catch (error) {
      console.log(`Error in fetching results due to: ${error}`);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      isMock ? fetchJsonResults(input) : fetchApiResults(input);
    }, DELAY_TIME);
    return () => {
      clearTimeout(timer);
    }
  }, [input]);


  const changeInputHandler = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className="App">
      <h1>AutoSearch</h1>

      <input
        className='input__searchbar'
        placeholder='Please enter here'
        value={input}
        onChange={(e) => changeInputHandler(e)}
        onFocus={() => { setResultsVisible(true) }}
        onBlur={() => { setResultsVisible(false) }}
        aria-label='Search for items'
      />

      {resultsVisible && <div className='input__suggestions'>
        {data.length > 0
          ? data.map((item, i) => {
            return <div
              key={i}
              className='search-result_container'
              aria-live='polite'
              role='listbox'
              >
              <span className='search-result_item' aria-label={`Search item: ${isMock ? item : item.name}`} >
                {isMock ? item : item.name}
              </span>
            </div>
          })
          : <div className='search-result_container' role='alert' aria-live='polite'>
            <span className='search-result_item' aria-label='No results found'>
              No Results Found
            </span>
          </div>
        }
      </div>}

    </div>
  );
}

export default App;
