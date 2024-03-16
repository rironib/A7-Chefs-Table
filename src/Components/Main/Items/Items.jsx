import Item from "./Item/Item.jsx";
import {useEffect, useState} from "react";


const Items = ({handleWantToCook}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, []);
    return (
        <>
            <div className='lg:w-7/12 grid lg:grid-cols-2 gap-4'>
                {
                    items.map((item) => <Item key={item.id} handleWantToCook={handleWantToCook} item={item}></Item>)
                }
            </div>
        </>
    );
};

export default Items;
