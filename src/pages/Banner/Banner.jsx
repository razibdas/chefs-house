
import Navbar from '../Navbar/Navbar';
import  './style.css'

const Banner = () => {
    return (
        <div>
            
            <div className="relative h-full w-full bg-[#EEDDCC] ">
                <img
                    src="https://i.ibb.co/HKMC1C9/image.png"
                    alt="image 1"
                    style={{ height: '90vh' }}
                    className="w-full "
                />
                <div className="absolute inset-0 h-full w-full place-items-center bg-black/60 text-center items-center ">
                <Navbar></Navbar>
                    <div className='lg:mt-56 mt-10'>
                        <p className='text-4xl text-white'>Discover an exceptional cooking <br /> class tailor for you! </p>

                        <p className='mt-4 text-white'>Introducing our bespoke cooking class, meticulously crafted to suit your tastes, <br /> preferences, and skill level.</p>
                        <div className='mt-6'>
                            <button className='btn btn-btn  rounded-full  '>Explore Now</button>
                            <button className="btn btn-outline text-white ml-4 rounded-full">Our Feedback</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;







