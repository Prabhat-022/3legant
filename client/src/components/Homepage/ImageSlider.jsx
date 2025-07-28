
import React, { useState } from 'react'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import banner from "../../assets/shopping_banner.jpg";
import banner2 from "../../assets/shopping_banner2.jpg";
import banner3 from "../../assets/shopping_banner3.jpg";
import banner4 from "../../assets/shopping_banner4.jpg";

const images = [
  banner,
  banner2,
  banner3,
  banner4,
]


const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(images[0])

  const handleNextImg = () => {
    setCurrentImg((prev) => {
      const index = images.indexOf(prev)
      return images[(index + 1) % images.length]
    })
  }
  const handlePreviousImg = () => {
    setCurrentImg((prev) => {
      const index = images.indexOf(prev)
      return images[(index - 1 + images.length) % images.length]
    })
  }

  return (
    <>
      <div className="relative w-full h-[450px]  shadow-lg">
        <main className="w-full h-full flex items-center justify-between p-10 m-5">
          <button onClick={handlePreviousImg} className='text-2xl cursor-pointer absolute top-1/2 left-5 z-10 bg-white p-2 rounded-full shadow-md'>
            <GrCaretPrevious />
          </button>

          <img src={currentImg} alt="" className='absolute inset-0 w-full h-full object-cover' />

          <button onClick={handleNextImg} className='text-2xl cursor-pointer absolute top-1/2 right-5 z-10 bg-white p-2 rounded-full shadow-md'>
            <GrCaretNext />
          </button>
        </main>
      </div>

    </>
  )
}

export default ImageSlider
