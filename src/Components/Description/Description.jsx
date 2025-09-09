import { useLoaderData } from "react-router";
import Descript from "./Descript";

const Description = () => {
    const description = useLoaderData();
        const descripts = description.categories;
    return (
        <div>
            {
                descripts.map(descript=>
                    <Descript descript={descript} key={descript.idCategory}/>
                )
            }
        </div>
    );
};

export default Description;