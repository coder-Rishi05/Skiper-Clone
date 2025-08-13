import React from 'react'
import { CardCarousel } from './ui/card-carousel'

const Card = () => {

     const images = [
    { src: "/Img1.jpg", alt: "Image 1" },
    { src: "/Img2.jpg", alt: "Image 2" },
    { src: "/Img3.jpg", alt: "Image 3" },
  ]



  return (
    <div>
        <CardCarousel images={images} autoplayDelay={1000}
        showPagination={true}
        showNavigation={true}   >

        </CardCarousel>
    </div>
  )
}

export default Card