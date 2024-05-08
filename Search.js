import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Cake from "./Cake1";
import { Row } from "antd";

export default function Search(){
  var [cakes,setCakes] = useState([])
    var [query,setQuery]= useSearchParams()
    var text = query.get("q")
    useEffect(()=>{
      getCakelist()
  },[query])


  function getCakelist(){
      axios({
          url:"http://apibyauw.eu-4.evennode.com/api"+"/searchcakes?q="+text,
          method:"get"
      }).then((response)=>{      
          setCakes(response.data.data)  // updating the state
      }, (error)=>{
    
      })
  }

  return (
    <>
        <Row>
            {
                cakes?.map((each,index)=>{
                  return <Link to={"/details/" + each.cakeid}><Cake data={each}></Cake></Link>
                })
            }

        </Row>
    </>
)
}