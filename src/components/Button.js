import React from "react"

const Button = (props) => {
  const { btnTitle, btnModifier } = { ...props }
  return <button className={`btn ${btnModifier}`}>{btnTitle}</button>
}

export default Button
