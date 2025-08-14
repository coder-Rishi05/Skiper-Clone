import React from 'react'
import { SkiperCard } from './ui/skiper-card'
import Img1 from "../../public/Img2.jpg"
import Img2 from "../../public/Img2.jpg"
import Img3 from "../../public/Img3.jpg"
import Img4 from "../../public/Img4.jpg"
import Img5 from "../../public/Img5.jpg"
import Img6 from "../../public/img6.jpg"
import Img7 from "../../public/img7.jpg"
import Img8 from "../../public/img8.jpg"
import Img9 from "../../public/img9.jpg"
import Img10 from "../../public/img10.jpg"
import Img11 from "../../public/img11.jpg"

const Scard = () => {
  return (
    <div>
        <SkiperCard 
        title='crazy-card'
        description='Best and unique designs.'

        image={
          {
            
              step1dark1: Img1,
              step1dark2: Img2,
              step1light1: Img3,
              step1light2: Img4,
              step2dark1: Img5,
              step2dark2: Img6,
              step2light1: Img7,
              step2light2: Img8,
              step3dark: Img9,
              step3light: Img10,
              step4light: Img11,
              alt: "Images"
            }
        }
        />
    </div>
  )
}

export default Scard