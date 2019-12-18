arrayAddition = (array1, array2) => { 
    if (Array.isArray(array1) && array1.length && Array.isArray(array2)) {
        if (array1.length >= array2.length) {
            return array1.map((ele, index) => {
                if (isNaN(ele) || isNaN(array2[index])) { 
                    throw ('throw Error');
                }
                return ele + (array2[index] || 0)
            })
        } else {
            return array2.map((ele, index) => {
                if (isNaN(array1[index] || isNaN(ele))) { 
                    throw ('throw Error');
                }
                return ele + (array1[index] || 0)
            })
        }
    } else { 
        throw ('throw Error');
    }

}
module.exports = arrayAddition;