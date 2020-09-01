import React, { useState } from "react"
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
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: startingPosition,
    lastTranslation: startingPosition,
  })

  const { isDragging } = dragInfo
  const handleMouseDown = ({ clientX, clientY }) => {
    if (!isDragging)
      setDragInfo({
        ...dragInfo,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      })
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    if (isDragging) {
      const { origin, lastTranslation } = dragInfo
      setDragInfo({
        ...dragInfo,
        translation: {
          x: Math.abs(clientX - (origin.x + lastTranslation.x)),
          y: Math.abs(clientY - (origin.y + lastTranslation.y)),
        },
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      const { translation } = dragInfo
      setDragInfo({
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      })
    }
  }

  const picturePosition = {
    position: "absolute",
    right: `${dragInfo.translation.x}px`,
    bottom: `${dragInfo.translation.y}px`,
  }

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
