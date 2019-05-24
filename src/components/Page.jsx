import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
          numberBarItems={[
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
          ]}
        />
        <Main />
      </React.Fragment>
    )
  }
}

export default Page
