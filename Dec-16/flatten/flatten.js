
const flatten = (arr) => { 
    let list = [...arr];
    let accumulativeList = [];
    while (list.length) {
        let listItem = list.shift();
        if (Array.isArray(listItem)) {
            list.push(...listItem)
        } else { 
            accumulativeList.push(listItem)
        }
    }
    return accumulativeList;
}

module.exports = flatten