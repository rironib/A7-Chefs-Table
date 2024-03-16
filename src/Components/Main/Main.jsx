import { useState } from "react";
import Banner from "../Banner/Banner.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Items from "./Items/Items.jsx";
import Recipes from "./Recipes/Recipes.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const [wantToCook, setWantToCook] = useState([]);
    const handleWantToCook = (item) => {
        const alreadyExists = wantToCook.find((i) => i.id === item.id)
        if (!alreadyExists){
            setWantToCook([...wantToCook, item])
        } else (toast.warn("Item already added!"))
    }
    const handleRemoveFromCook = (itemId) => {
        setWantToCook(wantToCook.filter((item) => item.id !== itemId))
    }
    return (
        <>
            <div className='w-11/12 max-w-[1280px] mx-auto'>
                <Banner></Banner>
                <Recipes/>
                <div className='flex flex-col lg:flex-row gap-6 mb-12'>
                    <Items handleWantToCook={handleWantToCook}></Items>
                    <Sidebar wantToCook={wantToCook} handleRemoveFromCook={handleRemoveFromCook}></Sidebar>
                </div>
            </div>
            <ToastContainer
                autoClose={2000}
            />
        </>
    );
};

export default Main;
