//hooks
import { useState, useEffect } from "react";
// Consts
import { options, BASE_URL, APIKEY, WATCHLIST_KEY,getWatchlist} from "../constant.js"


function Movies() {

  const [movies, setMovies] = useState([])
  const [pageNumber, setPages] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const [watchList, setList] = useState(getWatchlist())
  const getMovies = () => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${APIKEY}&page=${pageNumber}`, options)
      .then(res => res.json())
      .then(json => setMovies(json.results)) //doing .results bcz json is an object and the useState variable is an array
      .catch(err => console.error('error:' + err))
      .finally(setLoading(false))
  };

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, [pageNumber])

  const handelNext = () => {
    if (pageNumber === 500) return
    setPages(pageNumber + 1)
  }
  const handelPrev = () => {
    if (pageNumber === 1) return
    setPages(pageNumber - 1)
  }
  const isInLocalStorage = (movieID, watchListMovies) => {
    return watchListMovies.find((movie) => movie.id === movieID)
  }
  const setWatchlist = (movieObj) => {
    const currentItems = getWatchlist()
    // console.log(JSON.parse(currentItems))

    let value;
    if (currentItems) {
      value = currentItems
    }
    else {
      value = []
    }
    if (isInLocalStorage(movieObj.id, value)) return
    value = [...value, {
      title: movieObj.title || movieObj.name,
      id: movieObj.id,
      path: movieObj.poster_path,
      avg: movieObj.vote_average,
      gener: movieObj.genre_ids,
      date : movieObj.release_date||movieObj.first_air_date
    },]
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(value))
    setList(value)
  }

  


  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">Trending Movies</div>
      {isLoading ? <div className="loader"></div> : (
        <div className="flex flex-wrap">
          {movies.map((movie, index) => {
            const { title = "", name = "", poster_path: path, } = movie;
            return (
              <div key={index}>
                <div className="mx-[20px] mb-[12px] flex space-x-8">
                  <div onClick={() => setWatchlist(movie)} 
                    className="cursor-pointer w-[160px] relative h-[30vh] bg-cover rounded-[1rem] m-4 md:h-[40vh] md:w-[180px] flex flex-col-reverse hover:shadow-black hover:scale-110 duration-300 hover:shadow-2xl"
                    style={{
                      backgroundImage:
                        `url(${BASE_URL}${path})`
                    }}
                  >
                    <div className="p-2 bg-black absolute right-1 top-1 text-2xl rounded-[10px]"><button className="hover:scale-150 duration-200 ">{isInLocalStorage(movie.id,watchList)? "❤️":"🤍"}</button></div>
                    <div className="flex items-center justify-center text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full rounded-b-[1rem]">{title || name}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="flex justify-around space-x-5 my-5">
        <button disabled={pageNumber === 1} className={pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer hover:scale-150 duration-100"} onClick={handelPrev}>Previous</button>
        <p>{pageNumber}</p>
        <button className="cursor-pointer hover:scale-150 duration-100" onClick={handelNext}>Next</button>
      </div>
    </div>
  );
}

export default Movies