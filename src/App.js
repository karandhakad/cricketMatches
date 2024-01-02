import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

function App() {
  const [cricketData, setCricketData] = useState([])
  const [matchType, setMatchType] = useState("odi")


  useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/currentMatches?apikey=49917bab-f51e-4d67-8ad3-00896121a40b&offset=0"
        ).then((info)=>{
          const singleType = info.data.data.filter((type)=>{
            return type.matchType == matchType;
          })
          if(matchType != "all")
          {
            setCricketData(singleType)
          }
          else
          {
            setCricketData(info.data.data)
          }
        }).catch((err)=>{
          console.log(err);
        })
  },[matchType]);


  

  return (
    <div className="App">
      <Navbar />
      <h1 className='text-center text-white bg-success'> {matchType.toLocaleUpperCase()} </h1>
      <label className='text-white ms-3' for="mType">Match Type</label> <br/>
        <select className='ms-3' name="mType" id="mType" value={matchType} onChange={(e)=>setMatchType(e.target.value)}>
          <option value="odi">ODI</option>
          <option value="test">TEST</option>
          <option value="t20">T20</option>
          <option value="all">ALL</option>
        </select>
      <div id="box">

        {
          cricketData.map((cricks,index,arr)=>{
             return (
             <Cards key={index} name={cricks.name} date={cricks.date} matchType={cricks.matchType}
              status={cricks.status} teamInfo={cricks.teamInfo} vanue={cricks.venue}  
              score={cricks.score}
              />
              )
            })
        }
          
      </div>
    </div>
  );
}

export default App;
