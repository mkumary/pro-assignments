const sumFibs = require('./sumfibs');

describe('sumfibs', () => { 
    test("sum of fibonacy numbers less that 10 should be 10", () => { 
        expect(sumFibs(10)).toBe(10);
    })
})