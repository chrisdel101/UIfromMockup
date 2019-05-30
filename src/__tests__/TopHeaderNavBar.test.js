import React from 'react'
import TopHeaderNavBar from '../components/utilityComponents/TopHeaderNavBar/TopHeaderNavBar.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const links = ['Intro', 'Work', 'About', 'Contacts']
  const component = renderer.create(<TopHeaderNavBar links={links} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
