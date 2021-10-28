import React from 'react'
import { Carousel } from 'react-bootstrap'


export const Carousels = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/themes/amazonas/slide-1633066468523-7124875580-a0511021b7fbde743d24a267a357e3291633066473-1920-1920.png?1657216085"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/themes/amazonas/slide-1633092126358-2251227718-6acdcd6c903c304a1de54f184837661e1633092126-1920-1920.jpg?1657216085"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/themes/amazonas/slide-1633093705132-3428164024-6d42ec37b62b49180f864a7002f47d411633093708-1920-1920.png?1657216085"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
