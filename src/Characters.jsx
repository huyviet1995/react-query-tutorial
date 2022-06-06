import { useQuery } from 'react-query';
import { Character } from './components/Character';

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
    <div className="characters">
        {data.results.map(character => (
            <Character character={character} />
        ))}
    </div>
)
}

export default Characters;