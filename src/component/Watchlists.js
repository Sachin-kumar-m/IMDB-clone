
import React from "react"
import { useState, } from "react"
import { BASE_URL, getWatchlist, WATCHLIST_KEY } from "../constant"


function Watchlist() {

    let [watchlist, setMedia] = useState(getWatchlist())
    const removeMediaFromLocalStorage = (mediaId) => {
        if (watchlist.length === 1) {
            localStorage.removeItem(WATCHLIST_KEY)
            setMedia([])
            return
        }
        let updatedWatchlist = watchlist.filter((media) => media.id !== mediaId);
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updatedWatchlist));
        setMedia(updatedWatchlist);
    }   

    const sortByID = () => {
        let temp = [...watchlist]
        const updatedWatchlist = temp.sort((a, b) => a.id - b.id)
        console.log(updatedWatchlist)
        setMedia(updatedWatchlist)
    }

    return (
        <>
            {watchlist.length === 0 ? <div className="h-[100%] w-[100%] absolute flex items-center justify-center text-3xl">Watchlist is Empty</div> : (
                <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-[42px]">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-center">
                                <th scope="col" id="sort" className="text-xl px-6 py-3 w-40 hover:cursor-pointer" onClick={()=>sortByID()}>
                                    <span>ID</span>
                                </th>
                                <th scope="col" className="text-xl px-6 py-3">
                                    Poster
                                </th>
                                <th scope="col" className="text-xl px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="text-xl px-6 py-3">
                                    Release Date
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
                            {watchlist.map(
                                ({
                                    id,
                                    title = "",
                                    avg,
                                    path,
                                    gener,
                                    date,
                                }) => (
                                    <tr
                                        key={id}
                                        className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td className="text-xl px-6 py-4 text-center">
                                            {id}
                                        </td>
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
                                        <td className="text-xl px-6 py-4 text-center">
                                            {date}
                                        </td>
                                        <td className="text-xl px-6 py-4 text-center">{avg}</td>
                                        <td className="text-xl px-6 py-4">{gener}
                                        </td>
                                        <td
                                            className="text-xl space-x-1 px-6 py-4 text-red-200"

                                        >
                                            <div onClick={() => removeMediaFromLocalStorage(id)} className="hover:scale-125 duration-200 hover:text-red-700 cursor-pointer">
                                                <span>Delete</span>
                                                <span >🗑️</span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </>

    )

}



export default Watchlist