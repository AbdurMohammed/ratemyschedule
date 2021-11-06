import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SampleTitle/>
      <InsertTable/>
    </div>
  );
}
function SampleTitle() {
  return(
    <div>
      <h1>RateMySchedule</h1>
      <p>Contribute your Rating: https://forms.gle/uJ9hcFMSwHZpbDSq7</p> 
    </div>
  );
}
function InsertTable() {
  return(
    <div>
      <label for="text-form">Insert copied data from SPIRE</label>
    </div>
  );
}


export default App;
