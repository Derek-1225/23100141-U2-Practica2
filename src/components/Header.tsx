import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartPreview from './CartPreview'
import Page from './Page'

function Header() {
  const {countProductsCart,cartPreviewProducts} = useContext(CartContext)
  return (
    <>
      <header className="navbar">
        <p className="navbar__brand">Shop</p>
        <div className="navbar__actions">
          <p className="navbar__count">Items: {
            cartPreviewProducts.reduce((acc,product) => acc+product.quantity,0)
          }</p>
          {
            cartPreviewProducts.length <= 0 ? "" : <CartPreview />
          }
        </div>
      </header>
      <Page />
    </>
  )
}
//Pendiente boton para eliminar
//Actulizar conteo de items Realizado para agregar

export default Header
