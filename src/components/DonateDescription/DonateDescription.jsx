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
        toast('You have donated successfully');
    }

    return (
        <div className="relative">
            <img className="w-full mt-[83px]" src={category.picture} alt="" />
            <div className="absolute top-[670px] left-9">
                <button style={{ backgroundColor: `${category.category_bg}` }} onClick={handleAddDonation} className="px-6 py-4 font-semibold text-xl rounded absolute text-white">Donate {category.price}</button>
            </div>
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