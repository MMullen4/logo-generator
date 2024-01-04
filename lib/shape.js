class Shape {
    constructor(color) {
        this.color = color

    }
    setcolor(newcolor) {
        this.color = newcolor
    }
}

class Circle extends Shape { // subclass of Shape
    constructor(color) {
    super(color)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />` // using backtics & template literal for color
    }
}
class Square extends Shape { // subclass of Shape
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect width="100%" height="100%" fill="${this.color}" />`
    }
}
class Triangle extends Shape { // subclass of Shape
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="200,10 280,210 130,210" fill="${this.color}" />`
    }
}
module.exports = {
    Shape,Circle,Square,Triangle
}