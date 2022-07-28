import { getProducts } from '../asyncMock'
import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) =>  {
    const [products, setProdcts] = useState([])
    
    useEffect(() => {
        getProducts().then(products => {
           setProdcts(products)
        })
    }, [])

    return(
        <>
        <h1>{greeting}</h1>
        {/* <ul>
            {products.map((prod) => <li key={prod.id}>{prod.name}</li>)}
        </ul> */}
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer 