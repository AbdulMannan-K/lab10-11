const add = require('./sum')

let x=8,y=8;

test("testing sum" , () => {
    expect(add(x,y)).toBe(16);
})

test("testing sum 2 " , () => {
    expect(add(x-1,y)).toBe(16);
})