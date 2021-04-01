import uppercaseText from '../../utils/uppercaseText'

test('check if uppercaseText function works properly', () => {
    const initialName = 'ivysaur'
    var newName = uppercaseText(initialName)
    var expectedOutput = 'Ivysaur'

    expect(newName).toEqual(expectedOutput)
})