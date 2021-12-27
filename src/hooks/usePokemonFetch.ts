import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/pokemonInterface';

export const usePokemonFetch = () => {
    
    const [loading, setLoading] = useState(true);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    
    const normalizePokemonResponse = (pokemonList: Result[]) => {
        const completePokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const id = url.split('/')[url.split('/').length - 2];
            const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return { id, name, sprite }
        })

        setSimplePokemonList([...simplePokemonList, ...completePokemonList])
        setLoading(false)
    }

    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        normalizePokemonResponse(resp.data.results);
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        loading,
        simplePokemonList,
        loadPokemon
    }
}
