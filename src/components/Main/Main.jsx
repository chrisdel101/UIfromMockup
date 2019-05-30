import React, { useEffect, useState } from 'react'
import BlockTextHeader from '../utilityComponents/HeaderTextBlock/HeaderTextBlock'
import Image from '../utilityComponents/Image/Image'
import InfoTextBlock from '../utilityComponents/InfoTextBlock/InfoTextBlock'
import Accordion from '../utilityComponents/Accordion/Accordion'
import Dash from '../utilityComponents/Dash/Dash'
import Carousel from '../utilityComponents/Carousel/Carousel'
import './index.css'

function renderWorks(props) {
  return (
    <div className="work">
      <div className="work-expanded">
        {props.works.map((work, i) => {
          return <Image src={work.src} alt={work.name} key={i} />
        })}
      </div>
      <div className="work-carousel">
        <Carousel works={props.works} instance="works" />
      </div>
    </div>
  )
}
function Main(props) {
  const {
    mainFirstBlock,
    mainSecondBlock,
    mainFourthBlock
  } = props.headerBlocks
  // set state of image height
  const [stateHeight, setHeight] = useState({
    height: '0'
  })
  // get height of container and sign height to image
  useEffect(() => {
    const height = document
      .querySelector('.main-accordion-container')
      .getBoundingClientRect().height
    setHeight({ height: height })
  }, [])
  return (
    <main className="main">
      <section className="main-firstblock">
        <BlockTextHeader
          cursive={mainFirstBlock.cursive}
          block={mainFirstBlock.block}
        />
        <Dash />
        <Image
          id="stacked-image1"
          src="http://place-puppy.com/200x300"
          alt="a puppy"
        />
      </section>

      <section className="main-secondblock">
        <BlockTextHeader
          cursive={mainSecondBlock.cursive}
          block={mainSecondBlock.block}
        />
        <Dash />
        <InfoTextBlock text="Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.." />
        <div className="main-accordion-container">
          <Image
            style={{ height: stateHeight.height.toString() + 'px' }}
            src="http://place-puppy.com/400x280"
            alt="a puppy"
          />
          <Accordion drawers={props.services} />
        </div>
      </section>

      <section className="main-thirdblock">
        <Carousel reviews={props.reviews} instance="reviews" />
      </section>

      <section className="main-fourthblock">
        <BlockTextHeader
          cursive={mainFourthBlock.cursive}
          block={mainFourthBlock.block}
        />
        <Dash />
        <InfoTextBlock text="Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.." />
        {renderWorks(props)}
      </section>
    </main>
  )
}

export default Main
