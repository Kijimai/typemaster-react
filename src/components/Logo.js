import React from "react"
import logo from "../images/shared/logo.svg"
const Logo = () => {
  return (
    <div className="logo-container flex">
      <img className="logo-container__logo" src={logo} alt="site logo" />
    </div>
  )
}

export default Logo
