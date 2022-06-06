import { useState } from 'react';
import { useQuery } from 'react-query';
import { Character } from './components/Character';

export const Characters = props => {

    const [page, setPage] = useState(3);

    const fetchCharacters = async ({ queryKey }) => {
        return await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
            .then(response => {
                return response.json();
            })
    }

    const { data, isPreviousData, isLoading, isError } = useQuery(["characters", page], fetchCharacters, { keepPreviousData: true });

    if (isLoading) {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                Error ...
            </div>
        )
    }

    return (
        <div className="characters">
            {data.results.map((character, index) => (
                <Character key={index} character={character} />
            ))}
            <div>
                <button disabled={page === 1} onClick={() => setPage(prevPage => prevPage - 1)}>Previous</button>
                <button disabled={isPreviousData && data.info.next === null} onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Characters;