import Home from "./Home"
import "./App.css"

function Data(prop) {
  return (
    <div className="data-card">
      <h2>Data Component</h2>
      <h3>College Name: {prop.obj}</h3>
    </div>
  )
}

function Players(data) {
  return (
    <div className="players-container">
      <h2>List of Players</h2>

      <div className="card-container">
        {
          data.obj1.map((player, index) => (
            <div className="player-card" key={index}>
              <h3>{player.name}</h3>
              <p>Team: {player.team}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function App() {
  let players_data = [
    {
      name: "Kohli",
      team: "India"
    },
    {
      name: "Dhoni",
      team: "India"
    },
    {
      name: "Sachin",
      team: "India"
    }
  ]

  return (
    <>
      <h1 className="welcome">Welcome to React</h1>
      <h2 className="subtitle">JS File</h2>
      <p className="subtitle">This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players obj1={players_data} />
    </>
  )
}

export default App