import { Button, Space, Table } from "antd";
import { DeleteFilled } from "@ant-design/icons"

function Datatable({data,deleteUser1}) {
    var maxColums=0,i
    var totalKeys = []
    data.forEach((d)=>{
        var keys = Object.keys(d)
        totalKeys = [...totalKeys,...keys]
    })
    var uniqueKeys = new Set(totalKeys)

    var cols = []
    uniqueKeys.forEach((key)=>{
        cols.push({
            title: key.toUpperCase(),
            dataIndex: key,
            key: key,
            sorter: (a, b) => a.experience - b.experience,
    sortDirections: ['ascend','descend'],
        })
    }) 
    if (deleteUser1) {

        cols.push({
            title: "Action",
            render: (text,record, index) => {
                return <Button onClick={deleteUser1.bind(null,index)} style={{ backgroundColor: "red" }} type="primary"><DeleteFilled></DeleteFilled></Button>
            },
           
        })
    }   

    return (

        <Table dataSource={data} columns={cols} />
    )
}
export default Datatable