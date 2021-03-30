import { atom } from 'recoil'
import localStorageEffect from './storage/localStorageEffect'

export const myPokemonState = atom({
    key: 'myPokemonState',
    default: [],
    effects_UNSTABLE: [
        localStorageEffect('my_pokemon')
    ]
})