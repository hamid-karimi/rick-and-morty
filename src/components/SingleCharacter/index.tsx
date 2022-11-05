import { useQuery } from '@tanstack/react-query'
import { getSingleCharacter } from '../../api'

const SingleCharacter = (charID: number) => {

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['singleCharacter', charID],
        queryFn: () => getSingleCharacter(charID),
        keepPreviousData: true
    })


    // console.log(data.name)
    return (
        <div>{data.species}</div>
    )
}

export default SingleCharacter