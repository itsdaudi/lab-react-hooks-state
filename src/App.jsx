import React, { useState } from 'react'  // Only need useState
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State 1: Dark mode (starts false = light mode)
  const [darkMode, setDarkMode] = useState(false)
  
  // State 2: Cart items (starts empty array)
  const [cartItems, setCartItems] = useState([])
  
  // State 3: Selected category filter (starts with 'all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample product data
  const products = [
    { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
    { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  ]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products  // Show all products
    : products.filter(product => product.category === selectedCategory)  // Show only matching category

  // Function to add a product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product])  // Create new array with existing items + new product
  }

  return (
    // Add 'dark-mode' class when darkMode is true
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>Shopping App</h1>
      
      {/* Pass darkMode and setDarkMode as props */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category filter dropdown */}
      <label>Filter by Category:</label>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}  // e.target.value gets selected option
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Pass filtered products and addToCart function */}
      {filteredProducts.length === 0 && (
        <p>No products available</p>
      )}
      {filteredProducts.length > 0 && (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
      
      {/* Pass cart items to Cart component */}
      <Cart cart={cartItems} />
    </div>
  )
}

export default App