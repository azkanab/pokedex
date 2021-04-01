import validateName from '../../utils/validateName'

test('check if validateName function works properly', () => {
    const name = 'azka'
    var myPokemonData = [{
        name: 'Azka'
    }, {
        name: 'Ody'
    }, {
        name: 'Afif'
    }]
    var errorMessage = validateName(myPokemonData, name)
    var expectedOutput = 'You have named your pokemon with this name. Please pick another name'

    expect(errorMessage).toEqual(expectedOutput)
})