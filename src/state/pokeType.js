import { atom } from 'recoil'

export const pokeTypeState = atom({
    key: 'pokeTypeState',
    default: {
        type: '',
    }
})