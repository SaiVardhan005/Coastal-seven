function OrderCancelled({ onBackHome }) {
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
      <div style={{ fontSize: "48px", marginBottom: "12px" }}>😢</div>

      <h2>Your Order Has Been Cancelled</h2>

      <p style={{ marginTop: "10px" }}>
        We’re sorry to see you cancel.
      </p>

      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        Looking forward to getting another order from you.
      </p>

      <button
        onClick={onBackHome}
        style={{
          marginTop: "24px",
          padding: "14px 26px",
          borderRadius: "10px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Back to Home
      </button>
    </div>
  )
}

export default OrderCancelled
