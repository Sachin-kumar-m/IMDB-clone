
import React from "react"
import { useState, useEffect } from "react"
import { APIKEY, BASE_URL, getWatchlist, options, WATCHLIST_KEY } from "../constant"


function Watchlist() {

    const [watchlist, setMedia] = useState(getWatchlist())
    const [generMap, setGeners] = useState({})
    const [isLoading, setLoading] = useState(true)

    const getGeners = () => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${APIKEY}`, options)
            .then((res) => res.json())
            .then((json) => {
                const foo = json.genres;
                const temp = foo.reduce((acc, generObj) => {
                    const { id, name } = generObj
                    return { ...acc, [id]: name }
                }, {})
                setGeners(temp)
            })
            .catch((err) => console.error('error:' + err))
            .finally(() => {
                setTimeout(() => {
                  setLoading(false)
                },300)
              })
    }
    useEffect(() => {
        getGeners()
    }, [])
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
    const deleteAll = () => {
        localStorage.removeItem(WATCHLIST_KEY)
        setMedia([])
    }
    const sortByID = () => {
        let temp = [...watchlist]
        const updatedWatchlist = temp.sort((a, b) => a.id - b.id)
        // console.log(updatedWatchlist)
        setMedia(updatedWatchlist)
    }
    const sortByTitle = () => {
        let temp = [...watchlist]
        const updatedWatchlist = temp.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        })
        // console.log(updatedWatchlist)
        setMedia(updatedWatchlist)
    }
    if (isLoading) {
        return <div className="loader absolute top-[50%]"></div>
    }
    else {
        return (
            <>
                {watchlist.length === 0 ? <div className="h-[100%] w-[100%] absolute flex items-center justify-center text-3xl">Watchlist is Empty</div> : (
                    <div className="relative overflow-x-auto mx-auto  shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-[42px]">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="text-center">
                                    <th scope="col" id="sort" className="text-xl px-6 py-3 w-40 hover:cursor-pointer" onClick={() => sortByID()}>
                                        <span>ID</span>
                                    </th>
                                    <th scope="col" className="text-xl px-6 py-3">
                                        Poster
                                    </th>
                                    <th scope="col" className="text-xl px-6 py-3 cursor-pointer w-[15rem]" id="titleSort" onClick={() => sortByTitle()}>
                                        <span>title</span>
                                    </th>
                                    <th scope="col" className="text-xl px-6 py-3 w-[12rem]">
                                        Release Date
                                    </th>
                                    <th scope="col" className="text-xl px-6 py-3 w-[15rem]">
                                        Average Rating
                                    </th>
                                    <th scope="col" className="text-xl px-6 py-3">
                                        Genre(s)
                                    </th>
                                    <th scope="col" id="delete" onClick={() => deleteAll()} className="text-xl px-6 py-3 hover:cursor-pointer w-52 hover:text-red-700"><span>Delete</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {watchlist.map(
                                    ({
                                        id,
                                        title = "",
                                        avg,
                                        path,
                                        generID=[],
                                        date = "N/A",
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
                                            <td className="text-xl px-6 py-4 text-center w-20">
                                                {title}
                                            </td>
                                            <td className="text-xl px-6 py-4 text-center">
                                                {date}
                                            </td>
                                            <td className="text-xl px-6 py-4 text-center">{avg}</td>
                                            <td className="text-xl px-6 py-4 max-w-[8rem]">{generID.map(geners=>generMap[geners]).join(", ")}
                                            </td>
                                            <td
                                                className="text-xl space-x-1 px-6 py-4 text-red-200"

                                            >
                                                <div onClick={() => removeMediaFromLocalStorage(id)} className="hover:scale-125 duration-200 hover:text-red-700 cursor-pointer">
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
                )}
            </>

        )
    }

}



export default Watchlist