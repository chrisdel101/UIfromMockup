import React from 'react'
import Image from '../components/utilityComponents/Image/Image.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const component = renderer.create(<Image />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
