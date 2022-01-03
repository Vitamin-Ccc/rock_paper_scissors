import React, { useEffect, useState } from "react";
import cyndaquil from "./images/cyndaquil.png"
import totodile from "./images/totodile.png"
import chikorita from "./images/chikorita.png"
import { ImgStl } from "./ImgStl";

const RPS = () => {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(null);
  const [winner, setWinner] = useState(null);

  const choices = ["Fire", "Water", "Grass"]

  useEffect(() => {
    checkWinner()
  }, [user])

  const handleClick = (value) => {
    setUser(value)
    computerRandom()
  }

  const computerRandom = () => {
    setComputer(choices[Math.floor(Math.random() * 3)])
  }

  const checkWinner = () => {
    switch (true) {

      case (computer !== null && computer === user):
        setWinner("Tie")
        break;

      case (user === choices[0]):
        if(computer === choices[1]){
          setWinner("You Lose")
        } else{
          setWinner("You Win!")
        }
        break;

      case (user === choices[1]):
        if(computer === choices[2]){
          setWinner("You Lose")
        } else{
          setWinner("You Win!")
        }
        break;

      case (user === choices[2]):
        if(computer === choices[0]){
          setWinner("You Lose")
        } else{
          setWinner("You Win!")
        }
        break;
        
      default:
        if(computer === null){
          console.log(computer)
          return setWinner("Please pick a Pokemon")
        }
        break;
    }
  }


  return (
    <div>
      <h1>Welcome to Rock, Paper, Scissors</h1>
      <h2>{winner}</h2>
      <h3>You: {user}</h3>
      <h3>Computer: {computer}</h3>
      <ImgStl src={cyndaquil} onClick={() => handleClick(choices[0])} />
      <ImgStl src={totodile} onClick={() => handleClick(choices[1])} />
      <ImgStl src={chikorita} onClick={() => handleClick(choices[2])} />
    </div>
  )
};

export default RPS;