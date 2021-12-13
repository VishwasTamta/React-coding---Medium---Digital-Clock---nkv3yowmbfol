import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {

  let [month, day, year] = new Date().toLocaleString("en-US").split("/")
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    },1000)

    return () => {
      clearInterval(interval)
    }
  })


  return (
    <div id="main">
      <div className="date-time">{day}/{month}/{year}</div>
    </div>
  )
}


export default App;
