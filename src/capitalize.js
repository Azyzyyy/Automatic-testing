const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const subString = text.slice(1).toLowerCase();
    return `${firstChar}${subString}`;
};

export default capitalize;