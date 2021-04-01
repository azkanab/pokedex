import { gql } from '@apollo/client'

export const GET_ABILITY_DETAIL = gql`
    query ability($ability: String!) {
        ability(ability: $ability) {
            message
            status
            response
            params
        }
    }
`

export const MocksAbilityDetail = [
    {
        request: {
            query: GET_ABILITY_DETAIL,
            variables: { ability: 'rivalry' },
        },
        result: () =>  {
            return {
                data: {
                    ability: {
                        message: '',
                        status: true,
                        response: {
                            effect_entries: [{
                                effect: "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.",
                                language: {
                                    name: 'en'
                                },
                                short_effect: 'Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.'
                            }]
                        },
                        params: {
                            ability: 'rivalry'
                        }
                    }
                }
            }
        }
    }
];

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            abilities {
                ability {
                    name
                }
            }
            moves {
                move {
                    name
                }
                version_group_details {
                    level_learned_at
                }
            }
            types {
                type {
                    name
                }
            }
            message
            status
            stats {
                base_stat
                effort
                stat {
                    url
                    name
                }
            }
            sprites {
                front_default
            }
            height
            weight
            species {
                url
                name
            }
        }
    }
`

export const MocksPokemonDetail = [
    {
        request: {
            query: GET_POKEMON_DETAIL,
            variables: { name: 'charmeleon' },
        },
        result: () =>  {
            return {
                data: {
                    pokemon: {
                        id: 5,
                        name: 'charmeleon',
                        abilities: [{
                            ability: {
                                name: 'blaze'
                            }
                        }, {
                            ability: {
                                name: 'solar-power'
                            }
                        }],
                        moves: [{
                            move: {
                                name: 'mega-punch'
                            },
                            version_group_details: [{
                                level_learned_at: 5
                            }]
                        }, {
                            move: {
                                name: 'fire-punch'
                            },
                            version_group_details: [{
                                level_learned_at: 3
                            }]
                        }, {
                           move: {
                               name: 'thunder-punch'
                           },
                           version_group_details: [{
                               level_learned_at: 0
                           }]
                        }, {
                            move: {
                                name: 'scratch'
                            },
                            version_group_details: [{
                                level_learned_at: 1
                            }]
                        }, {
                            move: {
                                name: 'swords-dance'
                            },
                            version_group_details: [{
                                level_learned_at: 0
                            }]
                        }, {
                            move: {
                                name: 'cut'
                            },
                            version_group_details: [{
                                level_learned_at: 9
                            }]
                        }, {
                            move: {
                                name: 'mega-kick'
                            }, version_group_details: [{
                                level_learned_at: 20
                            }]
                        }, {
                            move: {
                               name: 'headbutt' 
                            }, version_group_details: [{
                                level_learned_at: 3
                            }]
                        }, {
                            move: {
                                name: 'double-edge' 
                            }, version_group_details: [{
                                level_learned_at: 15
                            }]
                        }],
                        types: [{
                            type: {
                                name: 'fire'
                            }
                        }],
                        message: '',
                        status: true,
                        stats: [{
                            base_stat: 58,
                            effort: 0,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/1/',
                                name: 'hp'
                            }
                        }, {
                            base_stat: 64,
                            effort: 0,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/2/',
                                name: 'attack'
                            }
                        }, {
                            base_stat: 58,
                            effort: 0,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/3/',
                                name: 'defense'
                            }
                        }, {
                            base_stat: 80,
                            effort: 1,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/4/',
                                name: 'special-attack'
                            }
                        }, {
                            base_stat: 65,
                            effort: 0,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/5/',
                                name: 'special-defense'
                            }
                        }, {
                            base_stat: 80,
                            effort: 1,
                            stat: {
                                url: 'https://pokeapi.co/api/v2/stat/6/',
                                name: 'speed'
                            }
                        }],
                        sprites: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
                        },
                        height: 11,
                        weight: 190,
                        species: {
                            url: 'https://pokeapi.co/api/v2/pokemon-species/5/',
                            name: 'charmeleon'
                        }
                    }
                }
            }
        }
    }
];

const GET_POKEMON_EVOLUTION_CHAIN = gql`
    query evolutionChain($id: String!) {
        evolutionChain(id: $id) {
            message
            status
            response
            params
        }
    }
`

const GET_POKEMON_DATA = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            sprites {
                front_default
            }
        }
    }
`

export const MocksEvolutionChain = [
    {
        request: {
            query: GET_POKEMON_EVOLUTION_CHAIN,
            variables: { id: '1' },
        },
        result: () =>  {
            return {
                data: {
                    evolutionChain: {
                        message: '',
                        status: true,
                        response: {
                            chain: {
                                evolution_details: [],
                                evolves_to: [{
                                    evolution_details: [{
                                        min_level: 16
                                    }],
                                    evolves_to: [{
                                        evolution_details: [{
                                            min_level: 32
                                        }],
                                        evolves_to: [],
                                        species: {
                                            name: 'venusaur'
                                        }
                                    }],
                                    species: {
                                        name: 'ivysaur'
                                    }
                                }],
                                species: {
                                    name: 'bulbasaur'
                                }
                            },
                            id: 1
                        },
                        params: {
                            id: '1'
                        }
                    }
                }
            }
        }
    },
    {
        request: {
            query: GET_POKEMON_DATA,
            variables: { name: 'bulbasaur' },
        },
        result: () =>  {
            return {
                data: {
                    pokemon: {
                        id: 1,
                        sprites: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                        }
                    }
                }
            }
        }
    },
    {
        request: {
            query: GET_POKEMON_DATA,
            variables: { name: 'ivysaur' },
        },
        result: () =>  {
            return {
                data: {
                    pokemon: {
                        id: 1,
                        sprites: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
                        }
                    }
                }
            }
        }
    },
    {
        request: {
            query: GET_POKEMON_DATA,
            variables: { name: 'venusaur' },
        },
        result: () =>  {
            return {
                data: {
                    pokemon: {
                        id: 1,
                        sprites: {
                            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
                        }
                    }
                }
            }
        } 
    }
];

const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            results {
                url
                name
                image
                id
            }
        }
    }
`;

export const MocksPokemons = [
    {
        request: {
            query: GET_POKEMONS,
            variables: { limit: 36, offset: 0 },
        },
        result: () =>  {
            return {
                data: {
                    pokemons: {
                        count: 1118,
                        results: [
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/1/",
                                name: "bulbasaur",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                                id: 1
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/2/",
                                name: "ivysaur",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
                                id: 2
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/3/",
                                name: "venusaur",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                                id: 3
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/4/",
                                name: "charmander",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                                id: 4
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/5/",
                                name: "charmeleon",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
                                id: 5
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/6/",
                                name: "charizard",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                                id: 6
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/7/",
                                name: "squirtle",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                                id: 7
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/8/",
                                name: "wartortle",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
                                id: 8
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/9/",
                                name: "blastoise",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
                                id: 9
                            },
                            {
                                url: "https://pokeapi.co/api/v2/pokemon/10/",
                                name: "caterpie",
                                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
                                id: 10
                            }                 
                          ]
                    }
                }
            }
        }
    }
];


