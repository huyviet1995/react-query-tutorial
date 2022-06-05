import { useEffect, useState } from "react";

export const Characters = props => {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        await fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
            return response.json();
        }).then(data => {
            setCharacters(data);
        }).catch(error => {
            console.error({ error });
            setCharacters([]);
        })
    }

useEffect(() => {
    fetchCharacters();
}, []);

return (
    <div>
        {characters.results.map(character => {
            return (
                <div>{character.name}</div>
            )
        })}
    </div>
)
}

export default Characters;