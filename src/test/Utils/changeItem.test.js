import { removeItemAtIndex } from '../../utils/changeItem'

test('check if removeItemAtIndex function works properly', () => {
    const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var newArray = removeItemAtIndex(initialArray, 4)
    var expectedArray = [1, 2, 3, 4, 6, 7, 8, 9, 10]

    expect(newArray).toStrictEqual(expectedArray)
})