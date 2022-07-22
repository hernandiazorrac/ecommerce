import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import './Item.css';

function Item ({id, product, price, category, img, model}) {

    return(
            <Card style={{ width: '15rem' }} className="mb-4 mx-2 border-0 rounded-0 itemCard">
                <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <Card.Img variant="top" className="cardImg" src={img} />
                <Card.Body>
                    <Card.Title className="fs-6 fw-bold text-uppercase">{product} - {model}</Card.Title>
                    <Card.Text>
                        <span className="d-flex justify-content-center mb-3 fs-6 fw-light">${Intl.NumberFormat("es-AR").format(price)}</span>
                        <span className="text-capitalize border rounded-pill px-2 py-1 fw-light">Categoría: {category}</span>
                    </Card.Text>
                    {/* <Link to={`/producto/${id}`}>
                        <Button className="btn btn-dark btn-sm itemDetallesBoton">Ver detalles</Button>
                    </Link> */}
                </Card.Body>
                </Link>
            </Card>

    )
}

export default Item;