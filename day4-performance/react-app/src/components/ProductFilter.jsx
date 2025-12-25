import { useMemo, useState } from "react"

function ProductFilter() {
  const [search, setSearch] = useState("")

  const products = [
    "Laptop",
    "Mobile",
    "Tablet",
    "Headphones",
    "Keyboard",
    "Mouse",
  ]

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...")
    return products.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div>
      <h2>🛍️ Product Filter</h2>

      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductFilter
