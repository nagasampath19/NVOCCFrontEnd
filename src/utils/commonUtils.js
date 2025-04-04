/**
 * Allows only numeric input.
 * @param {string} textvalue - The input value to validate.
 * @returns {string} - The sanitized numeric value.
 */
export const allowOnlyNumbers = (textvalue) => {
    const newValue = textvalue.replace(/[^0-9.]/g, ''); // Allow digits and decimal point
    const decimalCount = newValue.split('.').length - 1;
    if (decimalCount > 1) {
      const lastIndex = newValue.lastIndexOf('.');
      const correctedValue = newValue.substring(0, lastIndex);
      return correctedValue;
    } else {
      return newValue;
    }
};
