const add = require('./sum')

let x=8,y=8;

test("testing sum" , () => {
    expect(add(x,y)).toBe(16);
})