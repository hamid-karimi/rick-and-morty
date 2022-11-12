import { useRequest } from '@/hooks/useRequest'
import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'


const EachCharacterEpisode = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const request = useRequest()
    const getSingleCharacter = async ({ queryKey }: any) => {
        const [_, id] = queryKey
        const { data } = await request.get(`/character/${id}`)
        return data
    }

    const { isLoading: characterLoading, isError: characterIsError, error, data, isSuccess, isFetching, isPreviousData } =
        useQuery(['character', id], getSingleCharacter)



    const episodeIds = data?.episode.map((item: string) => {
        return item.replace('https://rickandmortyapi.com/api/episode/', '');
    })

    const getCharacterEpisodes = async ({ queryKey }: any) => {
        const [_, page] = queryKey
        const { data } = await request.get(`/episode/${episodeIds}`)
        return data
    }

    const { isError: episodeIsError,
        error: episodeError,
        data: episodes,
        isLoading: episodeIsLoading, } =
        useQuery(['episode', episodeIds], getCharacterEpisodes, { enabled: !!data, select: (episodes) => Array.isArray(episodes) ? episodes : [episodes] })



    return (
        <div className='bg-gray-900 text-white h-auto'>
            {characterLoading && (<span>loading...</span>)}

            {(episodeIsError || characterIsError) && (<span>Erorr...</span>)}
            <button onClick={() => navigate(-1)}>BACK</button>
            {data?.name && <h1> {episodeIds.length > 1 ? 'Episodes ' : 'Episode '}of {data.name} Played</h1>}
            {isSuccess &&

                (

                    episodes?.map((episode: any) => {
                        return (

                            <div className='flex flex-col p-5 border-b-2 leading-9 text-gray-50' key={episode.id}>
                                <p><span className='font-semibold text-gray-400'>Episode Name: </span>{episode.name}</p>
                                <p><span className='font-semibold text-gray-400'>Episode Code: </span>{episode.episode}</p>
                                <p><span className='font-semibold text-gray-400'>Air Date: </span>{episode.air_date}</p>
                            </div>
                        )
                    }))
            }

        </div>

    )

}

export default EachCharacterEpisode