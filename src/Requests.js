const API_KEY = "36231a2c0e0b5895ab6f5de9cad4ca32";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchMovies: `/movie/{movie_id}?api_key=${API_KEY}&language=en-US`,
    fetchTv: `/tv/{tv_id}/season/{season_number}?api_key=${API_KEY}&language=en-US`,
    fetchEpisodes: `/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=${API_KEY}&language=en-US`,
    fetchList: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,

}

export default requests;
