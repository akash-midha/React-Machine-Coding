import React from 'react'

const ProductCard = ({ image, title, price }) => {
    return (
        <div className='product-card'>
            <img className='product-image' src={image} alt={title} />
            <p className='product-title'>{title}</p>
            <p className='product-price'>${price}</p>
        </div>
    )
}

export default ProductCard