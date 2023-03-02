import '../App.css'
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  
  var teams = "";
  fetch("/teams.json")
      .then((response) => response.json())
      .then((data) => teams = (data));
  useEffect(() => {
    
    const timer = setTimeout(() => {
      localStorage.setItem("done", "")
    }, 5000);

    // Clear the timer if the component unmounts or changes
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setTeamNum(document.getElementById("inTeam").value)
      if(document.getElementById("inTeam").value != ""){
        setTeam((teams)[document.getElementById("inTeam").value - 1]["TeamName"]);
      }
      else{
        setTeam("Scouting")
      }
    }, 100);
    

    return () => clearInterval(intervalId);
  }, []);
  useEffect(()=>{
      const intervalId = setInterval(() => {
      fetch('https://api.npoint.io/698acdf3953b4aa061b6')
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem("lastx", JSON.stringify(data)))
    }, 1000);
  }, []);
  const [team, setTeam] = useState("Scouting");
  const [teamNum, setTeamNum] = useState(0);
  return (
    <center>
    <main style={{paddingTop: "20vh"}}>
      <h1 id="team"><span>{team}</span></h1>
      <input type="number" placeholder="Team #" id="inTeam" onChange={(e)=>{
      setTeamNum(document.getElementById("inTeam").value)
      if(document.getElementById("inTeam").value != null){
        setTeam((teams)[document.getElementById("inTeam").value - 1]["TeamName"]);
      }
      else{
        setTeam("Scouting")
      }
      }}></input>
      <br></br>
      <Link to={(team != "Scouting" && team != "N/A" && team != "Pit Scouting")?("/scout"):("/")} onClick={(e)=>{
      sessionStorage.setItem("teamNumber", teamNum);
      sessionStorage.setItem("teamName", team)

      }}><button id="smatch">Start Match</button></Link><button id="pts" onClick={(e)=>{
      if(document.getElementById("pts").style.backgroundColor != "rgb(0, 91, 150)"){
        document.getElementById("txtPits").style.display = "inline";
        document.getElementById("btnPits").style.display = "inline";
        document.getElementById("pts").style.backgroundColor = "#005B96";
      }
      else if(document.getElementById("pts").style.backgroundColor == "rgb(0, 91, 150)"){
        document.getElementById("txtPits").style.display = "none";
        document.getElementById("btnPits").style.display = "none";
        document.getElementById("pts").style.backgroundColor = "#4CAF50";
      }
      
      }}>Scout Pits</button><br></br><br></br>
      <textarea id="txtPits" style={{display: "none"}} rows="15" cols="40"></textarea><br></br><button id="btnPits" style={{display: "none"}} onClick={(e)=>{
      console.log(sessionStorage.getItem("lastx"));
      if(sessionStorage.getItem("lastx") != "[{}]"){
        console.log(sessionStorage.getItem("lastx").substring(0,sessionStorage.getItem("lastx").length-1) + ', {"notes":"' + document.getElementById("txtPits").value.replace(/(?:\r\n|\r|\n)/g, '<br></br>') + '", "teamNumber":' + teamNum + ', "teamName":"' + team + '"}]')
        fetch('https://api.npoint.io/698acdf3953b4aa061b6', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: (sessionStorage.getItem("lastx").substring(0,sessionStorage.getItem("lastx").length-1) + ', {"notes":"' + document.getElementById("txtPits").value.replace(/(?:\r\n|\r|\n)/g, '<br></br>') + '", "teamNumber":' + teamNum + ', "teamName":"' + team + '"}]')
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        fetch('https://api.npoint.io/698acdf3953b4aa061b6')
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem("lastx", JSON.stringify(data)))
        document.getElementById("txtPits").style.display = "none";
        document.getElementById("btnPits").style.display = "none";
        document.getElementById("pts").style.backgroundColor = "#4CAF50";
        document.getElementById("txtPits").value = "";
      }
      else{
        console.log('NO')
        fetch('https://api.npoint.io/698acdf3953b4aa061b6', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: ('[{"notes":"' + document.getElementById("txtPits").value.replace(/(?:\r\n|\r|\n)/g, '<br></br>') + '", "teamNumber":' + teamNum + ', "teamName":"' + team + '"}]')
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        fetch('https://api.npoint.io/698acdf3953b4aa061b6')
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem("lastx", JSON.stringify(data)))
        document.getElementById("txtPits").style.display = "none";
        document.getElementById("btnPits").style.display = "none";
        document.getElementById("pts").style.backgroundColor = "#4CAF50";
        document.getElementById("txtPits").value = "";
        
      }
      
      }}>Done</button>
    </main>
      <Link to="/analytics"><button style={{position: "fixed", bottom: "10px", right: "10px", zIndex: "2", backgroundColor: "#D4AF37"}}>Analytics</button></Link>
      <Link to="/view" onClick={(e)=>{
      sessionStorage.setItem("teamView", localStorage.getItem("done").substring(1))
      sessionStorage.setItem("teamViewType", "stand")
      sessionStorage.setItem("teamViewName", (teams)[localStorage.getItem("done").substring(1).parseInt()]["TeamName"])
      }}><button style={{position: "fixed", bottom: "10px", left: "10px", backgroundColor: "#005B96", width: "auto", zIndex: "2", display: `${(localStorage.getItem("done") != null && localStorage.getItem("done").includes("#"))?("inline"):("none")}`}}>Added {localStorage.getItem("done")}</button></Link>
      <div style={{height: "70px", position: "fixed", bottom: "0px", width: "100vw", backgroundColor: "white"}}></div>
      <div style={{height: "15vh"}}></div>
      </center>
    
  )
}
export default Home;