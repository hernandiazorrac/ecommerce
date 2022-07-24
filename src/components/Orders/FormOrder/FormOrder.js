import { collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../../../services/firestore"
import { CartContext } from "../../Context/CartContext";
// import { SendOrder } from '../SendOrder/SendOrder'

export const FormOrder = () => {

    const [newName, setNewName] = useState("")
    const [newPhoneNum, setNewPhoneNum] = useState(0)
    const [newEmail, setNewEmail] = useState("")
    const [newDate, setNewDate] = useState("")

    const localDate = () => {
        const dateNow = new Date();
        const date = dateNow.toLocaleDateString("es-AR");
        return date;
    }

    const { items, clearCart } = useContext(CartContext)

    const OrdersRef = collection(db, "orders")
    const orderData = {
        "buyer": {name: newName, phoneNum: newPhoneNum, email: newEmail},
        // "items": items,
        "date": localDate()
    }

    const CreateOrder = async () => {
        await addDoc(OrdersRef, orderData)
    }

    return(
        <Form className="container">
        <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="input" placeholder="Nombre" onChange={(e) => {setNewName(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="E-mail" onChange={(e) => {setNewEmail(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNum">
            <Form.Control type="input" placeholder="Número de teléfono" onChange={(e) => {setNewPhoneNum(e.target.value)}} required />
        </Form.Group>

        <Button className="btn btn-sm" variant="primary" onClick={CreateOrder}>
            Finalizar compra
        </Button>
        </Form>
    )

}

export default FormOrder;