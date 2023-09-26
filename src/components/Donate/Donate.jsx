

const Donate = ({ donate }) => {
    const { category, title, picture, price, card_bg, text_button_bg, category_bg } = donate;
    return (
        <div>
            <div style={{ backgroundColor: `${card_bg}` }} className={`shadow-xl rounded-lg lg:flex`}>
                <div>
                    <figure><img src={picture} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <button style={{ backgroundColor: `${text_button_bg}`, color: `${category_bg}` }} className={`p-[10px] mr-auto rounded card-title text-sm font-medium bg-[${text_button_bg}]  text-[${category_bg}]`}>{category}</button>
                    <p className={`text-2xl font-semibold card-title`}>{title}</p>
                    <p className="font-semibold" style={{ color: `${category_bg}` }}>{price}</p>
                    <button style={{ backgroundColor: `${category_bg}` }} className="font-semibold text-lg text-white px-4 py-2 rounded mr-auto">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Donate;