import { useQuery } from 'react-query';

export const Characters = props => {
    const fetchCharacters = async () => {
        return await fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                return response.json();
            })
    }

    const { data, status } = useQuery("characters", fetchCharacters);

    if (status === 'loading') {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    if (status === 'error') {
        return (
            <div>
                Error ...
            </div>
        )
    }

return (
    <div>
        {data.results.map(character => {
            return (
                <div>{character.name}</div>
            )
        })}
    </div>
)
}

export default Characters;