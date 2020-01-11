const  memoize  = require('./memoize');

describe("memoize function return a function", () => { 
    it('call to memoize funciton return a function ', () => { 
        expect(memoize((a,b) => { 
            return a + b;
        })).not.toBe(undefined)
    })
})