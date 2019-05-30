import React from 'react'
import HeaderTextBlock from '../components/utilityComponents/HeaderTextBlock/HeaderTextBlock.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const component = renderer.create(<HeaderTextBlock variant="primary" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
