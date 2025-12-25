import { useEffect, useState } from "react"

function Weather() {
  const [city, setCity] = useState("Hyderabad")
  const [temp, setTemp] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchWeather()
  }, [])

  async function fetchWeather() {
    try {
      setLoading(true)
      setError("")

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true`
      )
      const data = await res.json()
      setTemp(data.current_weather.temperature)
    } catch (err) {
      setError("Failed to fetch weather")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Weather App</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {temp !== null && <p>Temperature: {temp}°C</p>}
    </div>
  )
}

export default Weather
