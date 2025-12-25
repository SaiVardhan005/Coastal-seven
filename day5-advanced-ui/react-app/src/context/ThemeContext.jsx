import { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div
      style={{
        background: theme === "light" ? "#f9fafb" : "#111827",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        width: "100vw",               // ✅ full screen width
        display: "flex",
        justifyContent: "center",     // ✅ horizontal center
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",         // ✅ content width
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  </ThemeContext.Provider>
)

}
