import React from "react"
import Button from "./Button"
import heroKeyboardDesktop from "../images/desktop/image-keyboard.jpg"
import heroKeyboardMobile from "../images/mobile/image-keyboard.jpg"
import { useGlobalContext } from "../utils/context"

const Hero = () => {
  const { isMobile, viewWidth } = useGlobalContext()

  return (
    <div className="hero flex">
      <div className="hero__content">
        <h1 className="hero__header">Typemaster Keyboard</h1>
        <p className="hero__paragraph">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="pre-order flex">
          <Button btnModifier={"btn-2"} btnTitle={"Pre-order Now"} />
          <p className="pre-order__text">Release on 5/27</p>
        </div>
      </div>
      <div className="hero__image-container">
        <img
          className="hero__image"
          src={viewWidth < 900 ? heroKeyboardMobile : heroKeyboardDesktop}
          alt="featured preview of keyboard"
        />
      </div>
    </div>
  )
}

export default Hero
