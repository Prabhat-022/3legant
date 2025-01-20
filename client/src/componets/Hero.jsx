import ImageSlider from '../componets/ImageSlider';
import cauch from '../assets/cauch1.jpg';
import NewArrivals from '../componets/NewArrivals';
import Servises from './Servises';
import Offers from './Offers';
import Newsletter from './Newsletter';
import sofa from '../assets/sofa.jpg';
import drawer from '../assets/drawer.jpg';
import breadtoster from '../assets/bread-toster.jpg';
import Shopnow from '../pages/Shopnow';


const Hero = () => {
  return (
    <>
      <ImageSlider />

      <div className="m-2 p-2 mx-24">

        <div className=" flex items-center justify-between gap-4 px-4 m-4">
          <div className="m-4 ">
            <h1 className='text-3xl font-bold'>Simply Unique/</h1>
            <h1 className='text-3xl font-bold'>Simply Better.</h1>
          </div>

          <div className="">
            <p className=''><span className='font-bold'>3legant</span>
              is a gift & decorations store based in HCMC, Vietnam, Est since 2019
            </p>

          </div>
        </div>

        {/* //product section */}
        <div className="flex gap-2 p-4 h-[500px]">

          <div className="shadow relative w-[60%] h-[550px]">
            <img src={sofa} alt="" className='w-full h-full' />
            <div className="absolute top-4 left-4 flex items-center flex-col">
              <h1 className='text-xl font-bold font-serif'>Living Room</h1>
              <Shopnow />
            </div>
          </div>

          <div className="flex flex-col gap-2  h-[550px] w-[40%] ">
            <div className="">
              <div className="shadow relative w-full h-[275px] mb-4">
                <img src={drawer} alt="" className='w-full h-[275px] ' />
                <div className="absolute top-4 left-4 flex items-center flex-col h-[200px]">
                  <h1 className='text-xl font-bold font-serif'>Bedroom</h1>
                  <Shopnow className="text-sm" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="shadow relative h-[275px] mt-4">
                <img src={breadtoster} alt="" className='w-full h-[275px]' />
                <div className="absolute bottom-4 left-4 flex items-center flex-col">
                  <h1 className='text-xl font-bold font-serif'>Kitchen</h1>
                  <Shopnow />
                </div>
              </div>
            </div>


          </div>

        </div>




      </div>
      <NewArrivals />
      <Servises />

      <Offers />

    </>
  )
}

export default Hero
