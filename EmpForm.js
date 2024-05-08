import { Input } from "antd"
import { users } from "./EmpDatatable"
import { useParams } from 'react-router-dom';
function EmpForm() {
  var cols = ["name", "position", "experience"];
  var row = useParams()

  var user = users.filter((u) => {

    return Number.parseInt(u.id) == Number.parseInt(row.id) + 1
  })
  var keys = Object.keys(user[0])

  return (
    <>
      <h2>
        Employee Detail
      </h2>
      {

      }
      {
        keys.map((k) => {
          var id = row.id.toString()
          // return <h1>{row.id}</h1>

          return <Input style={{ marginTop: 15 }} placeholder={user[0][k]} value={user[0][k]}></Input>
        })
      }
    </>
  )
}
export default EmpForm