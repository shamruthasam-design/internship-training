
/*import Home from "./Home";
import "./App.css";
import Counter from "./Hooks/UseState/Counter";

function Data(prop) {
  return (
    <div className="data-card">
      <h2>Data Component</h2>
      <h3>College Name: {prop.obj}</h3>
    </div>
  );
}

function Players(data) {
  return (
    <div className="players-container">
      <h2>List of Players</h2>

      <div className="card-container">
        {data.obj1.map((player, index) => (
          <div className="player-card" key={index}>
            <h3>{player.name}</h3>
            <p>Team: {player.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  let players_data = [
    {
      name: "Kohli",
      team: "India",
    },
    {
      name: "Dhoni",
      team: "India",
    },
    {
      name: "Sachin",
      team: "India",
    },
  ];

  return (
    <>
      <h1 className="welcome">Welcome to React</h1>
      <h2 className="subtitle">JS File</h2>
      <p className="subtitle">This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players obj1={players_data} />

      <Counter />
    </>
  );
}

export default App;
*/



/*import React from "react";
import Counter from "./Hooks/UseState/Counter";
import Score from "./Hooks/UseState/Score";
import "./App.css";

function App() {
  return (
    <>
      <h1>App Component</h1>
      <h2>Welcome Home</h2>
      <p>This is a simple React application.</p>
      <p>Welcome to React Project</p>

      <Counter />

      <Score />
    </>
  );
}

export default App;
*/

/*import React from "react";
import Electronics from "./Components/Electronics";
import Mobiles from "./Components/Mobiles";
import Flipkart from "./Components/Flipkart";

function App() {
  return (
    <>
      <center>
        <h1> Welcome to App Component</h1>
        <h3>Welcome Home</h3>
      <hr></hr>
      </center>
    
      <Flipkart name="Samsung" />
    </>
  );
}

export default App;
*/

import React from "react";
import Flipkart from "./Components/Flipkart";
import { MobileContext } from "./Components/MobileContext";
import User from "./Hooks/UserEffect/User";

function App() {

  const mobileData = {
    name: "Samsung",
    price: 25000,
    color: "Black"
  };

  return (
    <>
    <center>
      <h1>Welcome to App Component</h1>
    </center>
      

      <MobileContext.Provider value={mobileData}>
      <Flipkart />
      </MobileContext.Provider>
      <User />

    </>
  );
}

export default App;
