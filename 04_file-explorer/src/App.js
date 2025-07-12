import './App.css';
import { data } from './data/data';
import ListData from './components/ListData';

function App() {
  return (
    <div className="App">
      <h1>File / Folder Structure</h1>
      <ListData data={data} />
    </div>
  );
}

export default App;
