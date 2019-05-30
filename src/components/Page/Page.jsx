import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import './index.css'
import data from '../../data.json'
console.log(data)

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: data.reviews,
      services: data.services,
      works: data.works,
      headerBlocks: data.headerBlocks,
      topNavlinks: data.topNavlinks,
      midNavLinks: data.midNavLinks
    }
  }
  render() {
    return (
      <div className="page">
        <Header
          headerBlocks={this.state.headerBlocks}
          topNavlinks={this.state.topNavlinks}
          midNavLinks={this.state.midNavLinks}
        />
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
