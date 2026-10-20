import { createContext } from "react"
import type { ProductPanelType } from "../types/ProductPanelType"
import type { ProductPreview } from "../types/ProductPreviewType"

type CartContextValue={
    productsPanel:ProductPanelType[],
    isLoadingPanelProducts:boolean,
    cartPreviewProducts: ProductPreview[],
    addProductToCart: (product:ProductPanelType)=>void
    deleteFromCart : (product:ProductPreview)=>void
    countProductsCart: number
}

export const CartContext = createContext<CartContextValue>({
    productsPanel: [],
    isLoadingPanelProducts:false,
    cartPreviewProducts: [],
    countProductsCart: 0,
    addProductToCart: ()=>{},
    deleteFromCart:()=>{}
})