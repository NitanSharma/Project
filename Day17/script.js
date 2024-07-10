const API_URL = 'https://api.themoviedb.org/3/movie/157336?api_key=3437acb170f1322a89049cdeb8f6f285'
const image_Path ='https://image.tmdb.org/t/p/w1280'
const SEARCH_URL ='https://api.themoviedb.org/3/search/movie/550?api_key=3437acb170f1322a89049cdeb8f6f285c&query="'
// get intial movies

getMovies(SEARCH_URL)
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
