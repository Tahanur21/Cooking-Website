import { useLoaderData } from "react-router";
import Recipie from "./Recipie";

const Recipies = () => {
    const categories = useLoaderData();
    const categorie = categories.categories
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 my-12">
            {
                categorie.map(category => 
                    <Recipie key={category.idCategory} category={category}/>
                )
            }
        </div>
    );
};

export default Recipies;