import React, { useEffect, useState } from "react";

const Cards = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    try {
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
        .then((res) => res.json())
        .then((data) => setItems(data.meals));
        console.log(items)
    } catch (error) {
        console.log(error)
    }
  }, []);

  return (
    <div className="App">
      <h1 className="header">
        
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
          alt="british"
          className="flag-img"
        />
        <br />
        British Meals
      </h1>
      <div className="container">
        {
            items.map((item)=>(
                <div className="card" key={item.idMeal}>
                    <div className="image">
                        <img src={item.strMealThumb} alt="meal" />
                    </div>
                    <p>{item.strMeal}</p>
                </div>
            ))
        }
        <button>Click for more meals</button>
      </div>
    </div>
  );
};

export default Cards;
