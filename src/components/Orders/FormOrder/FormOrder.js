import { collection, addDoc} from "firebase/firestore";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../../services/firestore"
import { CartContext } from "../../Context/CartContext";
import Loader from "../../Loader/Loader"
import './FormOrder.css'


export const FormOrder = () => {

    const [newName, setNewName] = useState("")
    const [newPhoneNum, setNewPhoneNum] = useState(0)
    const [newEmail, setNewEmail] = useState("")
    const [newOrderId, setNewOrderId] = useState("")
    const [loading, setLoading] = useState(false)

    const { items, getTotal } = useContext(CartContext)


    const localDate = () => {
        const dateNow = new Date();
        const hh = dateNow.getHours();
        const mm = dateNow.getMinutes();
        const ss = dateNow.getSeconds();

        const date = dateNow.toLocaleDateString("es-AR") +` - `+ hh +`:`+ mm +`:`+ ss;
        return date;
    }

    //prepara los datos que envía a la DB de firebase
    const orderData = {
        "buyer": {name: newName, phoneNum: newPhoneNum, email: newEmail},
        "items": items.map((i) => ({
            item: i.marca + ` ` + i.modelo,
            itemID: i.id,
            quantity: i.cant,
            price: `$` + Intl.NumberFormat("es-AR").format(i.precio),
        })),
        "total": `$` + getTotal(),
        "date": localDate()
    }

    //crea la colección "orders" dentro de la DB de firebase
    const CreateOrder = async () => {        
        setLoading(true)
        const OrdersRef = collection(db, "orders")
        //agrega el documento con los datos de la compra a "orders"
        await addDoc(OrdersRef, orderData).then((doc) => {
            setNewOrderId(doc.id)

        
            Swal.fire({
                icon: 'success',
                title: `Tu ID de compra es: ${doc.id}`,
                html: `¡Muchas gracias por tu compra! Te enviamos más información a <strong>${newEmail}</strong>`
            })
            setLoading(false)
            }
    )
}

    return(
        <form className="container formContainer">
            <div className="mb-3">
                <input type="text" className="form-control" id="inputName" placeholder="Nombre" onChange={(e) => {setNewName(e.target.value)}}/>
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => {setNewEmail(e.target.value)}}/>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="inputPhoneNum" placeholder="Número de teléfono" onChange={(e) => {setNewPhoneNum(e.target.value)}}/>
            </div>
            
            {loading && <Loader />}

            <button type="button" className="btn btn-success btn-sm mb-5" onClick={CreateOrder}>Finalizar compra</button>
        </form>
    )

    }


export default FormOrder;