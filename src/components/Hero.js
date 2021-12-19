import React from "react"
import Button from "./Button"
import heroKeyboardDesktop from "../images/desktop/image-keyboard.jpg"
import heroKeyboardMobile from "../images/mobile/image-keyboard.jpg"

import glassAndKeyboardDesktop from "../images/desktop/image-glass-and-keyboard.jpg"
import glassAndKeyboardMobile from "../images/mobile/image-glass-and-keyboard.jpg"

import phoneAndKeyboardDesktop from "../images/desktop/image-phone-and-keyboard.jpg"
import phoneAndKeyboardMobile from "../images/mobile/image-phone-and-keyboard.jpg"

import { useGlobalContext } from "../utils/context"

const Hero = () => {
  const { viewWidth } = useGlobalContext()

  return (
    <div className="hero flex">
      <div className="hero__content flex">
        <div className="hero__row row-1">
          <div className="hero__main">
            <h1 className="hero__header">Typemaster Keyboard</h1>
            <p className="paragraph">
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <div className="pre-order flex">
              <Button btnModifier={"btn-2"} btnTitle={"Pre-order Now"} />
              <p className="pre-order__text">Release on 5/27</p>
            </div>
          </div>

          <img
            className="hero__image image-1"
            src={viewWidth < 900 ? heroKeyboardMobile : heroKeyboardDesktop}
            alt="featured preview of keyboard"
          />
        </div>
        <div className="hero__row row-2">
          <img
            className="hero__image image-2"
            src={
              viewWidth < 900 ? phoneAndKeyboardMobile : phoneAndKeyboardDesktop
            }
            alt="featured preview of keyboard"
          />
          <img
            className="hero__image image-3"
            src={
              viewWidth < 900 ? glassAndKeyboardMobile : glassAndKeyboardDesktop
            }
            alt="featured preview of keyboard"
          />
        </div>
        <div className="hero__row row-3">
          <h2 className="hero__sub-header">Mechanical Wireless Keyboard</h2>
          <p className="paragraph">
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
