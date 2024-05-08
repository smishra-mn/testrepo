import { Alert, Card, Image, Row } from "antd";
import Datatable from "./Datatable";

function UsersListTable() {
    var users = [{ name: "newuser1", role: "Developer" , location:"Lucknow"},
    { name: "newuser2", role: "Developer",location:"Hyderabad",phone:9988998899},
    { name: "newuser3", role: "Manager",location:"Mumbai"}];
    return <Datatable data={users}></Datatable>
}
export default UsersListTable