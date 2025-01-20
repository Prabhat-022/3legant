import Shopnow from '../pages/Shopnow';
import chair9 from '../assets/chair9.jpeg';

const Offers = () => {
    return (
        <>
            <div className="mx-24 p-2">
                <div className="m-2">
                    <div className="flex gap-4 items-center justify-between p-4">
                        <div className="w-1/2">
                            <img src={chair9} alt="" />
                        </div>
                        <div className="w-1/3 px-5 mx-3">
                            <h1 className='text-blue-500'>SALE UP TO 35% OFF</h1>
                            <h1 className='text-3xl font-bold font-serif'>HUNDREDS of New lower prices!</h1>
                            <p>it&apos;s more affordable than ever to give every room in your home a stylish makeover</p>
                            <Shopnow />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offers
