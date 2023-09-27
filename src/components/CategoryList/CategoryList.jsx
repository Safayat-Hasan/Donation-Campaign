import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
// import { useState } from "react";


const CategoryList = ({ input }) => {
    const categories = useLoaderData();
    // const [displayCates, setDisplayCates] = useState([]);

    console.log(input);


    const handleFilter = (value) => {
        if (value === 'all') {
            return categories;
        }
        else if (value === 'health') {
            const health = categories.filter(cate => cate.category === 'Health');
            return health;
        }
        else if (value === 'education') {
            const education = categories.filter(cate => cate.category === 'Education');
            return education;
        }
        else if (value === 'clothing') {
            const clothing = categories.filter(cate => cate.category === 'Clothing');
            return clothing;
        }
        else if (value === 'food') {
            const food = categories.filter(cate => cate.category === 'Food');
            return food;
        }
        else {
            return categories;
        }
    }

    const finalShow = handleFilter(input);


    return (
        <div className="mt-[100px] mb-[150px]">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    finalShow.map(cate => <Category key={cate.id} cate={cate}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;