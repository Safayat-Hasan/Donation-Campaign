import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";


const CategoryList = () => {
    const categories = useLoaderData();
    return (
        <div className="mt-[100px] mb-[150px]">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    categories.map(cate => <Category key={cate.id} cate={cate}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;