import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ThemeContext } from "../context/ThemeContext"

function Navbar({
  searchText,
  setSearchText,
  onCartClick,
  onOrdersClick,
}) {
  const { cart } = useContext(CartContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const cartCount = Object.values(cart).reduce(
    (sum, item) => sum + item.qty,
    0
  )

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "14px 20px",
        background: "linear-gradient(90deg,#4f46e5,#6366f1)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LOGO */}
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => onOrdersClick(false)}
      >
        🛒 SmartShop
      </h2>

      {/* SEARCH */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search products..."
        style={{
          flex: 1,
          padding: "10px 14px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      {/* VIEW ORDERS */}
      <button onClick={onOrdersClick} style={navBtn}>
        📦 Orders
      </button>

      {/* CART */}
      <button onClick={onCartClick} style={navBtn}>
        🛒 Cart ({cartCount})
      </button>

      {/* THEME */}
      <button onClick={toggleTheme} style={navBtn}>
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </div>
  )
}

const navBtn = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
}

export default Navbar
