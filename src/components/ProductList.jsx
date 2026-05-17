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

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
]

export default ProductList