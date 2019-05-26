import React from 'react'
import BlockTextHeader from '../utilityComponents/HeaderTextBlock/HeaderTextBlock'
import InfoTextBlock from '../utilityComponents/InfoTextBlock/InfoTextBlock'
import Image from '../utilityComponents/Image/Image'
import NumberBar from '../utilityComponents/NumberBar/NumberBar'

function Hero(props) {
  return (
    <div className="hero">
      <BlockTextHeader cursive="What we do" block="story about us" />
      <InfoTextBlock text="loremConsetetur ut ea no ut labore at sadipscing dolor amet sit, ipsum at rebum et stet justo. Amet sit sit. " />
      {props.imgSources.map((src, i) => {
        return <Image src={src} alt="A puppy" key={i} />
      })}
      <NumberBar numberLine={props.numberLine} />
    </div>
  )
}

export default Hero
