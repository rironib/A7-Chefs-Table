

const WantToCook = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto font-semibold text-xl border-b text-center py-2 my-2'>
                Want to Cook: 01
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
                <tbody>
                    <tr className='bg-gray-100 *:text-left *:px-2 *:py-2'>
                        <td className='font-semibold text-black'>1</td>
                        <td>Chicken Caesar Salad</td>
                        <td>20 minutes</td>
                        <td>400 calories</td>
                        <td>
                            <button className='bg-green-500 px-3 py-2 font-lexend text-black rounded-3xl'>Preparing</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
);
};

export default WantToCook;
