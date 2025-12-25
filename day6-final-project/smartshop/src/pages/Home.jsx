import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Home({ searchText }) {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "white" }}>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {filtered.map((product) => (
          <ProductCard
            key={product.name}
            product={product} // ✅ PASS FULL PRODUCT
          />
        ))}
      </div>
    </div>
  )
}

export default Home
