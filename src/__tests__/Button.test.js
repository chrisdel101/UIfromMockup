import React from 'react'
import Button from '../components/utilityComponents/Button/Button.jsx'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Button variant="primary">Facebook</Button>)
  console.log(component)
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
})
