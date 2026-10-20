import { CartContext } from "./CartContext"
import useCart from "../hooks/useCart"
import type { ReactNode } from "react"

type CartProviderProps = {
    children:ReactNode
}

const CartProvider = ({children}:CartProviderProps) => {
    const {productsPanel,isLoadingPanelProducts,cartPreviewProducts,addProductToCart,deleteFromCart,countProductsCart} = useCart()
    return(
        <CartContext.Provider 
            value={{
                productsPanel,isLoadingPanelProducts,cartPreviewProducts,addProductToCart,deleteFromCart,countProductsCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider