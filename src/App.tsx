import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getCharacters } from "./api"
import SingleCharacter from "./components/SingleCharacter"
function App() {

  const [page, setPage] = useState(1)
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => getCharacters(page),
    keepPreviousData: true
  })


  const hasMoreData = Boolean(data?.info.next)

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <div>
          {data.results.map((character: { id: number; name: string }) => (
            <div key={character.id}>

              <a href={`character/${character.id}`}>{character.name}</a>


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

export default App
