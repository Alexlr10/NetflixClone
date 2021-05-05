const API_kEY = '4059cbb728cb64ac430346145e18a228';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- açao
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with-network=213&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await  basicFetch(`/discover/movie??with-network=28&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie??with-network=35&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                 items: await basicFetch(`/discover/movie??with-network=27&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                 items: await basicFetch(`/discover/movie??with-network=10749&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                 items: await basicFetch(`/discover/movie??with-network=99&language=pt-BR&api_key=${API_kEY}`)
            },
        ]
    }
}