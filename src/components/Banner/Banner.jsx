import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <img className="lg:h-[750px] banner-image" src="/Resources/donation.png" alt="" />
            
            <div className="overlay"></div>

            <div className="banner-content">
                <h2 className="text-black text-5xl text-center font-bold lg:mt-32">I Grow By Helping People In Need</h2>
                <div className="max-w-[470px] mx-auto">
                    <input className="mt-10 w-[360px] h-[50px] rounded-lg border text-sm" type="text" placeholder="     Search here...." name="search" id="" />
                    <button className="w-[110px] h-[50px] text-base font-semibold bg-[#FF444A] text-white rounded-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;