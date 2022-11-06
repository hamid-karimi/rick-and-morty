import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleCharacter, getMultipleEpisodes } from '../../api'

const SingleCharacter = () => {

    const navigate = useNavigate()



    const { id } = useParams()
    const {
        isLoading: characterLoading,
        isError: characterIsError,
        error: characterError,
        data: character,
        isSuccess
    } = useQuery(['character', id], () => getSingleCharacter(id))

    const episodeIds = character?.episode.map((item: string) => {
        return item.replace('https://rickandmortyapi.com/api/episode/', '');
    })


    const {
        isError: episodeIsError,
        error: episodeError,
        data: episodes,
        isLoading,

    } = useQuery(['episode', episodeIds], () => getMultipleEpisodes(episodeIds), { enabled: !!character, select: (episodes) => Array.isArray(episodes) ? episodes : [episodes] })


    return (
        <div>
            {characterLoading && (<span>loading...</span>)}

            {(episodeIsError || characterIsError) && (<span>Erorr...</span>)}
            <button onClick={() => navigate(-1)}>BACK</button>
            {isSuccess &&

                (

                    episodes?.map((episode: any) => {
                        return (

                            <div key={episode.id}>
                                <span>{episode.name}</span> |
                                <span>{episode.episode}</span> |
                                <span>{episode.air_date}</span>
                            </div>
                        )
                    }))
            }

        </div>

    )

}

export default SingleCharacter