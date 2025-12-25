import { useEffect, useState } from "react"

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [running])

  return (
    <div>
      <h2>⏱️ Stopwatch</h2>
      <p>Time: {time}s</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch
