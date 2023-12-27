import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


const Randaoprofile = () => {
    const [profileVeri, setProfileVeri] = useState(null);
  
    const profiledata = async () => {
      try {
        const { data } = await axios("https://randomuser.me/api");
        setProfileVeri(data.results[0]);
        console.log(data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      profiledata();
    }, []);
  
    // profileVeri undefined ise, bir loading durumu gösterilebilir
    if (!profileVeri) {
      return <div>Loading...</div>;
    }
  
    const { cell, email, picture: { large }, name: { first, last } } = profileVeri;
  
    return (
      <div className='profileContainer'>
        <img src={large} alt={first}/>
        <h1>{`${first} ${last}`}</h1>
        <p>{email}</p>
        <p>{cell}</p>
        <button onClick={profiledata}>Get New Profile</button>
      </div>
    );
  };
  
  export default Randaoprofile;
  