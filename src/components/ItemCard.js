import { Card, Button } from "react-bootstrap";

function ItemCard(props){
    return(
                <div className="container-lg">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{props.product} - {props.model}</Card.Title>
                        <Card.Text>
                        ${props.price} <br />
                        <span className="text-capitalize">Categoría: {props.type}</span>
                        </Card.Text>
                    <Button variant="warning">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default ItemCard;