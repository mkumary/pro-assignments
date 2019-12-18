const argsString = (stringValue, strArray, placeHolderText = '{}') => { 
    let index = 0;
    let regex = new RegExp(`${placeHolderText}`, 'g')
    return stringValue.replace(regex , () => {
        return strArray[index++];
    });
}
module.exports = argsString;