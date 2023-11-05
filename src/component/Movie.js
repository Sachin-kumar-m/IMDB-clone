import { useState, useEffect } from "react";
// Consts
import { url, options, BASE_URL } from "../constant.js"

function Movies() {

  const [movies, setMovies] = useState([])
  const getMovies = () => {
    fetch(url, options)
      .then(res => res.json())
      .then((json)=>setMovies(json.results))
      .catch(err => console.error('error:' + err));
  };

  useEffect(() => {
    getMovies()
  }, [])
  
  console.log(movies)
  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">Trending Movies</div>
      <div className="flex flex-wrap">
        {movies.map((movi, index) => {
          return (
            <div className="mx-[20px] mb-[12px] flex space-x-8" key={index}>
              <div
                className="w-[160px] h-[30vh] bg-cover rounded-[1rem] m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 flex flex-col-reverse	"
                style={{
                  backgroundImage:
                    `url(${BASE_URL}/${movi.poster_path})`
                }}
              >
                <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full rounded-b-[1rem]">{movi.title||movi.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Movies