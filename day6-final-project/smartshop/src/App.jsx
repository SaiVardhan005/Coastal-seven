import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import CancelOrder from "./pages/CancelOrder"
import OrderCancelled from "./pages/OrderCancelled"
import Orders from "./pages/Orders"

import { CartProvider } from "./context/CartContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [step, setStep] = useState("home")
  const [searchText, setSearchText] = useState("")

  return (
    <ThemeProvider>
      <CartProvider>
        {/* NAVBAR */}
        <Navbar
          searchText={searchText}
          setSearchText={setSearchText}
          onCartClick={() =>
            setStep(step === "cart" ? "home" : "cart")
          }
          onOrdersClick={() => setStep("orders")}
          onLogoClick={() => setStep("home")}
        />

        {/* PAGES */}
        {step === "home" && (
          <Home searchText={searchText} />
        )}

        {step === "cart" && (
          <Cart
            onBuy={() => setStep("checkout")}
            onBackHome={() => setStep("home")}
          />
        )}

        {step === "checkout" && (
          <Checkout
            onConfirm={() => setStep("success")}
            onBack={() => setStep("cart")}
          />
        )}

        {step === "success" && (
          <OrderSuccess
            onCancel={() => setStep("cancel")}
            onBackHome={() => setStep("home")}
          />
        )}

        {step === "orders" && (
          <Orders
            onCancel={() => setStep("cancel")}
            onBackHome={() => setStep("home")}
          />
        )}

        {step === "cancel" && (
          <CancelOrder
            onConfirm={() => setStep("cancelled")}
            onBack={() => setStep("orders")}
          />
        )}

        {step === "cancelled" && (
          <OrderCancelled
            onBackHome={() => setStep("home")}
          />
        )}
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
