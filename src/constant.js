export const APIKEY = "f044bf599e792ec4fc0404d2d86076c3";
export const BASE_URL = "https://image.tmdb.org/t/p/w500/"
export const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${APIKEY}`;
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};
