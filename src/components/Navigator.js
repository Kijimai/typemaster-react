import React from "react"
import Button from "./Button"
import Logo from "./Logo"
const Navigator = () => {
  return (
    <div id="top" className="navigator flex">
      <a href="#top">
        <Logo />
      </a>
      <Button btnModifier={'btn-1'} btnTitle={"Pre-order now"} />
    </div>
  )
}

export default Navigator
