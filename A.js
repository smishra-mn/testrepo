import { useContext } from "react";
import { Treasure } from "./App";

export default function A(){
  var money = useContext(Treasure)
  return(
    <>
    <h1>Amt : {money}</h1>
    
    </>
  )
}