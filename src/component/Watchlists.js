
import { BASE_URL, WATCHLIST_KEY } from "../constant"

function Watchlist() {

    const getWatchlist = () => {
        return localStorage.getItem(WATCHLIST_KEY)
    }

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
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    {items.map(
                        ({
                            id,
                            title = "",
                            voteAverage,
                            path,
                        }) => (
                            <tr
                                key={id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        className="w-[160px] h-[30vh] min-h-[200px]"
                                        src={`${BASE_URL}/${path}`}
                                        alt={title}
                                    />
                                </td>
                                <td className="text-xl px-6 py-4 items-center">
                                    {title}
                                </td>
                                <td className="text-xl px-6 py-4">{voteAverage}</td>
                                <td className="text-xl px-6 py-4">
                                </td>
                                <td
                                    className="text-xl space-x-1 px-6 py-4 text-right cursor-pointer text-red-200 hover:text-red-500 hover:scale-110"

                                >
                                    <span>Delete</span>
                                    <span>🗑️</span>
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