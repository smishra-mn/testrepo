import { useContext } from "react";
import C from "./C";
import { Treasure } from "./App";

export default function B(){
  var money = useContext(Treasure)
  return(
    <>
    <h1>Amt : {money}</h1>
    
    </>
  )
}