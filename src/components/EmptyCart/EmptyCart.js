import { Link } from 'react-router-dom'
import './EmptyCart.css'

export const EmptyCart = () => {
    return(
        <>
            <img className="emptyCartImg img-fluid" alt='carrito vacío' draggable="false" src='https://res.cloudinary.com/digb4d0uf/image/upload/c_scale,w_800/v1659573559/ReactJS%20Coder/empty-cart_esspy1.webp' />
            <p className='emptyCartText text-muted'>No hay productos en el carrito.</p>
            <p className='emptyCartText'><Link to="/ecommerce">Volver a la tienda</Link></p>
       </>
    )
}