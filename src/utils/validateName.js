// Check if name is exist in My Pokemon array and returns error message
export default function validateName(array, name) {
    if (!name) {
        return 'You have to pick a name'
    }

    let existed =  array.some(element => element.name.toLowerCase() === name.toLowerCase())
    if (existed) {
        return 'You have named your pokemon with this name. Please pick another name'
    }

    return ''
}