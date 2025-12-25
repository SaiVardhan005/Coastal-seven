import { useEffect, useState } from "react"

function Weather() {
  const [city, setCity] = useState("Hyderabad")
  const [temperature, setTemperature] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Coordinates for few cities (simple approach)
  const cityCoordinates = {
    Hyderabad: { lat: 17.385, lon: 78.4867 },
    Delhi: { lat: 28.6139, lon: 77.209 },
    Mumbai: { lat: 19.076, lon: 72.8777 },
    Chennai: { lat: 13.0827, lon: 80.2707 },
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  async function fetchWeather() {
    try {
      setLoading(true)
      setError("")

      const coords = cityCoordinates[city]
      if (!coords) {
        setError("City not supported")
        setLoading(false)
        return
      }

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
      )

      const data = await response.json()
      setTemperature(data.current_weather.temperature)
    } catch (err) {
      setError("Failed to fetch weather data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "20px" }}>
      <h2>🌦️ Weather App</h2>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Chennai</option>
      </select>

      <button onClick={fetchWeather} style={{ marginLeft: "10px" }}>
        Get Weather
      </button>

      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {temperature !== null && !loading && (
        <p>
          Temperature in <b>{city}</b>: {temperature}°C
        </p>
      )}
    </div>
  )
}

export default Weather
