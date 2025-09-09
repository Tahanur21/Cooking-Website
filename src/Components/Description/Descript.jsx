const Descript = ({descript}) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = descript;
    return (
        <div>
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
        </div>
    );
};

export default Descript;