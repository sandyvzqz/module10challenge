// create generic parent Shapes class for inheritance
class Shapes {
    constructor(shapeColor, textColor, text) { 
        this.shapeColor = shapeColor; 
        this.textColor = textColor;
        this.text = text;
    }
    setText(){ 
        return `<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="700"
        fill="${this.textColor}">${this.text}</text>`;
    }
}

//Circle class inherits Shapes parent methods/properties
class Circle extends Shapes{
    constructor(shapeColor, textColor, text){ 
        super(shapeColor, textColor, text); 
    }
    renderCircle(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="80" cx="150" cy="120" fill="${this.shapeColor}"/>
        ${super.setText()}
        </svg>`
    }
}

//Triangle class inherits parent methods/properties
class Triangle extends Shapes{
    constructor(shapeColor, textColor, text) { 
        super(shapeColor, textColor, text); 
    }
    renderTriangle(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/> 
        ${super.setText()} 
        </svg>`
    }
}

//Square class inherits parent methods/properties
class Square extends Shapes{
    constructor(shapeColor, textColor, text){ 
        super(shapeColor, textColor, text); 
    }
    renderSquare(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://w3.org/2000/svg">
        <rect x="50" y="50 "width="160" height="160" fill="${this.shapeColor}"/>
        <text x="125" y="130" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="700"
        fill="${this.textColor}">${this.text}</text>
        </svg>`
        //did not call parent's setText() method because square text alignment was off
    }
}

module.exports = {Circle, Triangle, Square}; 