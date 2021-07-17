const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default removeItemAtIndex