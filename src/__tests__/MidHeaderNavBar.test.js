import React from 'react'
import MidHeaderNavBar from '../components/utilityComponents/MidHeaderNavBar/MidHeaderNavBar.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const links = ['Intro', 'Work', 'About', 'Contacts']
  const component = renderer.create(<MidHeaderNavBar links={links} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
