const API_KEY = '015c7b11cedc70d487740fb5a88e6768'

const requests = [
    {
        name: 'Netflix Originals',
        link: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        large: true
    },{
        name: 'Trending Now',
        link: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        large: false
    },{
        name: 'Top Rated Movies',
        link: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        large: false
    },{
        name: 'Action Movies',
        link: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        large: false
    },{
        name: 'Comedy Movies',
        link: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        large: false
    },{
        name: 'Documentaries',
        link: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        large: false
    },{
        name: 'Horror Movies',
        link: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        large: false
    },{
        name: 'Romance Movies',
        link: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        large: false
    }
]

export default requests;


