import { Card, Card1, Image,Badge } from "antd";

function Cake(props){
    if (props.data && props.data.name && props.data.price ) {
        var cakeName = props.data.name
        var cakePrice = props.data.price
        var cakeImg = props.data.image
       
    } else {
        var cakeName = "Vanila"
        var cakePrice = "Free" 
    }
    var data ={
        image:"cake.jpg"
        };
    var tag

    return (
        <>
            
            <Card style ={{width:250,marginLeft:40}}>
            <Image preview={false} src={cakeImg} width={200}></Image>
            <p>{cakeName}</p>
            <p>{cakePrice}</p>
            {props.data.tag && <p>{props.data.tag}</p>}
        </Card>
        </>
    );
}
export default Cake