import banner from '/banner.png'

const Banner = () => {
    return (
            <div className="w-full min-h-[500px] flex justify-center items-center bg-no-repeat bg-cover bg-center my-8 rounded-2xl" style={{backgroundImage: `url(${banner})`}}>
                <div className="w-10/12 lg:w-9/12 mx-auto py-20 lg:py-0 text-center text-white">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="py-6 mb-6">
                        Unleash your culinary potential with our personalized cooking class! Whether you're a novice or a seasoned chef, we cater to your skills and tastes for an unforgettable gastronomic journey.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center gap-6'>
                        <button className="btn bg-green-500 px-6 rounded-3xl">Explore Now</button>
                        <button className="btn bg-transparent hover:bg-transparent text-white px-6 rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;
