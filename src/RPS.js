import react, { useState } from "react";
import cyndaquil from "./images/cyndaquil.png"
import totodile from "./images/totodile.png"
import chikorita from "./images/chikorita.png"
import { ImgStl } from "./ImgStl";

const RPS = () => {
  const [player, setPlayer] = useState(null);
  const [comp, setComp] = useState(null);

  const options = ["Rock", "Paper", "Scissors"]


  return(
    <div>
      <h1>Welcome to Rock, Paper, Scissors</h1>
      <div>
        <ImgStl src={cyndaquil}/>
        <ImgStl src={totodile} />
        <ImgStl src={chikorita} />
      </div>
    </div>
  )
};

export default RPS;