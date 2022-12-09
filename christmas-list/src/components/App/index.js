import React, { useState, useEffect } from "react";
import NiceList from "../NiceList";
import NaughtyList from "../NaughtyList";
import "./app.css";
import Snowfall from "react-snowfall";

/* 1. App will contain components which will allow a person to input items into a list, show the items that are in the list, 
and clear all of the items in a list. 
2. In order for the components to interact with one another, some functionality will need to be hoisted into the App component
 */

const url = "https://week11backend.onrender.com";
console.log(url);

function App() {
  const [niceList, setNiceList] = useState([]);
  const [naughtyList, setNaughtyList] = useState([]);
  const [dataResponse, setDataResponse] = useState([]);

  // Fetching shopping list data from shopping list API.
  async function getNiceList() {
    const response = await fetch(`${url}/api/list/nice`);
    const data = await response.json();
    console.log(data);
    setNiceList(data.payload);
  }

  useEffect(() => {
    getNiceList();
  }, [dataResponse]);

  async function getNaughtyList() {
    const response = await fetch(`${url}/api/list/naughty`);
    const data = await response.json();
    console.log(data);
    setNaughtyList(data.payload);
  }
  useEffect(() => {
    getNaughtyList();
  }, [dataResponse]);

  async function changeList(id) {
    const response = await fetch(`${url}/api/list/${id}`, {
      method: "PATCH",
      mode: "cors",
    });
    const data = await response.json();
    setDataResponse(data.payload);
    console.log(data.payload);
  }

  return (
    <section id="layout">
      <div>
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>

      <h1 id="title">Santa's Naughty and Nice Lists</h1>
      <div id="lists">
        <NiceList list={niceList} changeList={changeList} />
        <NaughtyList list={naughtyList} changeList={changeList} />
      </div>
    </section>
  );
}

export default App;
