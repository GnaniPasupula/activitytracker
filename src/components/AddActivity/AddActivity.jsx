import React, { useState } from "react";
import "./AddActivity.css";
export let arr = [];
export let arrD = [];

function AddActivity() {
  let [description, setDescription] = useState("");
  let [priority, setPriority] = useState("");
  let [AssignedTo, setAssignedTo] = useState("");
  let [flag, setFlag] = useState(false);
  let [fl, setfl] = useState(false);
  let [Time, setTime] = useState("");

  const handleSubmit = (event) => {
    if (description === "" || priority === "" || AssignedTo === "") {
      console.log("enter something");
      setfl(true);
      setTimeout(() => {
        setfl(false);
      }, 1000);
      event.preventDefault();
      return;
    }

    let newDate = new Date();
    let date = newDate.getDate();
    const time = newDate.getTime() + 19800000;
    const timeSeconds = Math.floor(time / 1000) % 60;
    const timeMinutes = Math.floor(time / (1000 * 60)) % 60;
    const timeHours = Math.floor(time / (1000 * 60 * 60)) % 24;

    const timeString = `${timeHours}:${timeMinutes}:${timeSeconds}`;

    setTime(timeString);

    let obj = {
      description: description,
      priority: priority,
      AssignedTo: AssignedTo,
      Time: Time,
      date: date,
    };

    event.preventDefault();

    arr.push(obj);

    console.log(
      "Data and Time is" +
        date +
        " " +
        timeHours +
        ":" +
        timeMinutes +
        ":" +
        timeSeconds
    );
    console.log("handleSubmit ran");

    console.log(arr);
    setFlag(true);
    //setArrlen(arr.length);

    console.log(description);
    console.log(priority);
    console.log(AssignedTo);

    setTimeout(() => {
      setFlag(false);
    }, 2000);

    setDescription("");
    setPriority("");
    setAssignedTo("");
  };

  const [AddActivity, setAddActivity] = useState(true);

  return (
    <div className="add-Activity">
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            placeholder="Describe the Activity"
            value={description}
          />
        </label>
        <label>
          {" "}
          By :{}
          <input
            onChange={(event) => setAssignedTo(event.target.value)}
            type="text"
            placeholder="Gnani"
            value={AssignedTo}
          />
        </label>
        <label>
          {" "}
          Priority :
          <input
            onChange={(event) => setPriority(event.target.value)}
            type="text"
            placeholder="Priority"
            value={priority}
          />
          {}
        </label>
        <button type="submit" onClick={() => handleSubmit()}>
          ADD Activity
        </button>
      </form>
      {flag && <p>Activity added! on {Time}</p>}
      {fl && (
        <p style={{ color: "red" }}>
          please enter the data before submitting!!
        </p>
      )}
    </div>
  );
}
export default AddActivity;
