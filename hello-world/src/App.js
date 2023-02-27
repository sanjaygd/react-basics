import './App.css';
import {Meet} from './components/Greet';
import Welcome from './components/Welcome';

// import Meet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Meet name='Bruce' heroName='Batman' />
      <Meet name='Cark' heroName='Super Man'>
        <p>This is children Component</p>
      </Meet>      
      <Welcome name="Diana" heroName="Wonder Women"/>
    </div>
  );
}

export default App;
