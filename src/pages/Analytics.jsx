import '../App.css';
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const Analytics = () => {
  const [stand, setStand] = useState([]);
  const [pit, setPit] = useState([]);
  const [type, setType] = useState("stand");
  useEffect(() => {
  fetch("https://api.npoint.io/6f69d7222ca8055e26a3")
  .then((response) => response.json())
  .then((data) => setStand(data));
  fetch("https://api.npoint.io/698acdf3953b4aa061b6")
  .then((response) => response.json())
  .then((data) => setPit(data));
    }, []);
  return (
    <body>
      <Link to="/" style={{marginLeft: "15px"}}>&larr; Back</Link><br></br>
    <center>
      
      <button style={{backgroundColor: (type == "stand")?("#005B96"):("#4CAF50")}}onClick={(e)=>{
      setType("stand")
      }}>Stand Scouting</button>
      <button style={{backgroundColor: (type == "pit")?("#005B96"):("#4CAF50")}}onClick={(e)=>{
      setType("pit")
      }}>Pit Scouting</button>
      {(type == "stand")?(<div style={{overflowY:"auto", height: "70vh"}}>
      {(JSON.stringify(stand) != "[{}]")?(stand.map(({ low, mid, high, csPos, notes, cycles, csState, teamName, cycleTime, teamNumber}) => (
      <div>
        <Link to="/view" style={{textDecoration: "none", color: "#005B96"}} onClick={(e)=>{
          sessionStorage.setItem("teamView", teamNumber)
        sessionStorage.setItem("teamViewName", teamName)
        sessionStorage.setItem("teamViewType", "stand")
        }}>
          <u><h3>#{teamNumber}:  <b><span>{teamName}</span></b></h3></u>
          </Link><br></br>
        </div>
      ))):(<p>No Info</p>)}
    </div>):(<div style={{overflowY:"auto", height: "70vh"}}>
      {(JSON.stringify(pit) != "[{}]")?(pit.map(({notes, teamName, teamNumber}) => (
        <div><Link to="/view" style={{textDecoration: "none", color: "#005B96"}} onClick={(e)=>{
          sessionStorage.setItem("teamView", teamNumber)
          sessionStorage.setItem("teamViewName", teamName)
          sessionStorage.setItem("teamViewType", "pit")
        }}>
          <u><h3>#{teamNumber}:  <b><span>{teamName}</span></b></h3></u>
          </Link><br></br>
        </div>
      ))):(<p>No Info</p>)}
    </div>)}
    
      </center>
    </body>
  );
};

export default Analytics;