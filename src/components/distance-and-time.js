import React from "react"

function formatTime(time) {
  const hours = Math.floor(time / 3600).toString()
  const minutes = Math.floor((time % 3600) / 60).toString()
  const hh = hours.length < 2 ? `0${hours}` : hours
  const mm = minutes.length < 2 ? `0${minutes}` : minutes
  return `${hh}h${mm}m`
}

function DistanceAndTime({ distance, time }) {
  const Value = ({ children }) => (
    <span
      style={{ fontSize: "1.25rem", display: "inline-block", marginTop: 10 }}
    >
      <b>{children}</b>
    </span>
  )
  return (
    <div
      style={{
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        Distância<sup>*</sup>:
        <br />
        <Value>{`${distance} Km`}</Value>
      </div>
      <div>
        Tempo<sup>*</sup>:
        <br />
        <span>
          <Value>{formatTime(time)}</Value>
        </span>
      </div>
    </div>
  )
}

export default DistanceAndTime
