import '../App.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import cube from './image/cube.png';
import cone from './image/cone.png';
import chargingStation from './image/chargingStation.png';
const Scout = () => {
  let story = "";
  const [time, setTime] = useState(120);
  const [auton, setAuton] = useState("#D4AF37");
  useEffect(() => {
    story = ("Auton started<br></br>");
    fetch('https://api.npoint.io/6f69d7222ca8055e26a3')
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem("last", JSON.stringify(data)))
    const intervalId = setInterval(() => {
      setTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear interval when component unmounts or when seconds reaches 0
    if (time === 0) {
      clearInterval(intervalId);
      
    }
    if(time == 105){
      setAuton("#4CAF50");
      story += ( "Auton ended<br></br>");
    }
    if(time == 30){
      story += ( "Endgame started<br></br>");
    }
    if(time == 5){
      setAuton("#DD5D87")
    }
    if(time == 0){
      story += ( "Game ends with ");
    }
    return () => clearInterval(intervalId);
  }, [time]);
  
  function chngclr(id){
    if(document.getElementById(id).style.backgroundColor != "rgb(76, 175, 80)"){
      document.getElementById(id).style.backgroundColor = "#4CAF50";
      sessionStorage.setItem(id, time)
      
    }
    else{
      document.getElementById(id).style.backgroundColor = "#fff";
      sessionStorage.setItem(id, -1)
    }
    if(id.includes("a") && document.getElementById(id.substring(0,4)+"b").style.backgroundColor == "rgb(76, 175, 80)"){
      document.getElementById(id).style.backgroundColor = "#4CAF50";
      sessionStorage.setItem(id, time)
      document.getElementById(id.substring(0,4)+"b").style.backgroundColor = "#fff";
      sessionStorage.setItem(id.substring(0,4)+"b", -1)
    }
    if(id.includes("b") && document.getElementById(id.substring(0,4)+"a").style.backgroundColor == "rgb(76, 175, 80)"){
      document.getElementById(id).style.backgroundColor = "#4CAF50";
      sessionStorage.setItem(id, time)
      document.getElementById(id.substring(0,4)+"a").style.backgroundColor = "#fff";
      sessionStorage.setItem(id.substring(0,4)+"a", -1)
    }
  }
  function chngchs(id){
    if(id == "dock"){
      document.getElementById("eng").style.backgroundColor = "#4CAF50";
      document.getElementById("dock").style.backgroundColor = "#005B96";
      document.getElementById("noc").style.backgroundColor = "#4CAF50";
      sessionStorage.setItem("csState", "docked");
    }
    else if(id == "eng"){
      document.getElementById("dock").style.backgroundColor = "#4CAF50";
      document.getElementById("eng").style.backgroundColor = "#005B96";
      document.getElementById("noc").style.backgroundColor = "#4CAF50";
      sessionStorage.setItem("csState", "engaged");
    }
    else if(id == "left"){
      document.getElementById("right").style.backgroundColor = "#4CAF50";
      document.getElementById("center").style.backgroundColor = "#4CAF50";
      document.getElementById("left").style.backgroundColor = "#005B96";
      document.getElementById("noc").style.backgroundColor = "#4CAF50";
      sessionStorage.setItem("csPos", "left");
    }
    else if(id == "right"){
      document.getElementById("left").style.backgroundColor = "#4CAF50";
      document.getElementById("center").style.backgroundColor = "#4CAF50";
      document.getElementById("right").style.backgroundColor = "#005B96";
      document.getElementById("noc").style.backgroundColor = "#4CAF50";
      sessionStorage.setItem("csPos", "right");
    }
    else if(id == "center"){
      document.getElementById("left").style.backgroundColor = "#4CAF50";
      document.getElementById("right").style.backgroundColor = "#4CAF50";
      document.getElementById("center").style.backgroundColor = "#005B96";
      document.getElementById("noc").style.backgroundColor = "#4CAF50";
      sessionStorage.setItem("csPos", "center");
    }
    if(id == "noc"){
      document.getElementById("left").style.backgroundColor = "#4CAF50";
      document.getElementById("right").style.backgroundColor = "#4CAF50";
      document.getElementById("center").style.backgroundColor = "#4CAF50";
      document.getElementById("eng").style.backgroundColor = "#4CAF50";
      document.getElementById("dock").style.backgroundColor = "#4CAF50";
      document.getElementById("noc").style.backgroundColor = "#005B96";
      sessionStorage.setItem("csPos", "none");
      sessionStorage.setItem("csState", "none");
    }
  }
  return (
    <body style={{overflowY: "hidden", overflowX: "hidden"}}>
      {(time != 0)?(<div><div className="grid-container">
      <div className="grid-item" id="gi1" onClick={(e)=>{chngclr("gi1");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi2" onClick={(e)=>{chngclr("gi2");story += ( "Scored a cube in High<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi3" onClick={(e)=>{chngclr("gi3");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>  
      <div className="grid-item" id="gi4" onClick={(e)=>{chngclr("gi4");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi5" onClick={(e)=>{chngclr("gi5");story += ( "Scored a cube in High<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi6" onClick={(e)=>{chngclr("gi6");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>  
      <div className="grid-item" id="gi7" onClick={(e)=>{chngclr("gi7");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi8" onClick={(e)=>{chngclr("gi8");story += ( "Scored a cube in High<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi9" onClick={(e)=>{chngclr("gi9");story += ( "Scored a cone in High<br></br>");}}><img src={cone} width="100%"/></div>  
      <div className="grid-item" id="gi10" onClick={(e)=>{chngclr("gi10");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi11" onClick={(e)=>{chngclr("gi11");story += ( "Scored a cube in Mid<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi12" onClick={(e)=>{chngclr("gi12");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div>  
      <div className="grid-item" id="gi13" onClick={(e)=>{chngclr("gi13");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi14" onClick={(e)=>{chngclr("gi14");story += ( "Scored a cube in Mid<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi15" onClick={(e)=>{chngclr("gi15");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div>  
      <div className="grid-item" id="gi16" onClick={(e)=>{chngclr("gi16");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div>
      <div className="grid-item" id="gi17" onClick={(e)=>{chngclr("gi17");story += ( "Scored a cube in Mid<br></br>");}}><img src={cube} width="100%"/></div>
      <div className="grid-item" id="gi18" onClick={(e)=>{chngclr("gi18");story += ( "Scored a cone in Mid<br></br>");}}><img src={cone} width="100%"/></div> 
      <div><div className="grid-item" id="gi19a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi19a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi19b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi19b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi20a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi20a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi20b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi20b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi21a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi21a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi21b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi21b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi22a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi22a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi22b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi22b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi23a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi23a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi23b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{
      chngclr("gi23b");
      story += ( "Scored a cone in Low<br></br>");
    }}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi24a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi24a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi24b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{
      chngclr("gi24b");
      story += ( "Scored a cone in Low<br></br>");
    }}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi25a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi25a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi25b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi25b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi26a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi26a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi26b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi26b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
      <div><div className="grid-item" id="gi27a" style={{width: "45%", height: "45%", display: "flex"}} onClick={(e)=>{chngclr("gi27a");story += ( "Scored a cube in Low<br></br>");}}><img src={cube} width="100%"/></div><div className="grid-item" id="gi27b" style={{width: "45%", height: "45%", display: "flex", marginLeft: "45%"}} onClick={(e)=>{chngclr("gi27b");story += ( "Scored a cone in Low<br></br>");}}><img src={cone} width="100%"/></div></div>
</div>
      <br></br>
      <Link to="/" onClick={(e)=>{
      sessionStorage.clear();
      }}><button style={{backgroundColor: "#F44336"}}>Back</button></Link>
      <button style={{backgroundColor: auton, marginLeft: "2vw"}}>Finishing in {time}</button>
      </div>
        ):(<div><div  style={{float: "left", width: "50%"}}><center><h1>Charging Station</h1><br></br><button id="dock" onClick={(e)=>{chngchs("dock")}}>Docked</button><button id="eng" onClick={(e)=>{chngchs("eng")}}>Engaged</button><br></br><button id="left" onClick={(e)=>{chngchs("left")}}>Left</button><button id="center" onClick={(e)=>{chngchs("center")}}>Center</button><button id="right" onClick={(e)=>{chngchs("right")}}>Right</button><br></br><button id="noc" onClick={(e)=>{chngchs("noc")}}>No Climb</button><br></br></center></div><div style={{float: "left", width: "50%"}}><center><h1>Notes</h1><textarea rows="10" cols="20" id="txtNotes"></textarea><br></br><Link to="/" onClick={(e)=>{
      let pieces = "";
      let key = "";
      key = "gi1";
      let high = 0;
      let mid = 0;
      let low = 0;
      let cycles = 0;
      let cycleTime = 0;
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi2";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi3";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi4";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi5";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi6";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi7";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi8";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi9";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        high++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi10";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi11";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi12";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi13";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi14";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi15";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi16";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi17";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi18";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        mid++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi19a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi19b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi20a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi20b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi21a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi21b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi22a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi22b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi23a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi23b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi24a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi24b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi25a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi25b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi26a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi26b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi27a";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      key = "gi27b";
      if(sessionStorage.getItem(key) != -1 && sessionStorage.getItem(key) != null){
          pieces += `"${key.toString()}":${120-parseInt(sessionStorage.getItem(key))}, `;
        cycles++;
        low++;
        }
      else{
        pieces += `"${key.toString()}":-1, `;
      }
      cycleTime = parseFloat(120/cycles).toFixed(2);
      story += ( " bot " + sessionStorage.getItem("csState") + " on the " + sessionStorage.getItem("csPos") + " side of the charging station");
      if(sessionStorage.getItem("last") == "[{}]"){
        console.log('[{"teamNumber": ' + sessionStorage.getItem("teamNumber") + ', "teamName": "' + sessionStorage.getItem("teamName") + '", ' + pieces + '"csPos":"' + sessionStorage.getItem("csPos") + '", "csState":"' + sessionStorage.getItem("csState") + '", "notes":"' + document.getElementById('txtNotes').value + '", "high":"' + parseInt(high) + '", "mid":"' + parseInt(mid) + '", "low":"' + parseInt(low) + '", "cycles":"' + parseInt(cycles) + '", "cycleTime":"' + parseFloat(cycleTime) + '", "story":"' + story + '"}]')
      fetch('https://api.npoint.io/6f69d7222ca8055e26a3', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: ('[{"teamNumber": ' + sessionStorage.getItem("teamNumber") + ', "teamName": "' + sessionStorage.getItem("teamName") + '", ' + pieces + '"csPos":"' + sessionStorage.getItem("csPos") + '", "csState":"' + sessionStorage.getItem("csState") + '", "notes":"' + document.getElementById('txtNotes').value + '", "high":"' + parseInt(high) + '", "mid":"' + parseInt(mid) + '", "low":"' + parseInt(low) + '", "cycles":"' + parseInt(cycles) + '", "cycleTime":"' + parseFloat(cycleTime) + '", "story":"' + story + '"}]')
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
      localStorage.setItem("done", "#" + sessionStorage.getItem("teamNumber"));
      sessionStorage.clear();
      }
      else{
        console.log(sessionStorage.getItem("last").substring(0,sessionStorage.getItem("last").length-1) + ', {"teamNumber": ' + sessionStorage.getItem("teamNumber") + ', "teamName": "' + sessionStorage.getItem("teamName") + '", ' + pieces + '"csPos":"' + sessionStorage.getItem("csPos") + '", "csState":"' + sessionStorage.getItem("csState") + '", "notes":"' + document.getElementById('txtNotes').value + '", "high":"' + parseInt(high) + '", "mid":"' + parseInt(mid) + '", "low":"' + parseInt(low) + '", "cycles":"' + parseInt(cycles) + '", "cycleTime":"' + parseFloat(cycleTime) + '", "story":"' + story + '"}]')
      fetch('https://api.npoint.io/6f69d7222ca8055e26a3', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: (sessionStorage.getItem("last").substring(0,sessionStorage.getItem("last").length-1) + ', {"teamNumber": ' + sessionStorage.getItem("teamNumber") + ', "teamName": "' + sessionStorage.getItem("teamName") + '", ' + pieces + '"csPos":"' + sessionStorage.getItem("csPos") + '", "csState":"' + sessionStorage.getItem("csState") + '", "notes":"' + document.getElementById('txtNotes').value + '", "high":"' + parseInt(high) + '", "mid":"' + parseInt(mid) + '", "low":"' + parseInt(low) + '", "cycles":"' + parseInt(cycles) + '", "cycleTime":"' + parseFloat(cycleTime) + '", "story":"' + story + '"}]')
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
      localStorage.setItem("done", "#" + sessionStorage.getItem("teamNumber"));
      sessionStorage.clear();
      }
      
        }}><button>Done</button></Link></center></div></div>)}
    
    </body>
  );
};

export default Scout;