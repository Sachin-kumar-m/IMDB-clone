
import { BASE_URL,getWatchlist } from "../constant"

function Watchlist() {
   
    const showWatchlist = () => {
        const items = JSON.parse(getWatchlist())
        return items
    }
    let items;
    if (showWatchlist()) {
        items = showWatchlist()
    }
    else {
        items = []
    }
    return (
        <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-[42px]">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th scope="col" className="text-xl px-6 py-3">
                            Poster
                        </th>
                        <th scope="col" className="text-xl px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="text-xl px-6 py-3">
                            Average Rating
                        </th>
                        <th scope="col" className="text-xl px-6 py-3">
                            Genre(s)
                        </th>
                        <th scope="col" className="text-xl px-6 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(
                        ({
                            id,
                            title = "",
                            avg,
                            path,
                            gener,
                        }) => (
                            <tr
                                key={id}
                                className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4 flex justify-center items-center]">
                                    <img
                                        className="w-[160px] h-[30vh] min-h-[200px] rounded-2xl"
                                        src={`${BASE_URL}/${path}`}
                                        alt={title}
                                    />
                                </td>
                                <td className="text-xl px-6 py-4 text-center">
                                    {title}
                                </td>
                                <td className="text-xl px-6 py-4 text-center">{avg}</td>
                                <td className="text-xl px-6 py-4">{gener}
                                </td>
                                <td
                                    className="text-xl space-x-1 px-6 py-4 cursor-pointer text-red-200"

                                >
                                    <div className="hover:scale-125 duration-200 hover:text-red-700">
                                    <span>Delete</span>
                                    <span>🗑️</span>
                                    </div>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )

}



export default Watchlist