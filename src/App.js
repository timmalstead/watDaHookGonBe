import React from "react"
import albumcover from "./albumcover.jpg"

const holder = { width: "100vw", height: "100vh" }

export default () => {
  return (
    <div style={holder}>
      <img src={albumcover} alt="Murphy's Law" />
    </div>
  )
}
