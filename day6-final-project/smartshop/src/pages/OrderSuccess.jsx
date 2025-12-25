function OrderSuccess({ onCancel, onBackHome }) {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "#ffffff",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        textAlign: "center",
        color: "#111827",
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>

      <h2 style={{ marginBottom: "10px" }}>
        Order Placed Successfully
      </h2>

      <p style={{ marginBottom: "24px" }}>
        Your items will be delivered in <strong>2–3 days</strong>.
      </p>

      {/* ACTION BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onBackHome}
          style={{
            padding: "14px 26px",
            borderRadius: "10px",
            border: "none",
            background: "#4f46e5",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Back to Home
        </button>

        <button
          onClick={onCancel}
          style={{
            padding: "14px 26px",
            borderRadius: "10px",
            border: "none",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Cancel Order
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess
