import { useNavigate } from "react-router";

const Recipie = ({ category }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = category;
    const navigate = useNavigate();
    const handelDescription = () =>{
        navigate(`/description/${idCategory}`);
    }
    return (
        <div>
            {/* adding card to show */}
            <div className="flex flex-col bg-yellow-500 rounded-4xl w-96 shadow-sm p-6">
                <figure className=" rounded-full">
                    <img
                        src={strCategoryThumb}
                        alt="cooking_picture"
                        className="rounded-full p-10 object-cover bg-base-100" />
                </figure>
                <div className="card-body items-center text-center flex-grow text-white">
                    <h2 className="card-title text-3xl">{strCategory}</h2>
                    <p className="my-4 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque illum voluptates!</p>
                    <div className="card-actions">
                        <button className="btn bg-white text-yellow-500">Buy Now</button>
                        <button onClick={handelDescription} className="btn bg-white text-yellow-500">Description</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipie;