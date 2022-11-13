import {useRequest} from '@/hooks/useRequest'

const request = useRequest()

export const getCharacters = async ({queryKey}: any) => {
  const [_, page] = queryKey
  const {data} = await request.get(`/character`, {page: page})
  return data
}

export const getSingleCharacter = async ({queryKey}: any) => {
  const [_, id] = queryKey
  const {data} = await request.get(`/character/${id}`)
  return data
}

export const getCharacterEpisodes = async ({queryKey}: any) => {
  const [_, episodeIds] = queryKey
  const {data} = await request.get(`/episode/${episodeIds}`)
  return data
}
