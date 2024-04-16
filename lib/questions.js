const questions = [
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo.",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be? (Type color keyword or hexadecimal number)"
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be? (Type color keyword or hexadecimal number)"
    },
    {
        type: "input",
        name: "text",
        message: "Choose a maximum of 3 character letters for your logo."
    },
];

//export the questions 
module.exports = questions;