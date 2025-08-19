import React from 'react'

const About = () => {
  return (
    <div className=" h-[100vh] flex flex-col overflow-hidden overflow-y-auto lg:flex lg:flex-2 lg:flex-row lg:mx-24 lg:gap-4 lg:my-4">
      <div className="m-1 shadow p-2 mb-4 lg:w-1/2">
        <h1 className='font-bold text-xl lg:text-2xl p-4'>ABOUT US</h1>
        <div className="text-justify p-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis ut sit, quo aut cum autem adipisci, quisquam saepe a aspernatur ullam culpa voluptatum sequi dicta possimus ipsa sunt tempore.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus non iste laboriosam molestiae? Qui molestiae praesentium excepturi ullam labore accusamus, placeat incidunt facere voluptatem asperiores facilis? Facilis, pariatur ipsum?</p>
        </div>

        <div className="p-4">
          <button className='p-2 mx-4 px-4 rounded bg-[#070808] text-white font-semibold hover:bg-[#000000]'>Now more</button>
          <button className='p-2 mx-4 px-4 rounded bg-[#070808] text-white font-semibold hover:bg-[#000000]'>Shop Now</button>
        </div>
      </div>

      {/* companies details  */}

      <div className="flex flex-col m-4 my-4 p-2 gap-4 lg:w-1/2">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-[150px] h-[110px] shadow-[0px_0px_3px_0px_#000000] p-4 text-center">
            <h1 className='font-bold text-3xl'>100+</h1>
            <p className='text-sm'>Companies</p>
          </div>

          <div className="w-[150px] h-[110px] shadow-[0px_0px_3px_0px_#000000] p-4 text-center">
            <h1 className='font-bold text-3xl'>100+</h1>
            <p className='text-sm'>Years of Experience</p>
          </div>

        </div>

        <div className="flex gap-2 items-center justify-center">
          <div className="w-[150px] h-[110px] shadow-[0px_0px_3px_0px_#000000] p-4 text-center">
            <h1 className='font-bold text-3xl'>100+</h1>
            <p className='text-sm'>Products</p>
          </div>

          <div className="w-[150px] h-[110px] shadow-[0px_0px_3px_0px_#000000] p-4 text-center">
            <h1 className='font-bold text-3xl'>100+</h1>
            <p className='text-sm'>Customers</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default About
