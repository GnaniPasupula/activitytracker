import "./App.css";
import { useState } from "react";
import AddActivity from "./components/AddActivity/AddActivity";
import CurrentActivity from "./components/CurrentActivity/CurrentActivity";
import { arr } from "./components/AddActivity/AddActivity";

function App() {
  const [addActivity, setAddActivity] = useState(true);

  return (
    <div className="App">
      <h1>Activity Tracker</h1>
      <h3>Active-Activities: {arr.length}</h3>
      <div className="grey-card-contianer">
        {addActivity ? <AddActivity /> : <CurrentActivity />}
      </div>

      <div className="view-selection-div">
        <button onClick={() => setAddActivity(false)} className="view-button">
          Current Activities
        </button>
        <button
          onClick={() => setAddActivity(true)}
          className="view-button active-button"
        >
          Add Activities
        </button>
      </div>
    </div>
  );
}

export default App;
