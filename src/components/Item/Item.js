import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount";

function Item ({id, product, stock, price, category, img, model}) {

    return(
            <Card style={{ width: '15rem' }} className="mb-4 mx-2 border-0 rounded-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{product} - {model}</Card.Title>
                    <Card.Text>
                        <span className="d-flex justify-content-center mb-2">${price}</span>
                        <span className="text-capitalize border rounded-pill px-2 py-1">Categoría: {category}</span>
                    </Card.Text>
                    <ItemCount stock={stock} initial={1} />
                    <Button className="btn btn-warning btn-sm">Agregar al carrito</Button>
                    <Link to={`/producto/${id}`}>
                        <Button className="btn btn-warning mt-3 btn-sm">Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item;