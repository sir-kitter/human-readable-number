const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const ten_to_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]

const pad_significant = s => (s.length > 0 ? ' ' : '') + s

const convert_ddd_to_string = (number) => {
    if (number < 0) {
        return `minus ${convert_integer_to_string(-number)}`
    } else if (number >= 1 && number < 10) {
        return digits[number]
    }
    else if (number >= 10 && number < 20) {
        return ten_to_nineteen[number - 10]
    }
    else if (number >= 20 && number < 100) {
        return `${tens[Math.floor(number / 10)]}${pad_significant(convert_ddd_to_string(number % 10))}`
    }
    else if (number >= 100 && number < 1000) {
        return `${digits[Math.floor(number / 100)]} hundred${pad_significant(convert_ddd_to_string(number % 100))}`
    }
    else if (number >= 1000 && number < 1000000) {
        return `${convert_ddd_to_string(Math.floor(number / 1000) % 1000)} thousand${pad_significant(convert_ddd_to_string(number % 1000))}`
    }
    return ''
}

const convert_integer_to_string = number => {
    return number === 0 ? 'zero'
        : convert_ddd_to_string(number)
}

module.exports = function toReadable(number) {
    return convert_integer_to_string(number)
}
