import React from "react";
import "./Meme.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomtext] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [allMemeImg, setAllMemeImg] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios("https://api.imgflip.com/get_memes");

      setAllMemeImg(data.data.memes);
      console.log(allMemeImg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    randomPhoto();
  }, []);

  const hadleTopChange = (e) => {
    setTopText(e);
  };
  const hadleBottomChange = (e) => {
    setBottomtext(e);
  };
  const randomPhoto = () => {
    const randomNum = Math.floor(Math.random() * allMemeImg.length);
    setRandomImg(allMemeImg[randomNum]);
  };

  return (
    <div className="meme-from">
      <div className="inputlar">
        <input
          type="text"
          className="input"
          name="topText"
          placeholder="Enter top Text"
          value={topText}
          onChange={(e) => hadleTopChange(e.target.value)}
        />
        <input
          type="text"
          className="input"
          name="topText"
          placeholder="Enter bottom Text"
          value={bottomText}
          onChange={(e) => hadleBottomChange(e.target.value)}
        />
        <button onClick={()=> randomPhoto()}>
          <div>
            <span>
              <p>Generator Meme</p> 😆<p></p>
            </span>
          </div>
          <div>
            <span>
              <p>Thanks</p> 😎 <p></p>
            </span>
          </div>
        </button>
        <div className="image">
          <img src={randomImg?.url} />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
