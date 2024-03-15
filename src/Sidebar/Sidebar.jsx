import Cooking from "./Cooking/Cooking.jsx";
import WantToCook from "./WantToCook/WantToCook.jsx";


const Sidebar = () => {
    return (
        <div className='lg:w-5/12 border-2 rounded-3xl py-5'>
            <WantToCook/>
            <Cooking/>
        </div>
    );
};

export default Sidebar;
