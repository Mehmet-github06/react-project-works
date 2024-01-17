import "./App.css";
import { userSchema } from "./Validation";
function App() {

const createUser = async (e)=>{
  e.preventDefault()
  const formdata ={
    name:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value
  }
  console.log(formdata)
  const isVaild = await userSchema.isValid(formdata)
  console.log(isVaild)
}



  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="text" placeholder="type your name..." />
        <input type="email" placeholder="type your email..." />
        <input type="password" placeholder="type your password..." />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default App;
