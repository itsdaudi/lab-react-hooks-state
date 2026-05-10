import React from 'react'
import propTypes from 'prop-types'

const Cart = ({cart}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map(item => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>

    </div>
  )
}
Cart.propTypes = {
  cart: propTypes.array.isRequired,
}

export default Cart
