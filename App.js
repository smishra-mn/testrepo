import logo from './logo.svg';
import './App.css';
import Home from "./Home"
// import Login from "./Login"
import Login1 from "./Login1"
import { Button, Card, Row } from "antd"
import Navbar from "./Navbar"
import { Card1 } from './Card';
import Cake from "./Cake1";
import Carousel1 from './Carousel';
import Cakelist from './Cakelist';
import UsersList from "./UsersList"
import UsersListTable from './UsersListTable';
import Signup from './Signup';
// import Signup1 from './Signup1';
import ForgotPassword from './ForgotPassword';
import Meeting from './Meeting';
import Attendance from './Attendance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpDatatable from './EmpDatatable';
import EmpForm from './EmpForm';
import Search from './Search';
import Cakedetails from "./Cakedetails"
import A from './A';
import RequestNotFound from './RequestNotFound';
import Cart from './Cart';
import React from 'react';
export var Treasure = React.createContext(10000000);
function App() {


  // return (
  //   <>
  //     <Treasure.Provider> <A money={money}> </A> </Treasure.Provider>
  //   </>
  // )
var money
  return (
    <div>
      <Treasure.Provider value={1011}> <A money={money}> </A> </Treasure.Provider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login1></Login1>}></Route>
          <Route path="/forgot" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/cake" element={<Cakelist></Cakelist>}></Route>
          <Route path="/showdata" element={<EmpDatatable></EmpDatatable>}></Route>
          <Route path="/empform/:id" element={<EmpForm></EmpForm>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
          
          <Route path='/showcart' element={<Cart></Cart>}></Route>
          <Route path='/*' element={<RequestNotFound></RequestNotFound>}></Route>
          <Route path="/details/:cakeid" element={<Cakedetails></Cakedetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
