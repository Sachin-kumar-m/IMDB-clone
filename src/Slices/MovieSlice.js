import { createSlice } from "@reduxjs/toolkit";


const movie = createSlice({
    name: "Watchlist",
    initialState: [],
    reducers: {
        add(state, actions) {
            state.push(actions.payload)
        },
        remove(state, actions) {
            return state.filter((value) => {
                return value.id!==actions.payload
            })
        },
        deleteMovie(state) {
            state.length = 0
        }
    }
})


export const { add,remove,deleteMovie } = movie.actions // exporting our reducers

export default movie.reducer //exporting the slices