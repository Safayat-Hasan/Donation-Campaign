

const Category = ({cate}) => {
    const {picture, category, title, card_bg, category_bg, text_button_bg} = cate;
    console.log(card_bg);
    return (
        <div>
            <div className={`bg-[${card_bg}] card card-compact bg-base-100 shadow-xl`}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button  className={`p-[10px] mr-auto rounded card-title text-sm font-medium bg-[${text_button_bg}]  text-[${category_bg}]`}>{category}</button>
                    <p className={`text-xl font-semibold card-title text-[${category_bg}]`}>{title}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Category;