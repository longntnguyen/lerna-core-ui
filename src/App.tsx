
import './App.css';
import Selector from './components/Selector/Selector';
import { Textfield } from './components/Textfield/Textfield';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Selector/>
      </header>
      <Textfield/>
    </div>
  );
}

export default App;
