import '../App.css';
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const View = () => {
  const [pit, setPit] = useState([]);
  const [stand, setStand] = useState([]);
  const team = sessionStorage.getItem("teamView");
  const teamName = sessionStorage.getItem("teamViewName");
  const type = sessionStorage.getItem("teamViewType");
  useEffect(() => {
  fetch("https://api.npoint.io/6f69d7222ca8055e26a3")
  .then((response) => response.json())
  .then((data) => setStand(data));
  fetch("https://api.npoint.io/698acdf3953b4aa061b6")
  .then((response) => response.json())
  .then((data) => setPit(data));
}, []);
  let count = 0;
  return (
    <body>
      <Link to="/analytics" style={{marginLeft: "15px"}}>&larr; Back</Link><br></br>
      <h1>#{team}:  {teamName}</h1>
    {(type == "stand")?(<div>{(stand).map(({g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19a, g19b, g20a, g20b, g21a, g21b, g22a, g22b, g23a, g23b, g24a, g24b, g25a , g25b, g26a, g26b, g27a, g27b, low, mid, high, csPos, notes, cycles, csState, teamName, cycleTime, teamNumber, story}) => {
      if(team == teamNumber){
        count++;
        return(
      <div>
        <h3>Dataset {count}:</h3>
        {high} high placements<br></br>{mid} mid placements<br></br>{low} low placements<br></br>{cycles} cycles<br></br>{cycleTime} seconds per cycle on average<br></br>{csState.substring(0,1).toUpperCase() + csState.substring(1)} on charging station in {csPos} position<br></br>Notes: "{notes}"<br></br>
      </div>
        );
      }
    })}
      {(pit).map(({teamName, teamNumber, notes}) => {
      if(team == teamNumber){
        return(
      <div>
        <h3>Pit Scouting:</h3>
            Notes: <br></br>{notes.replace('<br></br>', "   ---   ")}<br></br>
      </div>
        );
      }
    })}<br></br></div>):(<div>{(pit).map(({teamName, teamNumber, notes}) => {
      if(team == teamNumber){
        return(
      <div>
        <h3>Pit Scouting:</h3>
            Notes: <br></br>{notes.replace('<br></br>', "   ---   ")}<br></br>
      </div>
        );
      }
    })}</div>)}
    </body>
  );
};

export default View;