import logo from './logo.svg';
import leaderboardifyLogo from './leaderboardifyv2.png'; // Import the image
import './App.scss';
import topArtistsData from './top_artists.json'; // Adjust the path as needed
import React, { useState, useEffect } from 'react';
import leftSkip from './leftSkip2.png';
import rightSkip from './RightSkip3.png';
import pause2 from './pause2.png';
import rightArrow from './rightArrowSpot.png'
import leftArrow from './leftArrowSpot.png'

function App() {
  const [remainingTime, setRemainingTime] = useState(24 * 60 * 60); // 24 hours in seconds and keeps the variable consistent with useState

  useEffect(() => { //updates time 
    const interval = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = "outerWrap">
      <div className="App">

        <div className = "navBar">
          <div className = "logo">
            <img src={leaderboardifyLogo} alt="Leaderboardify Logo" className="logoImg" />          </div>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li className = "active">Leaderboard</li>
            <li>Your Library</li>
          </ul>
          <div className="timer">
            {/* <li>Next Reset In:</li> */}
            <div className="timer-value">
              <li>
              {/* {Math.floor(remainingTime / 3600)}h&nbsp;
              {Math.floor((remainingTime % 3600) / 60)}m&nbsp;
              {remainingTime % 60}s */}
              </li>
            </div>
          </div>
          <div className="note">
            <span>I did not create this design</span>
            <span>COMPLETELY BASED OFF SPOTIFY</span>
          </div>
        </div>

        {/* //start of main */}
        <div className="main">
          <div className="upperNav">
            <img src={leftArrow} alt="Skip" className="directions"></img>
            <img src={rightArrow} alt="Skip" className="directions"></img>
            <span class = "welcome">Welcome! </span>
          </div>
          <div className="mainContent">
            <h1>Current Top Artists</h1>
            <div className="rectangles-container">
              {topArtistsData.map((artist, index) => (
                <div key={index} className="rectangle">
                  {index + 1}. {artist.name}&nbsp;&nbsp;
                  {artist.monthly_listeners} Monthly Listeners
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="musicControls">
        <img src={leftSkip} alt="Skip" className="controls"></img>
        <img src={pause2} alt="Skip" className="controls"></img>
        <img src={rightSkip} alt="Skip" className="controls"></img>
        {/* music controls */}
      </div>
    </div>
  );
}

export default App;
