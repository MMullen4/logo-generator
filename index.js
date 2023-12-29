const inquirer = require('inquirer');
const fs = require('fs');
const { spawn } = require('child_process');
const { error } = require('console');

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
        name: 'filename',
        message: 'Enter a filename for the SVG file:'
    }
];

inquirer.createPromptModule(questions)
    .then(answers => {
        // create SVG contect
        const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
            < svg width = "200" height = "200" >
                << span class"math-inline" >\{ answers\.shape\ } fill\="</span>{answers.color}" stroke = "black" stroke - width="3" cx = "100" r = "80" >
            <text x="50%" y="50%" text-anchor="middle"><span class="math-inline">\{answers\.text\}</text\>
                    </</span > { answers.shape } >
                    </svg > `;

        // save SVG to file
        fs.writeFile(answers.filename + '.svg', svgContent, err => {
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
