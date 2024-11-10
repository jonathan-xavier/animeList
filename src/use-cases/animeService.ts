import { httpClient } from "../http-client/http-client";

class AnimeService {
    async getSearchAnime(searchQuery: string) {
        return httpClient.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
    }

    async getGenres(genre: string) {
        return httpClient.get(`https://api.jikan.moe/v4/genres/anime`);
            
    }
}

export default new AnimeService();