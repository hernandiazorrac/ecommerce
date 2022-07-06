import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount";
import { ItemDetail } from "./ItemDetail";

function Item(props){
    
    return(
                <Card style={{ width: '15rem' }} className="mb-4 mx-2 border-0 rounded-0">
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.product} - {props.model}</Card.Title>
                        <Card.Text>
                        <span className="d-flex justify-content-center mb-2">${props.price}</span>
                        <span className="text-capitalize border rounded-pill px-2 py-1">Categoría: {props.type}</span>
                        </Card.Text>
                        <ItemCount stock={props.stock} initial={1} />
                        <Button className="btn btn-warning btn-sm">Agregar al carrito</Button>
                        <Link to="/producto/:productoId">
                        <Button className="btn btn-warning mt-3 btn-sm">Ver más</Button>
                        </Link>
                    </Card.Body>
                </Card>
    )
}

export default Item;