import {useQuery} from '@tanstack/react-query'
import {useEffect} from 'react'
import {Navigate, useSearchParams} from 'react-router-dom'
import {CharactersProps} from '@/modules/characters/types/types'
import CharactersContainer from '@/modules/characters/components/CharacterCard'
import Pagination from '@/modules/common/Pagination'
import Loading from '@/modules/common/Loading'
import {getCharacters} from '@/modules/characters/services'

const CharactersList: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    !searchParams.get('page') && setSearchParams({page: '1'})
  }, [])

  const page = Number(searchParams.get('page'))

  const {isLoading, isError, data, isPreviousData} = useQuery(
    ['characters', page],
    getCharacters
  )

  const hasMoreData = Boolean(data?.info.next)

  const prevHandleClick = () => {
    setSearchParams({page: Math.max(page - 1, 0).toString()})
  }
  const nextHandleClick = () => {
    if (!isPreviousData && hasMoreData) {
      setSearchParams({page: (page + 1).toString()})
    }
  }

  const prevDisabledCondition = Boolean(page === 1)
  const nextDisabledCondition = Boolean(isPreviousData || !hasMoreData)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Navigate to='/error' />
      ) : (
        <div>
          {data.results.map((character: CharactersProps) => (
            <CharactersContainer
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              origin={character.origin}
              location={character.location}
            />
          ))}
        </div>
      )}
      {!isLoading && (
        <Pagination
          totalPages={data?.info.pages}
          page={page}
          clickEvent={{next: nextHandleClick, prev: prevHandleClick}}
          isDisabled={{
            next: nextDisabledCondition,
            prev: prevDisabledCondition,
          }}
        />
      )}
    </>
  )
}

export default CharactersList
