import { Button } from "antd";
import { useState } from "react";

function Meeting(){
    var users = 0;
    var [users,setUsers] = useState(0)
    function userLogin(){
        setUsers(users+1)
    }
    return(
        <>
        <Button type="primary" onClick={userLogin}>Join</Button>
        People Joined:<h1>{users}</h1>
        </>
    )

}

export default Meeting