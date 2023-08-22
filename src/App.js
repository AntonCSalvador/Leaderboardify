import logo from './logo.svg';
import leaderboardifyLogo from './leaderboardify.png'; // Import the image
import './App.scss';
import topArtistsData from './top_artists.json'; // Adjust the path as needed

function App() {
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
          <div className="note">
            <span>I did not create this design</span>
            <span>COMPLETELY BASED OFF SPOTIFY</span>
          </div>
        </div>

        {/* //start of main */}
        <div className="main">
          <div className="upperNav">
            dummy text
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
      <div className = "musicControls">
        music controls
      </div>
    </div>
  );
}

export default App;