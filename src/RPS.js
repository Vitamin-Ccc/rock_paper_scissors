import react, { useEffect, useState } from "react";
import cyndaquil from "./images/cyndaquil.png"
import totodile from "./images/totodile.png"
import chikorita from "./images/chikorita.png"
import { ImgStl } from "./ImgStl";
import { Button } from "semantic-ui-react";

const RPS = () => {
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  const [winner, setWinner] = useState("Pick a Pokemon");

  const options = ["Fire", "Water", "Grass"]

  useEffect(() => {
    win()
  }, [user])

  const win = () => {
    setComputer(options[Math.floor(Math.random()*3)])
    switch (user) {
      case options[1]:
        break
    }
  }

  const restart = () => {
    setUser("")
    setComputer("")
  }


  return(
    <div>
      <h1>Welcome to Rock, Paper, Scissors</h1>
      <h2>{winner}</h2>
      <h3>You: {JSON.stringify(user)}</h3>
      <h3>Computer: {JSON.stringify(computer)}</h3>
      <div>
        <ImgStl src={cyndaquil} onCLick = {() => setUser(options[0])}/>
        <ImgStl src={totodile} onCLick = {() => setUser(options[1])}/>
        <ImgStl src={chikorita} onCLick = {() => setUser(options[2])}/>
      </div>
      <Button onClick = {() => {restart()}}>Start Over</Button>
    </div>
  )
};

export default RPS;