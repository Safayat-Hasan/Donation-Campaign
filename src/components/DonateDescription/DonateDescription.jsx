import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonateDescription = () => {
    const categories = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const category = categories.find(cate => cate.id === idInt);

    const handleAddDonation = () => {
        saveDonation(idInt);
        toast(`You have donated ${category.price} successfully`);
    }

    return (
        <div className="relative">
            <img className="w-full mt-[83px]" src={category.picture} alt="" />
            <div className="w-[200px] absolute z-30 top-[190px] md:top-[380px] lg:top-[690px] left-3 md:left-9">
                <button style={{ backgroundColor: `${category.category_bg}` }} onClick={handleAddDonation} className="px-6 py-4 font-semibold text-xl rounded absolute text-white w-full">Donate {category.price}</button>
            </div>
            <div className=" brightness-[.4] h-[95px] md:h-[128px] lg:h-[155px] absolute z-10 top-[170px] md:top-[350px] lg:top-[640px] bg-[#0B0B0B80] w-full"><h2> </h2></div>
            <p className="mt-[56px] font-bold text-4xl">{category.title}</p>
            <p className="mt-[24px] md:mb-[100px]">{category.description}</p>
            <ToastContainer
                position="top-center"
                autoClose={5000} 
            />
        </div>
    );
};

export default DonateDescription;