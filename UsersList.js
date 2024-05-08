import { Alert, Card, Image, Row } from "antd";

function UsersList() {
    var users = [{ name: "newuser1", role: "Developer" , location:"Lucknow"},
    { name: "newuser1", role: "Manager",phone:1111111}];
    if (users.length == 0) {
        return (
            <Alert message="No user found" type="warning"></Alert>
        )
    }
    return (
        <>
        <Row>
            {users.map((each)=>{
                var keys = Object.keys(each)
                return <Card style={{ width: 200 }}>
                <Image height={100} src="user.png" />
                {
                    keys.map((key)=>{
                        return <p>{each[key]}</p>

                    })
                }
            </Card>
            })}
            
        </Row>
        </>
    )
}
export default UsersList