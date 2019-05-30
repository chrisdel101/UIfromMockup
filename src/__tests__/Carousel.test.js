import React from 'react'
import Carousel from '../components/utilityComponents/Carousel/Carousel.jsx'
import renderer from 'react-test-renderer'

test('create and match snapshot', () => {
  const reviews = [
    {
      icon: 'icon',
      src: 'http://place-puppy.com/101x101',
      name: 'Joe',
      text:
        'Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore.'
    },
    {
      icon: 'icon',
      src: 'http://place-puppy.com/101x102',
      name: 'Sam',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil nisi. Molestias ab facilis esse voluptatibus vero excepturi optio laborum, rem, modi nihil expedita. Omnis necessitatibus dignissimos qui minus mollitia?'
    }
  ]
  const component = renderer.create(
    <Carousel instance="reviews" reviews={reviews} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
