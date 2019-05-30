import React from 'react'
import Accordion from '../components/utilityComponents/Accordion/Accordion.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const drawers = {
    '1': {
      icon: 'picture-o',
      heading: 'photography',
      text:
        'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
    },
    '2': {
      icon: 'sliders',
      heading: 'creativity',
      text:
        'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
    },
    '3': {
      icon: 'bullseye',
      heading: 'web design',
      text:
        'Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.'
    }
  }
  const component = renderer.create(
    <Accordion drawers={drawers}>Facebook</Accordion>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
