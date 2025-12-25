import { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")
  const isDark = theme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",                // ✅ FULL WIDTH
          background: isDark
            ? "linear-gradient(180deg, #020617, #020617)"
            : "#f9fafb",
          color: isDark ? "#fff" : "#000",
          transition: "all 0.3s ease",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
