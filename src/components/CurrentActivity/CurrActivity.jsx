import React, { useState } from "react";
import "./CurrentActivity.css";
import { arr } from "../AddActivity/AddActivity";
import { arrD } from "../AddActivity/AddActivity";

function CurrActivity(props) {
  const [addActivity, setAddActivity] = useState(false);
  const [showActivity, setShowActivity] = useState(true);

  function deleteobj() {
    setShowActivity(false);
    // console.log(arr);
    console.log(props.obj);
    console.log(arr);
    arr.splice(
      arr.findIndex((a) => a.AssignedTo === props.obj.AssignedTo),
      1
    );

    //arr.splice(arr.findIndex(props.obj),1);
    // console.log("deleted" + props)
    console.log(arr);
  }

  return (
    showActivity && (
      <div>
        <div className="grey-card-container">
          <div className="current-Activitys">
            <div className="indv-Activity">
              <p
                onClick={() => {
                  deleteobj();
                }}
                className="close-Activity"
              >
                Delete Activity
              </p>
              <p>
                Time: <span key={props.obj.Time}> {props.obj.Time} </span>
              </p>
              <p>
                By:{" "}
                <span key={props.obj.AssignedTo}> {props.obj.AssignedTo} </span>
              </p>
              <p>
                Priority:{" "}
                <span key={props.obj.priority}>{props.obj.priority} </span>
              </p>
              <p className="description-text">
                Description:{" "}
                <span key={props.obj.description}>
                  {" "}
                  {props.obj.description}
                </span>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CurrActivity;
