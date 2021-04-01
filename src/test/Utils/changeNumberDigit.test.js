import changeNumberDigit from '../../utils/changeNumberDigit'

test('check if changeNumberDigit function works properly', () => {
    const initialNumber = 5
    var newNumber = changeNumberDigit(initialNumber)
    var expectedOutput = '005'

    expect(newNumber).toEqual(expectedOutput)
})