import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import './Item.css';

function Item ({id, product, price, img, model, description}) {

    return(
            <Card style={{ width: '15rem' }} className="mb-4 mx-2 border-0 rounded-0 itemCard">
                <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <Card.Img variant="top" className="cardImg" src={img} draggable="false" />
                <Card.Body>
                    <Card.Title className="fw-bold text-uppercase productTitle">{product} - {model}</Card.Title>
                    <Card.Text className="cardText">
                        <span className="d-flex justify-content-center pb-2 fw-light productPrice">${Intl.NumberFormat("es-AR").format(price)}</span>
                        <span className="px-2 fw-light text-muted descriptionText"><small>{description}</small></span>
                    </Card.Text>
                </Card.Body>
                </Link>
            </Card>

    )
}

export default Item;