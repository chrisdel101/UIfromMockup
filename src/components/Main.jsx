import React from 'react'
import BlockTextHeader from './BlockTextHeader'
import Image from './Image'
import InfoTextBlock from './InfoTextBlock'
import Accordion from './Accordion'

function Main(props) {
  return (
    <main className="main">
      <div className="main-firstblock">
        <BlockTextHeader cursive="For all designs" block="unique designs" />
        <Image src="http://place-puppy.com/200x300" alt="a puppy" />
        <Image src="http://place-puppy.com/100x200" alt="a puppy" />
      </div>
      <div className="main-secondblock">
        <BlockTextHeader cursive="Service" block="what we do" />
        <InfoTextBlock text="Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.." />
        <Image src="http://place-puppy.com/200x300" alt="a puppy" />
        <Accordion drawers={props.services} />
      </div>
    </main>
  )
}

export default Main
