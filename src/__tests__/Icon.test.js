import React from 'react'
import Icon from '../components/utilityComponents/Icon/Icon.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const component = renderer.create(
    <Icon src="http://place-puppy.com/200x200" alt="a placeholder" />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
