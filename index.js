const inquirer = require('inquirer');
const fs = require('fs'); // imports fs library
const { Shape, Circle, Square, Triangle } = require("./lib/shape.js")

// user questions
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color (e.g. blue, red, #0000FF):'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a text color (e.g. blue, red, #0000FF):'
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter a filename for the SVG file:'
    }
];

inquirer.prompt(questions)
    .then(answers => {
        let svg;
        if (answers.shape === "circle") {
            svg = new Circle()
        } else if (answers.shape === "square") {
            svg = new Square()
        } else {
            svg = new Triangle()
        }
        svg.setcolor(answers.color)  // sets shape color

        // create SVG content
        const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
            < svg width = "250" height = "250" >
                << span class"math-inline" >\{ answers\.shape\ } fill\="</span>{answers.color}" stroke = "black" stroke - width="3" cx = "100" r = "80" >
            <text x="50%" y="50%" text-anchor="middle"><span class="math-inline">\{answers\.text\}</text\>
                    </</span > { answers.shape } >
                    </svg > `;
        const svgTemplate = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

${svg.render()} 
  <text x="150" y="120" font-size="50" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>
</svg>
`
        //Asynchronously writes data to the user's filename, replacing the file if it already exists.
        fs.writeFile("./examples/" + answers.filename + '.svg', svgTemplate, err => {
            if (err || answers.filename == "" || answers.color == "" || answers.textcolor == "") {
                console.error('Error saving SVG file:', err);
            } else {
                console.log('SVG file saved successfully!');
            }
        });
    })

    .catch(error => {
        console.log('Error:', error);
    });
