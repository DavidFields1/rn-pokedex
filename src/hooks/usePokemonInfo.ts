import { useEffect, useState } from "react"
import { CompletePokemon } from '../interfaces/pokemonInterface';
import { pokemonApi } from '../api/pokemonApi';

const usePokemonInfo = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState<CompletePokemon>({} as CompletePokemon)

    const loadPokemon = async () => {
        const response = await pokemonApi.get<CompletePokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonInfo(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        loading,
        pokemonInfo
    }
}

export default usePokemonInfo
