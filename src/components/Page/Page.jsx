import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import styles from './index.css'

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
      works: [
        {
          name: 'work 1',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 2',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 3',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 4',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 5',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 6',
          src: 'http://place-puppy.com/200x100'
        },
        {
          name: 'work 7',
          src: 'http://place-puppy.com/200x100'
        }
      ],
      headerBlocks: {
        header: {
          cursive: 'Creative Template',
          block: 'welcome to mogo'
        },
        hero: {
          cursive: 'What we do',
          block: 'story about us'
        },
        mainFirstBlock: {
          cursive: 'For all devices',
          block: 'unique design'
        },
        mainSecondBlock: {
          cursive: 'Service',
          block: 'What we do'
        },
        mainThirdBlock: {
          cursive: 'What we do',
          block: 'some of our work'
        }
      }
    }
  }
  render() {
    return (
      <div className="page">
        <Header headerBlocks={this.state.headerBlocks} />
        <Hero
          imgSources={[
            'http://place-puppy.com/200x201',
            'http://place-puppy.com/200x201',
            'http://place-puppy.com/200x201'
          ]}
          headerBlocks={this.state.headerBlocks}
          numberLine={this.state.numberLine}
        />
        <Main
          headerBlocks={this.state.headerBlocks}
          services={this.state.services}
          reviews={this.state.reviews}
          works={this.state.works}
          numberLine={this.state.numberLine}
        />
      </div>
    )
  }
}

export default Page
