import { useState } from "react";

function App() {

  const [burger_class,setBurgerClass]= useState("burger-bar unclicked")
  const [menu_class,setMenuClass]= useState("menu hidden")
  const [isMenuClicked,setIsMenuClicked]= useState("false")



  return (
    <div className="App">
  
    </div>
  );
}

export default App;
