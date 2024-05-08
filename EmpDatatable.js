import { Button, Space, Table } from "antd";
import { DeleteFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

export const users = [
    {
        "id" : 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "experience": "5 years"
    },
    {
        "id" : 2,
        "name": "Jane Smith",
        "position": "Data Scientist",
        "experience": "3 years"
    },
    {
        "id" : 3,
        "name": "Alice Johnson",
        "position": "Product Manager",
        "experience": "7 years"
    },
    {
        "id" : 4,
        "name": "Bob Williams",
        "position": "UX Designer",
        "experience": "4 years"
    },
    {
        "id" : 5,
        "name": "Eve Brown",
        "position": "Business Analyst",
        "experience": "6 years"
    }
]
function EmpDatatable({ data, deleteUser1 }) {


    var totalKeys = []
    users.forEach((d) => {
        var keys = Object.keys(d)
        totalKeys = [...totalKeys, ...keys]
    })
    var uniqueKeys = new Set(totalKeys)

    var cols = []
    uniqueKeys.forEach((key) => {
        cols.push({
            title: key.toUpperCase(),
            dataIndex: key,
            key: key,
            sorter: (a, b) => a.experience - b.experience,
            sortDirections: ['ascend', 'descend'],
        })
    })
    // if (deleteUser1) {
        var navigate =useNavigate(null)
        function gotoForm(index){
            navigate("/empform/"+ index)
        }

    cols.push({
        title: "Action",
        render: (text, record, index) => {
            // onClick={deleteUser1.bind(null,index)}
            return <Button style={{ backgroundColor: "red" } } onClick={gotoForm.bind(null,index)} type="primary"><DeleteFilled></DeleteFilled></Button>
        },

    })
    // }   

    return (

        <Table dataSource={users} columns={cols} />
    )
}
export default EmpDatatable