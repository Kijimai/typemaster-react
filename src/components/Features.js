import React from "react"
import { features } from "../utils/data"
const Features = () => {
  return (
    <section className="section section-features flex">
      {features.map((item, index) => {
        return (
          <div className="feature">
            <div className="feature__icon-container">
              <img
                className="feature__icon"
                src={item.featureIcon}
                alt={item.featureAlt}
              />
            </div>
            <h3 className="feature__header">{item.feature}</h3>
            <p className="paragraph">{item.description}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Features
