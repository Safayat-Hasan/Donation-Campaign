import { NavLink } from "react-router-dom";


const Category = ({cate}) => {
    const {id, picture, category, title, card_bg, category_bg, text_button_bg} = cate;

    

    return (
        <div><NavLink to={`/description/${id}`}>
            <div style={{ backgroundColor: `${card_bg}` }} className={`card card-compact bg-base-100 shadow-xl`}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button style={{ backgroundColor: `${text_button_bg}`, color: `${category_bg}` }}  className={`p-[10px] mr-auto rounded card-title text-sm font-medium`}>{category}</button>
                    <p style={{ color: `${category_bg}` }} className={`text-xl font-semibold card-title`}>{title}</p>
                </div>
            </div></NavLink>
        </div>
    );
};

export default Category;