import { Button, Col, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Cake from "./Cake1"
import CartButton from "./CartButton"

export default function Cakedetails() {
  var params = useParams()
  var [cake, setCakedetails] = useState([])
  var [cakesInCart,setCakesInCart] = useState([])
  function setCakesInCart() {

  }
  function addCakeToCart(cake) {
    // console.log("cake added : " + JSON.stringify(cake));
    // console.log("Total cakes : " + cakesInCart.length);
    cakesInCart.push(cake)
  }
  function addToCart(){
    var requestJson = {
        name:cake.name,
        cakeid:cake.cakeid,
        price:cake.price,
        image:cake.image,
        weight:1,
    }
    axios({
        url:"http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
        method:"post",
        data:requestJson,
        headers:{
            Authorization:localStorage.token// that token which u got while logiing in 
        }
    }).then((response) => {
      console.log(JSON.stringify(response.data.data))
      setCakedetails(response.data.data)
    })
}

  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.cakeid,
      method: "get"
    }).then((response) => {
      setCakedetails(response.data.data)
    })
  }, [])
  return (
    <>
      <Row>
        <Col xs={8}>
          {cake && <img src={cake.image} alt="Cake" style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '100px', marginTop: '100px' }} />}
        </Col>
        <Col xs={10}>
          {cake && (
            <div style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '300px', marginTop: '100px' }}>
              <h1>{cake.name}</h1>
              <p><b>Rating: </b>{cake.ratings} ({cake.reviews}) Reviews</p>
              <p><b>Price: </b>{cake.price} Rs</p>
              <h2>Product description:</h2>
              <p>{cake.description}</p>
              <Button onClick={addToCart.bind(null,cake)}>Add to Cart</Button>
            </div>
          )}
        </Col>
        <CartButton cakes={cakesInCart.length}></CartButton>
      </Row>
    </>
  );
}

