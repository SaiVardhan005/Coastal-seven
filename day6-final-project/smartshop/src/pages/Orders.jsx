import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Orders({ onCancel }) {
  const { orders, cancelOrder } = useContext(CartContext)

  if (orders.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        No orders yet.
      </p>
    )
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h2>Your Orders</h2>

      {orders.map((order, index) => (
        <div key={index} style={card}>
          <h3>Order #{index + 1}</h3>

          {order.items.map((item) => (
            <div key={item.name}>
              {item.name} × {item.qty}
            </div>
          ))}

          <p style={{ marginTop: "8px" }}>
            🚚 Delivered in 2–3 days
          </p>

          <button
            style={cancelBtn}
            onClick={() => {
              cancelOrder(index) // ✅ REMOVE FROM STATE
              onCancel()
            }}
          >
            Cancel Order
          </button>
        </div>
      ))}
    </div>
  )
}

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  marginBottom: "20px",
}

const cancelBtn = {
  marginTop: "12px",
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
}

export default Orders
