import { useState } from "react"

function CancelOrder({ onConfirm }) {
  const [reason, setReason] = useState("")

  const isValid = reason.trim().length > 5

  return (
    <div
      style={{
        maxWidth: "600px",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Cancel Order</h2>

      <p style={{ marginBottom: "10px" }}>
        Please tell us why you want to cancel your order:
      </p>

      <textarea
        rows={4}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Enter reason for cancellation..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "16px",
        }}
      />

      <button
        disabled={!isValid}
        onClick={onConfirm}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          background: isValid ? "#4f46e5" : "#9ca3af",
          color: "white",
          cursor: isValid ? "pointer" : "not-allowed",
          fontSize: "16px",
        }}
      >
        Continue
      </button>
    </div>
  )
}

export default CancelOrder
