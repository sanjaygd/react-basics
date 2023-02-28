import './App.css';
import {Meet} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

// import Meet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message/> */}
    </div>
  );
}

export default App;
