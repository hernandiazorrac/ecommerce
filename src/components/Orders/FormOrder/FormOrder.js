import { collection, addDoc} from "firebase/firestore";
import { useContext,  useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../../services/firestore"
import { CartContext } from "../../Context/CartContext";
import Loader from "../../Loader/Loader"
import './FormOrder.css'
import '../../Buttons/SendButton/SendButton.css'


export const FormOrder = () => {

   const [newName, setNewName] = useState("")
   const [newPhoneNum, setNewPhoneNum] = useState("")
   const [newEmail, setNewEmail] = useState("")
   const [newOrderId, setNewOrderId] = useState("")
   const [loading, setLoading] = useState(false)
   
   const { items, getTotal, clearCart } = useContext(CartContext)


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
                title: `Tu ID de compra es: <u>${doc.id}</u>`,
                html: `¡Muchas gracias por tu compra! Te enviamos más información a <strong>${newEmail}</strong>`,
                confirmButtonText: `Ok`,
                confirmButtonColor: '#000'
            }).then((result) => {
                if(result.isConfirmed){
                    clearCart();
                }
            })
            setLoading(false)
            }
    )
   }

    const handleSubmit = (e) => {
      e.preventDefault();
      // if(newName.length == 0 || newPhoneNum.length == 0 || newEmail.length == 0){
      //    setValidationError(true)
      // }
      if(newName && newPhoneNum && newEmail){
         CreateOrder();
      }

    }

    return(
        <>
        {loading && <Loader />}
    
        {newOrderId === "" ?

        <section className="payment-form">
           <div className="container">
              <div className="block-heading border-top">
                 <h2>PAGO</h2>
                 <p>Llená el formulario para completar la compra</p>
              </div>
              <form onSubmit={handleSubmit}>
                 <div className="card-details">
                    <h3 className="title text-uppercase">Datos del cliente</h3>
                    <div className="row">
                       <div className="col-sm-8 col-11 mx-auto p-2">
                          <input type="text" className="form-control" placeholder="Nombre completo" onChange={(e) => {setNewName(e.target.value)}} required/>
                       </div>
                       <div className="col-sm-8 col-11 mx-auto p-2">
                           <input type="text" className="form-control" placeholder="Teléfono" onChange={(e) => {setNewPhoneNum(e.target.value)}} required />
                       </div>
                       <div className="form-group col-sm-8 col-11 mx-auto p-2">
                          <input type="email" className="form-control" placeholder="Email" onChange={(e) => {setNewEmail(e.target.value)}} required />
                       </div>
                       <div className="form-group col-sm-12">
                          
                          <button type="submit" className="btnSend">
                             <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                      <line x1="10" y1="14" x2="21" y2="3" />
                                      <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                   </svg>
                                </div>
                             </div>
                             <span>Enviar</span>
                          </button>
                       </div>
                    </div>
                 </div>
              </form>
           </div>
        </section>
        :
                <span></span>
            }        
        </>
    )

    }


export default FormOrder;