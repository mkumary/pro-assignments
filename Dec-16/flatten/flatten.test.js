const flatten = require('./flatten');

describe('flatten', () => { 
    it("flat an array with depth 1", () => { 
        expect(flatten([1, 2, [3, 3]])).toStrictEqual([1, 2, 3, 3]);
    })
})

describe('flatten', () => { 
    it("flat an array with depth 3", () => { 
        expect(flatten([1, 2, [3, 3, [4,5, [3,7]]]])).toStrictEqual([1, 2, 3, 3, 4,5,3,7]);
    })
})