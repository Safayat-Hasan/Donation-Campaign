import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";


const Home = () => {
    return (
        <div className="w-full mx-auto">
            <Banner></Banner>
            <CategoryList className="mt-[100px] mb-[150px]"></CategoryList>
        </div>
    );
};

export default Home;