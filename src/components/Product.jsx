import './Product.css'
import { AddCartBtn } from './AddCartBtn'
import { Discount } from './Discount'

const Product = (props) => {
  return (
    <div className='product'>
        <Discount discount = {props.discount}/> 
        <img className='product_img' src="https://picsum.photos/seed/picsum/180" alt="product"/>
        <h2 className='product_name'>{props.name}</h2>
        <div className='product_details'>
            <p className='product_oldPrice'>{props.oldPrice}</p>
            <p className='product_Price'>{props.newPrice}</p>
        <AddCartBtn/>
        </div>
    </div>
  )
}

export {Product}