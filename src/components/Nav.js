import React from 'react'

const Nav = () => {
    return(
        <div className = "navBar">
          <div className = "logo">
            <img src={leaderboardifyLogo} alt="Leaderboardify Logo" className="logoImg" />          </div>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
          </ul>
        </div>
    )

}

// around 15:50 is where I switch