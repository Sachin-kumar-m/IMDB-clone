import { useState, useEffect } from "react";
// Consts
import { options, BASE_URL, APIKEY } from "../constant.js"

function Movies() {

  const [movies, setMovies] = useState([])
  const [pageNumber, setPages] = useState(1)

  const handelNext = () => {
    if (pageNumber === 500) return
    setPages(pageNumber + 1)
  }
  const handelPrev = () => {
    if (pageNumber === 1) return
    setPages(pageNumber - 1)
  }
  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${APIKEY}&page=${pageNumber}`, options)
      .then(res => res.json())
      .then(json => setMovies(json.results)) //doing .results bcz json is an object and the useState variable is an array
      .catch(err => console.error('error:' + err));
  };

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, [pageNumber])

  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">Trending Movies</div>
      <div className="flex flex-wrap">
        {movies.map((movie, index) => {
          const { title = "", name = "", poster_path: path } = movie;
          return (
            <div className="mx-[20px] mb-[12px] flex space-x-8" key={index}>
              <div
                className="w-[160px] h-[30vh] bg-cover rounded-[1rem] m-4 md:h-[40vh] md:w-[180px] flex flex-col-reverse hover:shadow-black hover:scale-110 duration-300 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    `url(${BASE_URL}${path})`
                }}
              >
                <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full rounded-b-[1rem]">{title || name}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-around space-x-5 my-5">
        <button disabled={pageNumber === 1} className={pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer hover:scale-150 duration-100"} onClick={handelPrev}>Previous</button>
        <button className="cursor-pointer hover:scale-150 duration-100" onClick={handelNext}>Next</button>
      </div>
    </div>
  );
}

export default Movies