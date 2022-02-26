import React from "react"

import "./spinner.scss"

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__dot"></div>
      <div className="spinner__dot"></div>
      <div className="spinner__dot"></div>
      <div className="spinner__dot"></div>
      <div className="spinner__dot"></div>
      <div className="spinner__dot"></div>
    </div>
  )
}

export default Spinner