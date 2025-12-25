import { useState } from "react"

const PRODUCTS = {
  Book: 200,
  Pen: 20,
  Notebook: 100,
  Pencil: 10,
  Bag: 500,
}

function Cart() {
  const [cart, setCart] = useState({})

  // Add item
  function addItem(name) {
    setCart((prev) => ({
      ...prev,
      [name]: {
        price: PRODUCTS[name],
        qty: (prev[name]?.qty || 0) + 1,
      },
    }))
  }

  // Remove one quantity
  function removeItem(name) {
    setCart((prev) => {
      const updated = { ...prev }
      if (updated[name].qty === 1) {
        delete updated[name]
      } else {
        updated[name].qty -= 1
      }
      return updated
    })
  }

  // Clear cart
  function clearCart() {
    setCart({})
  }

  // Grand total
  const grandTotal = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div style={cardStyle}>
      <h2>🛒 Shopping Cart</h2>

      {/* Product Buttons */}
      <div style={buttonGroup}>
        {Object.keys(PRODUCTS).map((item) => (
          <button key={item} onClick={() => addItem(item)} style={btn}>
            Add {item}
          </button>
        ))}
      </div>

      {/* Cart Items */}
      {Object.keys(cart).length === 0 ? (
        <p style={{ color: "#6b7280" }}>Cart is empty</p>
      ) : (
        <div style={{ marginTop: "15px" }}>
          {Object.entries(cart).map(([name, data]) => (
            <div key={name} style={itemRow}>
              <strong>{name}</strong>

              {/* Quantity box */}
              <div style={qtyBox}>
                <button onClick={() => removeItem(name)} style={qtyBtn}>−</button>
                <span>{data.qty}</span>
                <button onClick={() => addItem(name)} style={qtyBtn}>+</button>
              </div>

              {/* Item total */}
              <span style={{ textAlign: "right", fontWeight: "600" }}>
                Total: ₹{data.price * data.qty}
                </span>


            </div>
          ))}
        </div>
      )}

      {/* Total */}
      <div style={totalBox}>
        <strong>Grand Total:</strong> ₹{grandTotal}
      </div>

      {/* Clear Cart */}
      <button
        onClick={clearCart}
        disabled={Object.keys(cart).length === 0}
        style={{
          ...btn,
          background: "#dc2626",
          marginTop: "10px",
          opacity: Object.keys(cart).length === 0 ? 0.6 : 1,
        }}
      >
        Clear Cart
      </button>
    </div>
  )
}

/* ---------- Styles ---------- */

const cardStyle = {
  marginTop: "30px",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "#fff",
  maxWidth: "600px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
}

const buttonGroup = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "15px",
}

const btn = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  background: "#4f46e5",
  color: "white",
  cursor: "pointer",
}

const itemRow = {
  display: "grid",
  gridTemplateColumns: "1fr 140px 120px", // name | qty | price
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid #e5e7eb",
}


const qtyBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "140px",
  padding: "6px 10px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  background: "#f9fafb",
  flexShrink: 0,          // 🔑 VERY IMPORTANT
}




const qtyBtn = {
  border: "none",
  background: "#e5e7eb",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
}


const totalBox = {
  marginTop: "15px",
  paddingTop: "10px",
  borderTop: "2px solid #e5e7eb",
  fontSize: "18px",
}

export default Cart
