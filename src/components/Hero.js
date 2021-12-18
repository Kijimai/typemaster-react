import React from "react"
import Button from "./Button"
import heroKeyboardDesktop from "../images/desktop/image-keyboard.jpg"
import heroKeyboardMobile from "../images/mobile/image-keyboard.jpg"

const Hero = () => {
  return (
    <div className="hero flex">
      <div className="hero__content">
        <h1 className="hero__header">Typemaster Keyboard</h1>
        <p className="hero__paragraph">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <Button btnModifier={"btn-2"} btnTitle={"Pre-order Now"} />
      </div>
      <div className="hero__image-container">
        <img
          className="hero__image"
          src={heroKeyboardMobile}
          alt="featured preview of keyboard"
        />
      </div>
    </div>
  )
}

export default Hero
