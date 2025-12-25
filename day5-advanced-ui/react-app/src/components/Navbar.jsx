import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <nav
      style={{
        width: "100%",
        background: "#4f46e5",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>My App</h3>
      <button
        onClick={toggleTheme}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </nav>
  )
}

export default Navbar
