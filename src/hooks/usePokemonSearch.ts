import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/pokemonInterface';

export const usePokemonSearch = () => {
    
    const [isFetching, setIsFetching] = useState(true);
    const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([])
    
    const normalizePokemonResponse = (pokemonList: Result[]) => {
        const completePokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const id = url.split('/')[url.split('/').length - 2];
            const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return { id, name, sprite }
        })

        setPokemonList(completePokemonList)
        setIsFetching(false)
    }

    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        normalizePokemonResponse(resp.data.results);
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isFetching,
        pokemonList,
    }
}
