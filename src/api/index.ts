import axios from "axios"
axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export const getCharacters = (page : number) => {
    return axios.get(`/character?page=${page}`).then(({data}) => data)
}

export const getSingleCharacter = (id : string | undefined) => {
    return axios.get(`/character/${id}`).then(({data}) => data)
}

export const getMultipleEpisodes = ( episodes : string | any[]) => {
    return axios.get(`/episode/${episodes}`).then(({data}) => data)
}