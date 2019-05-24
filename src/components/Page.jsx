import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [
        {
          icon: 'icon',
          name: 'Joe',
          text:
            'Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore.'
        },
        {
          icon: 'icon',
          name: 'Sam',
          text:
            'Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore.'
        },
        {
          icon: 'icon',
          name: 'Sara',
          text:
            'Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore.'
        }
      ],
      services: {
        1: {
          arrows: ['chevron-up', 'chevron-down'],
          icon: 'picture-o',
          heading: 'photography',
          text:
            'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
        },
        2: {
          arrows: ['chevron-up', 'chevron-down'],
          icon: 'sliders',
          heading: 'creativity',
          text:
            'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
        },
        3: {
          arrows: ['chevron-up', 'chevron-down'],
          icon: 'bullseye',
          heading: 'web design',
          text:
            'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
        }
      },
      stats: [
        {
          number: '42',
          text: 'web desgin prjects'
        },
        {
          number: '123',
          text: 'happy clients'
        },
        {
          number: '15',
          text: 'award winners'
        },
        {
          number: '99',
          text: 'cups of coffee'
        },
        {
          number: '24',
          text: 'members'
        }
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero
          imgSources={[
            'http://place-puppy.com/200x201',
            'http://place-puppy.com/200x201',
            'http://place-puppy.com/200x201'
          ]}
          numberBarItems={this.state.stats}
        />
        <Main services={this.state.services} reviews={this.state.reviews} />
      </React.Fragment>
    )
  }
}

export default Page
