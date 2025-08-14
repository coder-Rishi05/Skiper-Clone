import React from 'react'
import ImageCursorTrail from './ui/image-cursortrail'



const Cursor = () => {

    const Images = [
        "./Img1.jpg",
        "./Img2.jpg",
        "./Img3.jpg",
        "./Img4.jpg",
        "./Img5.jpg",
        "./Img6.jpg",
        "./Img7.jpg",
        "./Img8.jpg",
        "./Img9.jpg",
        "./Img10.jpg",
        "./Img11.jpg",

    ]


  return (
    <div>
        <ImageCursorTrail 
         items={Images}
        maxNumberOfImages={7 }
        distance={10}
        // imgClass="sm:w-40 w-28 sm:h-48 h-36  "
        // className=" max-w-4xl rounded-3xl "
        >
             <article className="relative z-50 text-center flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
              Images That Follow the Cursor Cooool Right
            </h1>
          </article>
        </ImageCursorTrail>
    </div>
  )
}

export default Cursor