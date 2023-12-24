import React, { useState } from "react";
import data from "../helper/data"

const Cards = () => {
  const [searchTrem, setSearchTerm] = useState("");

  return (
    <>
      <h1>Kurtlar Vadisi Konseyi</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Konsey üyesi Giriniz..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTrem}
        />
      </div>
      <div className="dataContainer">
        {
            data
            .filter((val)=>{
                if(searchTrem == ""){
                  return val
                }else if(val.title.toLocaleLowerCase().includes(searchTrem.toLocaleLowerCase())){
                    return val
                }
            }).map((val)=>{
                return (
                    <div className="data" key={val.id}>
                       <img src={val.image} alt="" />
                       <h3>{val.title}</h3>
                       <p>{val.Description}</p>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default Cards;
