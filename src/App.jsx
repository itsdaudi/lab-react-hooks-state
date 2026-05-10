import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode]= useState(false)

  // TODO: Implement state for cart management
  const [cartItems, setCartItems]= useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory,setSelectedCategory]= useState('all')

  const products =[
    {id: 1,name: "Apple", price: '$1.00', category: "Fruits",instock: true},
    {id: 2,name: "Milk", price: '$2.50', category: "Dairy",instock:false},
    

  ]

  const filteredProducts = selectedCategory ==="all"
  selectedCategory ==="all"
  ? products
  :products.filter(product =>product.category ===selectedCategory)
const addToCart =(product) =>{
  setCartItems(prev => [...cartItems,product])
};

  return (
    <div className={darkMode ? 'dark-mode' :""}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>

        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
      produucts={filteredProducts}
      onAddToCart={addToCart}/>

      {/* TODO: Implement and render Cart component */}
    <Cart cartItems={cartItems} /> 
    </div>
  )
}

export default App
