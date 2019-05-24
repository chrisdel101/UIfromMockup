import React from 'react'
import BlockTextHeader from './BlockTextHeader'
import InfoTextBlock from './InfoTextBlock'
import Image from './Image'
import NumberBar from './NumberBar'

function Hero(props) {
  return (
    <div className="hero">
      <BlockTextHeader cursive="For all devices" block="Unique Designs" />
      <InfoTextBlock text="loremConsetetur ut ea no ut labore at sadipscing dolor amet sit, ipsum at rebum et stet justo. Amet sit sit. " />
      {props.imgSources.map((src, i) => {
        return <Image src={src} alt="A puppy" key={i} />
      })}
      <NumberBar numberBarItems={props.numberBarItems} />
    </div>
  )
}

export default Hero
