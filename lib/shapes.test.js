const {Circle, Triangle, Square} = require('./shapes.js'); 

//tests for a pink circle to generate
describe("Circle test", () => {
    test("should generate a pink circle", () => {
        const circle = new Circle("pink");
        expect(circle.shapeColor).toBe("pink")
    });
});

//tests for a blue triangle to generate
describe("Triangle test", () => {
    test("should generate a blue triangle", () => {
        const triangle = new Triangle("blue"); 
        expect(triangle.shapeColor).toBe("blue");
    });
});

//tests for a square with href #87CEEB to generate
describe("Square test", () => {
    test("should generate a sky blue square", () => {
        const square = new Square("#87CEEB");
        expect(square.shapeColor).toBe("#87CEEB");
    });
});
