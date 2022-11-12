import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useRequest } from '@/hooks/useRequest'
import { CharactersProps } from '@/modules/characters/types'
import CharactersContainer from '@/modules/characters'

const Characters = () => {
    const [page, setPage] = useState(1)

    const request = useRequest()
    const getCharacters = async ({ queryKey }: any) => {
        const [_, page] = queryKey
        const { data } = await request.get(`/character`, { page: page })
        return data
    }

    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery(['characters', page], getCharacters)

    const hasMoreData = Boolean(data?.info.next)

    return (
        <div className='bg-gray-900 text-white'>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error</div>
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
                            location={character.location} />

                    ))}
                </div>
            )}
            <span>Current Page: {page}</span>
            <button
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                disabled={page === 1}
            >
                Previous Page
            </button>{' '}
            <button
                onClick={() => {
                    if (!isPreviousData && hasMoreData) {
                        setPage(old => old + 1)
                    }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !hasMoreData}
            >
                Next Page
            </button>
            {isFetching ? <span> Loading...</span> : null}{' '}
        </div>
    )
}

export default Characters
