import React, { useState } from "react";
import "./CurrentActivity.css";
import { arr } from "../AddActivity/AddActivity";
import CurrActivity from "./CurrActivity";

function CurrentActivity() {
  let Activitys = arr.map((obj) => {
    return <CurrActivity obj={obj} />;
  });

  return <div>{Activitys}</div>;
}

export default CurrentActivity;
