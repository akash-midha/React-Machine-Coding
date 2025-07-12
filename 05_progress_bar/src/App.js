import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const bars = [2, 5, 10, 30, 60, 80, 100]
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((item, i)=>{
        return <div>
          <ProgressBar key={i} progress = {item}/>
          </div>
      })}
    </div>
  );
}

export default App;
