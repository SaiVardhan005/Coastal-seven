import { useState } from "react"
import ReactDOM from "react-dom"

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        margin: "100px auto",
        width: "300px"
      }}>
        <h3>Profile Modal</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  )
}

function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h2>Modal Demo</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

export default ModalDemo
