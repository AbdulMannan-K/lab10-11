const {add,subtract,multiply,divide} = require('./calculator')

let x=8,y=8;

test("testing sum" , () => {
    expect(add(x,y)).toBe(16);
})

test("testing subtract" , () => {
    expect(subtract(x,y)).toBe(0);
})

test("testing multiply", ()=>{
    expect(multiply(x,y)).toBe(64);
})

test("testing divide", ()=>{
    expect(divide(x,y)).toBe(1);
})