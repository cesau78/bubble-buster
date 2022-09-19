/**
 * Left pads a value with zeros.  Useful for displaying times such as 2 -> 02 to be used in: "1:02"
 * @param {*} value : A number that potentially needs left padding with zeros
 * @param {di} options: digits: the number of places to zero-fill to the left of the decimal 
 * @returns A value that's left padded with zeros
 */
 export const zPad = (value, {digits = 2} = {}) => {
    const valueAsString = value.toString();

    //short-circuit if length is alread appropriate
    if (valueAsString.length >= digits) {
        return valueAsString;
    }

    const zPaddedValue = valueAsString.padStart(digits, '0');
    return zPaddedValue;
};

export default zPad;