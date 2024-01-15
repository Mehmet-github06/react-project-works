import { useState, useEffect } from "react";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";
import Animation from "./component/Animeation";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []); // Boş bağımlılık dizisi, sadece ilk render döngüsünde çalışır.

  return (
    <div>
      <Animation/>
      <div className="App">
        {loading ? (
          <HashLoader loading={loading} color="#ff0000" size={150} />
        ) : (
          <img
            src="https://usagif.com/wp-content/uploads/gify/34-pikachu-hello-usagif.gif"
            alt="anime"
          />
        )}
      </div>
    </div>
  );
}

export default App;
