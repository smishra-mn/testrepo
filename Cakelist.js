import { Button, Row } from "antd";
import { Spin } from 'antd';
import Cake from "./Cake1";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cakelist() {
    var [cakes,setCakes] = useState()
    var [loading, setLoading] = useState(true);
    useEffect(()=>{
        getCakelist()
    },[])


    function getCakelist(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"get"
        }).then((response)=>{
            setCakes(response.data.data)  // updating the state
            setLoading(false);
        }, (error)=>{
          setLoading(false);
        })
    }

    
  
    return (
        
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Spin spinning={loading} size="large">
                <Row>
                    {cakes?.map((cake) => (
                        <Link to={"/details/" + cake.cakeid}><Cake data={cake} /></Link>
                    ))}
                </Row>
            </Spin>
        </div>
        
    )
}

export default Cakelist 