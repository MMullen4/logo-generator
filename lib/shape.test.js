const {
    Circle, Square, Triangle, Shape  // test each of the svg classes for accuarcy
} = require('./shape.js');

test('create circle, add color, see render', () => {
    let svg = new Circle()
    svg.setcolor("blue")
    expect(svg.render()).toBe(`<circle cx="150" cy="100" r="80" fill="blue" />`);
});
test('create square, add color, see render', () => {
    let svg = new Square()
    svg.setcolor("green")
    expect(svg.render()).toBe(`<rect width="100%" height="100%" fill="green" />`);
});
test('create triangle, add color, see render', () => {
    let svg = new Triangle()
    svg.setcolor("red")
    expect(svg.render()).toBe(`<polygon points="155,0 280,220 10,220" fill="red" />`);
});