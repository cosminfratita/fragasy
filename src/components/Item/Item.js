// import {getProducts} from '../asyncMock'
import './Item.css'
import Counter from '../Counter/Counter'

const Item = ({product}) => {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className='card-content'>
                <div className='card-tittle'>
                    <h3>{product.name}</h3>
                </div>
                <div className='card-body'>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className='btn'>
                <button>Ver detalles</button>
            </div>
            <Counter/>
            <div className='stock'>
                <h4>Stock restante: {product.stock}</h4>
            </div>
        </div>
        
    )
}

export default Item