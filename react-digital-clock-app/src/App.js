import { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const times = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(() => {
    times();
  }, 1000);

  return (
    <div className="App">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
