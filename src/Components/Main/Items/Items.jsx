import Item from "./Item/Item.jsx";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";


const Items = ({handleWantToCook}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, []);
    return (
        <>
            <div className='lg:w-7/12 grid sm:grid-cols-2 gap-4'>
                {
                    items.map((item) => <Item key={item.id} handleWantToCook={handleWantToCook} item={item}></Item>)
                }
            </div>
        </>
    );
};

Items.propTypes = {
    handleWantToCook: PropTypes.func    
}
export default Items;
