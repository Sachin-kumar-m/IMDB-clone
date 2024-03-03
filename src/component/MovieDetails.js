import React, { useEffect, useState } from 'react'
import { APIKEY } from '../constant'
import { useSelector } from 'react-redux'



function MovieDetails() {

    const [actorList, setActorList] = useState([])
    const detialsFromStore = useSelector((store) => store.Watchlist)
    const id = detialsFromStore[0].id
    async function getActors() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${APIKEY}`)
        const json = await response.json()
        setActorList(json.cast)
    }

    useEffect(() => {
        getActors()
    },[])
    console.log(actorList);
    return (
        <div className="h-[20vh] md:h-[60vh] bg-center flex items-end">
            {detialsFromStore.map(movie => {
                return <div><h1>{movie.title}</h1>
                    {actorList.map((actor)=><h1 key={actor.cast_id}>{actor.name}</h1>)}
                </div>
           })}
        </div>
    )
}

export default MovieDetails