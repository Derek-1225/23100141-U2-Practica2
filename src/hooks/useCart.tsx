import { useEffect,useState } from "react"
import { type ProductPanelType } from "../types/ProductPanelType"
import { type ProductPreview } from "../types/ProductPreviewType"
import { productsData } from "../data/products"

const useCart = () => {
    const [productsPanel,setProductsPanel] = useState<ProductPanelType[]>([])
    const [isLoadingPanelProducts,setIsLoadingPanelProducts] = useState<boolean>(false)
    const [cartPreviewProducts, setCartPreviewProducts]  = useState<ProductPreview[]>([])

    useEffect(()=>{
        const fetchProducts = async() =>{
            setIsLoadingPanelProducts(true)
            await new Promise((resolve)=>{
                setTimeout(resolve,3000)
            })
            setIsLoadingPanelProducts(false)
            const productsPanelData:ProductPanelType[] = productsData.map(productData => ({
                id: productData.id,
                title: productData.title,
                description:productData.description,
                price:productData.price
            }))
            setProductsPanel(productsPanelData)
        }
        void fetchProducts()
    },[])

    const addProductToCart = (product:ProductPanelType) => {
        setCartPreviewProducts(currentCart=>{
            const existingProduct = currentCart.find(item=> item.id === product.id)
            if(existingProduct){
                return currentCart.map(currentProduct=> currentProduct.id===product.id 
                    ?
                    {
                        ...currentProduct,
                        quantity: currentProduct.quantity + 1
                    }
                    :
                    currentProduct
                )
            }
            return[
                ...currentCart,
                {
                    id:product.id,
                    name: product.title,
                    quantity: 1,
                    price:product.price
                }
            ]
        })
    }

    const deleteFromCart = (product:ProductPreview)=>{
        setCartPreviewProducts(currentCart=>{
            const existingProduct = currentCart.find(item=> item.id === product.id)
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    return cartPreviewProducts.map(currentProduct =>
                        currentProduct.id === product.id
                        ? { ...currentProduct, quantity: currentProduct.quantity - 1 }
                        : currentProduct
                    )} 
                else 
                {
                    return cartPreviewProducts.filter(item => item.id !== product.id);
                }
            }
            return cartPreviewProducts
        })
    }

    return{
        productsPanel,
        isLoadingPanelProducts,
        cartPreviewProducts,
        addProductToCart,
        deleteFromCart,
        countProductsCart: cartPreviewProducts.length
    }
}

export default useCart