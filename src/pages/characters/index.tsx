import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'
import {useRequest} from '@/hooks/useRequest'
import {CharactersProps} from '@/modules/characters/types'
import CharactersContainer from '@/modules/characters'
import Pagination from '@/modules/common/pagination'
import Loading from '@/modules/common/loading'
import {Navigate} from 'react-router-dom'

const Characters = () => {
  document.title = 'Characters List'
  const [page, setPage] = useState(1)

  const request = useRequest()
  const getCharacters = async ({queryKey}: any) => {
    const [_, page] = queryKey
    const {data} = await request.get(`/character`, {page: page})
    return data
  }

  const {isLoading, isError, error, data, isFetching, isPreviousData} =
    useQuery(['characters', page], getCharacters)

  const hasMoreData = Boolean(data?.info.next)

  const prevHandleClick = () => {
    setPage(old => Math.max(old - 1, 0))
  }
  const nextHandleClick = () => {
    if (!isPreviousData && hasMoreData) {
      setPage(old => old + 1)
    }
  }

  const prevDisabledCondition = Boolean(page === 1)
  const nextDisabledCondition = Boolean(isPreviousData || !hasMoreData)

  return (
    <div className='bg-gray-900 text-white min-h-screen'>
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
    </div>
  )
}

export default Characters
