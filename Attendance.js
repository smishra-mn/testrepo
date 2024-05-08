import { Button, Input } from "antd"
import { useState } from "react";
import Datatable from "./Datatable";

function Attendance(){
    var user={}
    var [people,setPeople] = useState([{
        name:"Shobhit"
    }]);
    function updateUser(event){
        user.name=event.target.value       
    }
    function markAttendance(){
        people.push(user)
        people=[...people]
        setPeople(people)
    }
    return(
        <>
       <label>Username</label><input type="text" onChange={updateUser}/>
       <Button type="primary" onClick={markAttendance}>Mark</Button>
        <Datatable data={people}></Datatable>
        </>
    )
}
export default Attendance;