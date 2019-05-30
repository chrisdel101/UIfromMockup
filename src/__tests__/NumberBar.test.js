import React from 'react'
import NumberBar from '../components/utilityComponents/NumberBar/NumberBar.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const numberLine = {
    '1': {
      end: 42,
      text: 'web desgin projects'
    },
    '2': {
      end: 123,
      text: 'happy clients'
    },
    '3': {
      end: 15,
      text: 'award winners'
    },
    '4': {
      end: 99,
      text: 'cups of coffee'
    },
    '5': {
      end: 24,
      text: 'members'
    }
  }
  const component = renderer.create(
    <NumberBar numberBar={numberLine} counterDuration={2} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
