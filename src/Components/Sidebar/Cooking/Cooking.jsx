import ItemCooking from "./ItemCooking/ItemCooking.jsx";
import PropTypes from "prop-types";


const Cooking = ({cookingItem}) => {
    const cookingTime = cookingItem.reduce((acc, item) => acc + parseInt(item.time), 0);
    const totalCalories = cookingItem.reduce((acc, item) => acc + parseInt(item.calories), 0)
    return (
        <div>
            <div className='w-10/12 mx-auto font-semibold text-xl border-b text-center py-2'>
                Currently Cooking: {cookingItem.length}
            </div>
            <table className='w-full text-gray-500'>
                <thead>
                    <tr className='*:text-left *:px-2 *:py-3 fira-sans'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                {
                    cookingItem.map((item,idx) =>
                        <ItemCooking key={idx} idx={idx} item={item}></ItemCooking>)
                }
                <tbody>
                    <tr className='*:text-left *:px-3 *:py-2 font-medium'>
                        <td></td>
                        <td></td>
                        <td>Total Time = {cookingTime} minutes
                        </td>
                        <td>Total Calories = {totalCalories} calories
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Cooking.propTypes = {
    cookingItem: PropTypes.array
}

export default Cooking;
