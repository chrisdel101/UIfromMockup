import React from 'react'
import BlockTextHeader from './BlockTextHeader'
import Image from './Image'

function Main(props) {
  return (
    <main class="main">
      <div className="main-topblock">
        <BlockTextHeader cursive="Service" block="what we do" />
        <Image src="http://place-puppy.com/200x300" alt="a puppy" />
        <Image src="http://place-puppy.com/100x200" alt="a puppy" />
      </div>
    </main>
  )
}

export default Main
