import { CartContext } from '../context/CartContext'
import AddButton from './AddButton'
import { useContext } from 'react'

function Panel() {
  const {productsPanel,isLoadingPanelProducts} = useContext(CartContext)
  return (
    <>
      {isLoadingPanelProducts ? (<h1>Loading.........</h1>) 
      : 
        productsPanel.map(product =>(
          <article className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <AddButton product={product} />
          </article>
        ))
      }
    </>

  )
}

export default Panel
