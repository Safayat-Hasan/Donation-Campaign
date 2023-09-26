import { useLoaderData, useParams } from "react-router-dom";


const DonateDescription = () => {
    const categories = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const category = categories.find(cate => cate.id === idInt);
    return (
        <div>
            <img className="w-full mt-[83px]" src={category.picture} alt="" />
            <p className="mt-[56px] font-bold text-4xl">{category.title}</p>
            <p className="mt-[24px] mb-[122px]">{category.description}</p>
        </div>
    );
};

export default DonateDescription;