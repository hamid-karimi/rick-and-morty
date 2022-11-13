import Button from '@/modules/common/Button'
import Loading from '@/modules/common/Loading'
import Photo from '@/modules/common/Photo'
import TextContainer from '@/modules/common/TextContainer'
import {useQuery} from '@tanstack/react-query'
import {useParams, useNavigate, Navigate} from 'react-router-dom'
import {
  getSingleCharacter,
  getCharacterEpisodes,
} from '@/modules/characters/services'

const CharacterEpisodes: React.FC = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const episodeApiUrl = 'https://rickandmortyapi.com/api/episode/'
  const characterUseQuery = 'character'
  const episodeUseQuery = 'episode'
  const errorPage = '/error'

  const {
    isLoading: characterLoading,
    isError: characterIsError,
    data,
    isSuccess,
  } = useQuery([characterUseQuery, id], getSingleCharacter)

  const episodeIds = data?.episode.map((item: string) => {
    return item.replace(episodeApiUrl, '')
  })

  const {isError: episodeIsError, data: episodes} = useQuery(
    [episodeUseQuery, episodeIds],
    getCharacterEpisodes,
    {
      enabled: !!data,
      select: episodes => (Array.isArray(episodes) ? episodes : [episodes]),
    }
  )

  if (data) document.title = `${data.name} episodes`

  return (
    <>
      {characterLoading && <Loading />}

      {(episodeIsError || characterIsError) && <Navigate to={errorPage} />}

      {!characterLoading && (
        <Button name='back' onClick={() => navigate(-1)}>
          Back
        </Button>
      )}
      {data?.name && (
        <span className='flex justify-center p-5 text-2xl'>
          {' '}
          {episodeIds.length > 1 ? 'Episodes ' : 'Episode '}of {data.name}{' '}
          Played
        </span>
      )}
      {data && <Photo imageAddress={data.image} altName={data.name} />}
      {isSuccess &&
        episodes?.map((episode: any) => {
          return (
            <div
              className='flex flex-col items-start p-5 border-b-2 leading-9 text-gray-50'
              key={episode.id}
            >
              <TextContainer title='Episode Name: ' content={episode.name} />
              <TextContainer title='Episode Code: ' content={episode.episode} />
              <TextContainer title='Air Date: ' content={episode.air_date} />
            </div>
          )
        })}
    </>
  )
}

export default CharacterEpisodes
