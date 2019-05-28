import React from 'react'
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
      {props.works.map((work, i) => {
        return <Image src={work.src} alt={work.name} key={i} />
      })}
    </div>
  )
}
function Main(props) {
  const {
    mainFirstBlock,
    mainSecondBlock,
    mainFourthBlock
  } = props.headerBlocks
  return (
    <main className="main">
      <div className="main-firstblock">
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
      </div>

      <div className="main-secondblock">
        <BlockTextHeader
          cursive={mainSecondBlock.cursive}
          block={mainSecondBlock.block}
        />
        <Dash />
        <InfoTextBlock text="Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.." />
        <div className="accordion-container">
          <Image src="http://place-puppy.com/400x280" alt="a puppy" />
          <Accordion drawers={props.services} />
        </div>
      </div>

      <div className="main-thirdblock">
        <Carousel reviews={props.reviews} />
      </div>

      <div className="main-fourthblock">
        <BlockTextHeader
          cursive={mainFourthBlock.cursive}
          block={mainFourthBlock.block}
        />
        <Dash />
        <InfoTextBlock text="Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.." />
        {renderWorks(props)}
      </div>
    </main>
  )
}

export default Main
