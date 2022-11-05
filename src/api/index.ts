const baseUrl = 'https://rickandmortyapi.com/api'
export const getCharacters = (page : number) => {
    return fetch(`${baseUrl}/character?page=${page}`).then((result) => result.json())
}

export const getSingleCharacter = (id : number) => {
    return fetch(`${baseUrl}/character/${id}`).then((result) => result.json())
}