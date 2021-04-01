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
                        response: {
                            effect_entries: [{
                                effect: "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.",
                                language: {
                                    name: 'en'
                                },
                                short_effect: 'Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.'
                            }]
                        }
                    }
                }
            }
        },
    },
];

export const GET_POKEMON_DETAIL = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
          abilities {
        ability {
          name
        }
      }
      height
      id
      moves {
        move {
          name
        }
        version_group_details {
          level_learned_at
        }
      }
      name
      order
      species {
        url
        name
      }
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      types {
        type {
          name
        }
      }
      weight
      status
      message
    }
  }
`