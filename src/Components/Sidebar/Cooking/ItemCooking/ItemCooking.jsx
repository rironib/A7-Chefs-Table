import PropTypes from "prop-types";

const ItemCooking = ({item, idx}) => {
    const {name, time, calories} = item;
    let serialNo = idx + 1;
    return (
        <tbody>
        <tr className='bg-gray-100 *:text-left *:md:px-2 *:py-2 fira-sans'>
            <td className='font-semibold text-black'>{serialNo}</td>
            <td>{name}</td>
            <td>{time} minutes</td>
            <td>{calories} calories</td>
        </tr>
        </tbody>
    );
};

ItemCooking.propTypes = {
    item: PropTypes.array,
    idx: PropTypes.number
}

export default ItemCooking;
