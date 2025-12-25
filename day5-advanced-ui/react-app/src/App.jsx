import Navbar from "./components/Navbar"
import ModalDemo from "./components/ModalDemo"
import Cart from "./components/Cart"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Day 5 – Advanced UI</h1>
        <ModalDemo />
        <Cart />
      </div>
    </ThemeProvider>
  )
}

export default App
