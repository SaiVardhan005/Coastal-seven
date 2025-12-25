import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({})
  const [orders, setOrders] = useState([])

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: {
        ...product,
        qty: (prev[product.name]?.qty || 0) + 1,
      },
    }))
  }

  // UPDATE QTY
  const updateQty = (name, delta) => {
    setCart((prev) => {
      const item = prev[name]
      if (!item) return prev

      const newQty = item.qty + delta
      if (newQty <= 0) {
        const copy = { ...prev }
        delete copy[name]
        return copy
      }

      return { ...prev, [name]: { ...item, qty: newQty } }
    })
  }

  // CLEAR CART
  const clearCart = () => setCart({})

  // PLACE ORDER
  const placeOrder = () => {
    const items = Object.values(cart)
    if (items.length === 0) return

    setOrders((prev) => [...prev, { items }])
    clearCart()
  }

  // ❌❌ REMOVE ORDER (THIS FIXES YOUR ISSUE)
  const cancelOrder = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        updateQty,
        clearCart,
        placeOrder,
        cancelOrder, // ✅ exposed
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
