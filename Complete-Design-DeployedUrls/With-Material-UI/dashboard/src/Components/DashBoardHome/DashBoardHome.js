import axios from "axios";
import React, { useState } from "react";

function DashBoardHome() {
  // "https://test-for-python-api.vercel.app/api/users"
    const [data, setData] =useState(["Data visible soon"])
  function callApi(params) {
    axios
      .get(
        "https://pro-backend-eight.vercel.app/api/user/getAllReadingQuestions"
      )
      .then((d) => {
        console.log(d.data);
        setData(d.data)
      }).catch((e) =>{
        console.log(e)
      });
  }
  function callPythonApi(params) {
    axios
      .get(
        "https://pro-pybackend-render.onrender.com"
      )
      .then((d) => {
        console.log(d.data);
        setData(d.data)
      }).catch((e) =>{
        console.log(e)
      });
  }
  function callPythonApiLocal(params) {
    axios
      .get(
        "http://127.0.0.1:1234/api/users"
      )
      .then((d) => {
        console.log(d.data);
        setData(d.data)
      }).catch((e) =>{
        console.log(e)
      });
  }
  return (
    <div>
      <button onClick={callApi}>Click me</button>
      <button onClick={callPythonApi}>Click me for python</button>
      <button onClick={callPythonApiLocal}>Click me for python Local</button>

    </div>
  );
}

export default DashBoardHome;
