import Faq from "./componenets/Faq";
import "./App.css";
import { useState } from "react";
import Example from "./componenets/Example";

function App() {
  const [active, setActive] = useState("");

  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {arr.map((item) => {
        return (
          <Faq
            key={item}
            title={`Questions ${item}`}
            active={active}
            setActive={setActive}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default App;
