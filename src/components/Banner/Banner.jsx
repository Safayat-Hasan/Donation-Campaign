import { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import './Banner.css'

const Banner = () => {

    const [input, setInput] = useState('all');

    const handleSubmit = e => {
        e.preventDefault();
        setInput(e.target.search.value);
    }


    return (
        <div className="">
            <img className="lg:h-[750px] banner-image" src="/Resources/donation.png" alt="" />

            <div className="overlay"></div>

            <div className="banner-content">
                <h2 className="text-black text-5xl lg:w-[800px] text-center font-bold lg:mt-32">I Grow By Helping People In Need</h2>
                <form onSubmit={handleSubmit} className="max-w-[470px] mx-auto">
                    <input className="mt-10 w-[360px] h-[50px] rounded-lg border text-sm text-black" type="text" placeholder="     Search here...." name="search" id="" />
                    <input className="w-[110px] h-[50px] text-base font-semibold bg-[#FF444A] text-white rounded-lg" type="submit" value="Search" />
                </form>
            </div>
            <CategoryList input={input} className="mt-[100px] mb-[150px]"></CategoryList>
        </div>
    );
};

export default Banner;