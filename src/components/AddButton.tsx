import { useContext } from "react"
import type { ProductPanelType } from "../types/ProductPanelType"
import { CartContext } from "../context/CartContext"

type AddButonProps = {
  product: ProductPanelType
}

function AddButton({product}:AddButonProps) {
  const {addProductToCart} = useContext(CartContext)
  return (
    <button type="button" className="button" onClick={()=>addProductToCart(product)}>
      Add to cart
    </button>
  )
}

export default AddButton
