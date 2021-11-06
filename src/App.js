import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="contained" color="primary">
          test button
        </Button>
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
      <label for="text-form">Insert copied data from SPIRE </label>
      <input type="text" id = "text=form" size="30" height="50"/>
    </div>
  );
}


export default App;
