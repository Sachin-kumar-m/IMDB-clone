export const APIKEY = "f044bf599e792ec4fc0404d2d86076c3";
export const BASE_URL = "https://image.tmdb.org/t/p/w500"
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};
export const WATCHLIST_KEY = "MY_WATCHLIST";

export const getWatchlist = () => {
    const watchList = localStorage.getItem(WATCHLIST_KEY);
    let value;
    if (watchList) {
      value = JSON.parse(watchList);
    } else {
      value = [];
    }
  
    return value;
  };
