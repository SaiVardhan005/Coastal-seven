import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "18px",
        width: "220px",
        background: "white",
        boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"
        e.currentTarget.style.boxShadow =
          "0 14px 32px rgba(0,0,0,0.15)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow =
          "0 10px 24px rgba(0,0,0,0.08)"
      }}
    >
      <h3>{product.name}</h3>
      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)} // ✅ FIX
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "10px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
