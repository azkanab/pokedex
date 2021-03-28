// Change digit number to the minimum of 3
export default function changeNumberDigit(number) {

    if (number.toString().length >= 3) {
        return number.toString()
    }

    if (number.toString().length === 1) {
        return '00'+number.toString()
    } else {
        return '0'+number.toString()
    }
}