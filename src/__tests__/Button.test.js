import React from 'react'
import Button from '../components/utilityComponents/Button/Button.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const component = renderer.create(<Button variant="primary">Facebook</Button>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
