// create base elements
let field = document.querySelector('#field');
let clearButton = document.querySelector('#clearField');
let sizeButton = document.querySelector('#fieldSize');

// Add option to choose the size of the field
// let sizeResults = 32;

function setFiledSize(n) {
    // fill remaining space with cloned columns

    let line = document.createElement('div');

    for (let i = 0; i < n; i++) {
        let square = document.createElement('div');
        square.className = 'part';
        square.style.height = `calc(640px / ${n})`;
        square.style.width = `calc(640px / ${n})`;
        line.appendChild(square);
    };

    for (let j = 0; j < n; j++) {
        let cloneLine = line.cloneNode(true);
        cloneLine.className = 'cloneLine';
        cloneLine.style.width = `calc(640px / ${n})`;
        field.appendChild(cloneLine);
    };
};



sizeButton.addEventListener('click', () => {
    cleaner();

    if (!field.firstChild) {
        sizeResults = prompt('Enter a number from 16 to 100', 0);

        setFiledSize(sizeResults);

        updateEventListeners();
    };
});

// Cleaner function

function cleaner() {
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    };
};

// add option to "paint" when coursor is dragged
let isDragged = false;

document.addEventListener('mousedown', () => {
    isDragged = true;
});

document.addEventListener('mouseup', () => {
    isDragged = false;
});

function updateEventListeners() {
    let smallParts = document.querySelectorAll('.part');

    smallParts.forEach((smallPart) => {
        smallPart.addEventListener('mouseover', () => {
            if (isDragged) {
                smallPart.style.backgroundColor = 'black';
            };
        });
    });

    clearButton.addEventListener('click', () => {
        smallParts.forEach((smallPart) => {
            smallPart.style.backgroundColor = '';
        });
    });
};


updateEventListeners();