import { useState } from "react";
import "./App.css";
import Animation from "./component/Animeation";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";


function App() {
  let [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <div >
      <Animation />
      <div className="App">
      {loading ? (
        <HashLoader
          loading={loading}
          color="#ff0000"
          size={150}
          aria-label="Loading Spinner"
        />
      ) : (
        <img src="" alt="anime" />
      )}
      </div>
  
    </div>
  );
}

export default App;
