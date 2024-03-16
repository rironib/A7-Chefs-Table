import PropTypes from "prop-types";

const ItemToCook = ({item, idx, handlePrepareBtn, handleRemoveFromCook}) => {
    const {name, time, calories} = item;
    let serialNo = idx + 1;
    return (
            <tbody>
            <tr className='bg-gray-100 *:text-left *:md:px-2 *:py-2'>
                <td className='font-semibold text-black'>{serialNo}</td>
                <td>{name}</td>
                <td>{time} minutes</td>
                <td>{calories} calories</td>
                <td>
                    <button onClick={() => {
                        handlePrepareBtn(item); handleRemoveFromCook(item.id);
                    }}
                            className='bg-green-500 px-3 py-2 font-lexend text-black rounded-3xl'>
                        Preparing
                    </button>
                </td>
            </tr>
            </tbody>
    );
};

ItemToCook.propTypes = {
    item: PropTypes.array,
    idx: PropTypes.number,
    handlePrepareBtn: PropTypes.func,
    handleRemoveFromCook: PropTypes.func,
}

export default ItemToCook;
