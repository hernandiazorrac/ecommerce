import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function Item ({id, product, price, category, img, model}) {

    return(
            <Card style={{ width: '15rem' }} className="mb-4 mx-2 border-0 rounded-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{product} - {model}</Card.Title>
                    <Card.Text>
                        <span className="d-flex justify-content-center mb-2">${price}</span>
                        <span className="text-capitalize border rounded-pill px-2 py-1">Categoría: {category}</span>
                    </Card.Text>
                    <Link to={`/producto/${id}`}>
                        <Button className="btn btn-warning btn-sm">Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item;