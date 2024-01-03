const inquirer = require('inquirer');
const fs = require('fs');
const {Shape,Circle,Square,Triangle} = require("./lib/shape.js")

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
        message: 'Enter a color 9 (e.g. blue, red, #0000FF):'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a text color 9 (e.g. blue, red, #0000FF):'
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
        svg.setcolor (answers.color)  // sets shape color
        // create SVG contect
        const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
            < svg width = "200" height = "200" >
                << span class"math-inline" >\{ answers\.shape\ } fill\="</span>{answers.color}" stroke = "black" stroke - width="3" cx = "100" r = "80" >
            <text x="50%" y="50%" text-anchor="middle"><span class="math-inline">\{answers\.text\}</text\>
                    </</span > { answers.shape } >
                    </svg > `;
        const svgTemplate = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">


${svg.render()} 

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

</svg>
`

        // save SVG to file
        fs.writeFile(answers.filename + '.svg', svgTemplate, err => {
            if (err) {
                console.error('Error saving SVG file:', err);
            } else {
                console.log('SVG file saved successfully!');
            }
        });
    })

.catch (error => {
    console.log('Error:', error);
});
