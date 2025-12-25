import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

function Checkout({ onConfirm, onBack }) {
  const { cart, placeOrder } = useContext(CartContext)
  const [address, setAddress] = useState("")

  const items = Object.values(cart)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  const handleContinue = () => {
    if (!address.trim()) {
      alert("Please enter delivery address")
      return
    }

    placeOrder()     // ✅ ACTUALLY PLACE ORDER
    onConfirm()      // ✅ MOVE TO SUCCESS PAGE
  }

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "60px auto",
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Checkout</h2>

      <h4 style={{ marginTop: "20px" }}>Order Summary</h4>

      {items.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>
            {item.name} × {item.qty}
          </span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <hr style={{ margin: "15px 0" }} />

      <strong>Total: ₹{total}</strong>

      <h4 style={{ marginTop: "20px" }}>Delivery Address</h4>

      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows="3"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "6px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
        }}
      />

      <button
        onClick={handleContinue}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Continue
      </button>

      {/* BACK BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <button onClick={onBack} style={secondaryBtn}>
          ← Back to Cart
        </button>
      </div>
    </div>
  )
}

const secondaryBtn = {
  background: "transparent",
  border: "none",
  color: "#4f46e5",
  cursor: "pointer",
}

export default Checkout
