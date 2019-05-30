import React from 'react'
import BlockTextHeader from '../utilityComponents/HeaderTextBlock/HeaderTextBlock'
import InfoTextBlock from '../utilityComponents/InfoTextBlock/InfoTextBlock'
import Image from '../utilityComponents/Image/Image'
import NumberBar from '../utilityComponents/NumberBar/NumberBar'
import Dash from '../utilityComponents/Dash/Dash'
import './index.css'

function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-firstblock">
        <BlockTextHeader cursive="What we do" block="story about us" />
        <Dash />
        <InfoTextBlock text="loremConsetetur ut ea no ut labore at sadipscing dolor amet sit, ipsum at rebum et stet justo. Amet sit sit. " />
        <div className="hero-image-container">
          {props.imgSources.map((src, i) => {
            return <Image src={src} alt="A puppy" key={i} />
          })}
        </div>
      </div>
      <NumberBar
        numberLine={props.numberLine}
        counterDuration={props.counterDuration}
      />
    </section>
  )
}

export default Hero
