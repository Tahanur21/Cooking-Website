import { NavLink } from "react-router";

const Home = () => {
    return (
        <div className="flex justify-between items-center gap-8 bg-yellow-400 p-20 rounded-2xl mt-6">
            <div className="space-y-6 text-white">
                <h1 className="text-3xl font-semibold">Welcome To Cooking Stoke</h1>
                <p className="my-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Optio adipisci sunt ut tempore sint, officia perferendis officiis 
                    facilis magni vitae pariatur cumque fuga, in modi 
                    dignissimos molestiae consectetur autem fugit sit.</p>
                    <NavLink to={`/recipie`} className="btn text-yellow-400 font-semibold">Get Start</NavLink>
            </div>
            <div className="w-7xl">
                <img className="w-ful rounded-2xl" src="/src/assets/images/Banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;