import React from "react"
import useDrag from "./useDrag"
import albumcover from "./albumcover.jpg"

const holderStyle = { width: "100vw", height: "100vh" }
const pictureStyle = {
  backgroundImage: `url(${albumcover})`,
  width: "200px",
  height: "200px",
}

const { innerHeight, innerWidth } = window
const startingPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 }

export default () => {
  const {
    picturePosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag(startingPosition)

  return (
    <div style={holderStyle}>
      <div
        style={{
          ...picturePosition,
          ...pictureStyle,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  )
}
