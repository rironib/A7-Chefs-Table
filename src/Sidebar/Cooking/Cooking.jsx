

const Cooking = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto font-semibold text-xl border-b text-center py-2'>
                Currently Cooking: 02
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
                <tbody>
                    <tr className='bg-gray-100 *:text-left *:px-2 *:py-2 fira-sans'>
                        <td className='font-semibold text-black'>1</td>
                        <td>Chicken Caesar Salad</td>
                        <td>20 minutes</td>
                        <td>400 calories</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='bg-gray-100 *:text-left *:px-2 *:py-2 fira-sans'>
                        <td className='font-semibold text-black'>2</td>
                        <td>Chicken Caesar Salad</td>
                        <td>20 minutes</td>
                        <td>400 calories</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='*:text-left *:px-3 *:py-2 font-medium'>
                        <td></td>
                        <td></td>
                        <td>Total Time =
                            45 minutes
                        </td>
                        <td>Total Calories =
                            1050 calories
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cooking;
