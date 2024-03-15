import Banner from "../Banner/Banner.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Items from "./Items/Items.jsx";
import Recipes from "./Recipes/Recipes.jsx";


const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <Recipes/>
            <div className='flex flex-col lg:flex-row gap-6 mb-12'>
                <Items></Items>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;
