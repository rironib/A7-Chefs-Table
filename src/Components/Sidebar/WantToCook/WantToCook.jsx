import PropTypes from "prop-types";
import ItemToCook from "./ItemToCook/ItemToCook.jsx";

const WantToCook = ({wantToCook, handlePrepareBtn, handleRemoveFromCook}) => {
    return (
        <div>
            <div className='w-10/12 mx-auto font-semibold text-xl border-b text-center py-2 my-2'>
                Want to Cook: {wantToCook.length}
            </div>
            <table className='w-full mb-8 fira-sans text-gray-500'>
                <thead>
                    <tr className='*:text-left *:px-2 *:py-3'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    wantToCook.map((item, idx) =>
                        <ItemToCook
                            key={idx}
                            idx={idx}
                            item={item}
                            handlePrepareBtn={handlePrepareBtn}
                            handleRemoveFromCook={handleRemoveFromCook}
                        >
                        </ItemToCook>)
                }
            </table>
        </div>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.array,
    handlePrepareBtn: PropTypes.func,
    handleRemoveFromCook: PropTypes.func
}

export default WantToCook;
