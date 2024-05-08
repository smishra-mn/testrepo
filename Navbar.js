import {Button, Input, Menu} from "antd"
import { Link, useNavigate } from "react-router-dom"

function Navbar(){
  var searchText
  var navigate=useNavigate()
  function search(){
    var url = "/search?q="+searchText
    navigate(url)
  }
  function handleSearchText(e){
    searchText=e.target.value
  }
    const items = [
        {label:(
            <Link to="login"><Button type="primary">Login</Button></Link>
        )},
        {label:(<Link to="signup"><Button type="primary">Sign up</Button></Link>)},
        {label:(<Link to="forgot"><Button type="primary">Forgot Password</Button></Link>)},
        {label:(<Link to="cake"><Button type="primary">Cake Gallery</Button></Link>)},
        {label:(<Link to="showdata"><Button type="primary">Employee data</Button></Link>)},
        {label:(<Input onChange={handleSearchText}></Input>)},
        {label:(<Button type="primary" onClick={search}>Search</Button>)},
        {label:(<Link to="showcart"><Button type="primary" onClick={search}>Cart</Button></Link>)},
    ]
    return (
        <>
        <div>

            <Menu theme="dark" mode="horizontal" items={items} />
        </div>
        
        </>
    )
}

export default Navbar