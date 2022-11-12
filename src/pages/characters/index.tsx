import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useRequest } from '@/hooks/useRequest'

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
    console.log(data)
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error</div>
            ) : (
                <div>
                    {data.results.map((character: { id: number; name: string; image: string; status: string; species: string; origin: { name: string }; location: { name: string } }) => (
                        <div key={character.id}>
                            <a href={`character/${character.id}`}>{character.name}</a>
                            <img src={character.image} /><br />
                            <span>{character.status}</span><br />
                            <span>{character.species}</span><br />
                            <span>{character.origin.name}</span><br />
                            <span>{character.location.name}</span>
                            <hr />
                        </div>
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
