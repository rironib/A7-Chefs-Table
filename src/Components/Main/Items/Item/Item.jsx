import { FaFire } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import PropTypes from "prop-types";

const Item = ({item, handleWantToCook}) => {
    const {name, description, ingredients, time, calories, image} = item;
    return (
            <div className="card bg-base-100 border-2">
                <figure className="p-6">
                    <img src={image}
                         className="w-full rounded-xl"/>
                </figure>
                <div className="card-body p-6 pt-0">
                    <h2 className="font-semibold text-xl">{name}</h2>
                    <p className='py-2 fira-sans text-[#878787]'>{description}</p>
                    <hr/>
                    <p className='font-medium'>Ingredients: {ingredients.length}</p>
                    <ul className='list-disc list-inside fira-sans text-[#878787]'>
                        { ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                    </ul>
                    <hr/>
                    <div className='flex flex-col lg:flex-row gap-4 fira-sans text-[#878787] py-2'>
                        <p className='flex items-center gap-2'><LuClock3/> {time} minutes</p>
                        <p className='flex items-center gap-2'><FaFire/> {calories} calories</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleWantToCook(item)}
                                className="btn bg-green-500 px-6 py-2 min-h-10 h-10 rounded-3xl">
                            Want to Cook
                        </button>
                    </div>
                </div>
            </div>
    );
};

Item.propTypes = {
    item: PropTypes.object,
    handleWantToCook: PropTypes.func
}
export default Item;
