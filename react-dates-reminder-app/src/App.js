import "./App.css";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [holidays, setHolidays] = useState(data);
  console.log(data);

// const deletes = (id) => {
// const silici = holidays.filter((item)=>item.id !==id)
// setHolidays(silici)
// }

  return (
    <main>
      <section className="container">
        <h3>National Holidays Dates</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt="img" />
              <div>
                <p>{holiday.title}</p>
                <p>
                  {holiday.date} 
                </p>
                {/* <button onClick={()=>deletes(holiday.id)}>X</button> */}
              </div>
            </div>
          );
        })}
        <button onClick={() => setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
