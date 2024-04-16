//import the libraries needed
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
//import classes from shapes.js
const {Circle, Triangle, Square} = require('./lib/shapes')

const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("Generating your new logo");
            //applying polymorphism (data.shape) to reduce long switch/case statement
            switch(`${answers.shape}`) {
                case 'Circle':
                    const circle = new Circle (answers.shapeColor, answers.textColor, answers.text)
                    fs.writeFile("./lib/logo.svg", circle.renderCircle(), (err) => {
                        if (err){
                            console.error(err);
                        } else{
                            console.log("Success! Generated logo.svg!")
                        }
                    });
                    break;
                case 'Triangle':
                    const triangle = new Triangle (answers.shapeColor, answers.textColor, answers.text)
                    fs.writeFile('./lib/logo.svg', triangle.renderTriangle(), (err) => {
                        if (err){
                            console.error(err)
                        }else {
                            console.log("Success! Generated logo.svg!")
                        }
                    });
                break;
                case 'Square':
                    const square = new Square (answers.shapeColor, answers.textColor, answers.text)
                    fs.writeFile('./lib/logo.svg', square.renderSquare(), (err) => {
                        if (err) {
                            console.error(err);
                        }else{
                            console.log("Success! Generated logo.svg!");
                        }
                    });
                    break;
        }
    })
}
init();