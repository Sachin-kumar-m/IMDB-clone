import { useState } from "react";
import { json } from "react-router-dom";
import {url,options} from "../constant.js"

function Movies() {

  const [movies, setMovies] = useState([])
  async function getMovies() {

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
      return json
  };
  const updateMovies = ()=>{
    setMovies(getMovies())
  }
updateMovies()

 
    return (
      <div>
        <div className="text-2xl my-8 font-bold text-center underline">
          Trending Movies
        </div>
        <div className="mx-[20px] mb-[12px] flex space-x-8">
          <div
            className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300"
            style={{
              backgroundImage:
                "url(https://m.media-amazon.com/images/S/pv-target-images/703c93b8ce2fc77bd7bbed52364161a25f1dc078efab6f5c9fbb2b82d042f89e._UR1920,1080_AGaverage_SX1080_FMwebp_.jpg)",
            }}
          >
            <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full">Aspirants</div>
          </div>
        </div>
      </div>
  );
}

export default Movies