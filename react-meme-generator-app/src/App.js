import MemeGenerator from "./generator/MemeGenerator";
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header name="Meme Generator"/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
