
import React, { useState } from 'react'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import chair from "../../assets/chair.jpg";
import chair1 from "../../assets/chair1.jpeg";
import chair2 from "../../assets/chair2.jpg";
import chair4 from "../../assets/chair4.jpg";

const images = [
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/2/200/300",
  "https://picsum.photos/id/3/200/300",
  "https://picsum.photos/id/4/200/300",
  "https://picsum.photos/id/5/200/300",
  "https://picsum.photos/id/6/200/300",
  "https://picsum.photos/id/7/200/300",
  "https://picsum.photos/id/8/200/300",
  "https://picsum.photos/id/9/200/300",
  "https://picsum.photos/id/10/200/300",
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  chair,
  chair1,
  chair2,
  chair4,
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
      <div className="relative w-full h-[450px]">
        <main className="w-full h-full">
          <div className="absolute inset-0 flex items-center justify-between p-10 m-5">
            <button onClick={handleNextImg} className='text-2xl cursor-pointer  bg-white p-2 rounded-full shadow-md'>
              <GrCaretNext />
            </button>

            <div className="w-full h-full">
              <img src={currentImg} alt="" className='w-full h-full object-cover'/>
            </div>

            <button onClick={handlePreviousImg} className='text-2xl cursor-pointer  bg-white p-2 rounded-full shadow-md'>
              <GrCaretPrevious />
            </button>
          </div>
        </main>
      </div>

    </>
  )
}

export default ImageSlider
