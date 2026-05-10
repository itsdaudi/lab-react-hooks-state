import React from 'react'
import ProductCard from './ProductCard'  // Import the card component

const ProductList = ({ products, onAddToCart }) => {  // Match prop name
  return (
    <div>
      <h2>Available Products</h2>
      {/* Loop through products and render a ProductCard for each */}
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  )
}

export default ProductList