import Cooking from "./Cooking/Cooking.jsx";
import WantToCook from "./WantToCook/WantToCook.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

const Sidebar = ({wantToCook, handleRemoveFromCook}) => {
    const [cookingItem, setCookingItem] = useState([])
    const handlePrepareBtn = (item) => {
        setCookingItem([...cookingItem, item]);
    }
    return (
        <div className='lg:w-5/12 border-2 rounded-3xl py-5'>
            <WantToCook wantToCook={wantToCook} handleRemoveFromCook={handleRemoveFromCook} handlePrepareBtn={handlePrepareBtn}/>
            <Cooking cookingItem={cookingItem}/>
        </div>
    );
};

Sidebar.propTypes = {
    wantToCook: PropTypes.array,
    handleRemoveFromCook: PropTypes.func,
    cookingItem: PropTypes.array
}

export default Sidebar;
