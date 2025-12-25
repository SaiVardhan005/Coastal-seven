import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart({ onBuy, onBackHome }) {
  const { cart, updateQty, clearCart } = useContext(CartContext)
  const items = Object.values(cart)

  if (items.length === 0) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        <p>🛒 Cart is empty</p>
        <button onClick={onBackHome} style={secondaryBtn}>
          ← Go back to Home
        </button>
      </div>
    )
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>Your Cart</h2>

      {items.map((item) => (
        <div key={item.name} style={row}>
          <div>
            <strong>{item.name}</strong>
            <p>₹{item.price} × {item.qty}</p>
          </div>

          <div style={qtyBox}>
            <button onClick={() => updateQty(item.name, -1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.name, 1)}>+</button>
          </div>

          <strong>₹{item.price * item.qty}</strong>
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <button onClick={onBuy} style={buyBtn}>
          Buy Now
        </button>
        <button onClick={clearCart} style={clearBtn}>
          Clear Cart
        </button>
        <button onClick={onBackHome} style={secondaryBtn}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #374151",
  padding: "12px 0",
}

const qtyBox = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
}

const buyBtn = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
}

const clearBtn = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
}

const secondaryBtn = {
  background: "transparent",
  border: "none",
  color: "#93c5fd",
  cursor: "pointer",
}

export default Cart
