const main = document.querySelector('#mainDiv')

const container = document.createElement('div');

function createContainer(){
    container.classList.add('container');
    document.getElementById("mainDiv").appendChild(container);
}

function mouseOverFunc(){
    const contents = container.querySelectorAll('div');
    contents.forEach((content) => {
        content.addEventListener('mouseenter', ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            content.style.backgroundColor += `#${randomColor}`;
        });
    });
};

let numberBoxes = 16;

function createGrid(){

    createContainer();

    let boxesDim = ((800 - (numberBoxes + 2)) / numberBoxes)-1;

    for (i=1;i<=(numberBoxes*numberBoxes);i++){
        let content = document.createElement('div');
        content.classList.add('content');
        content.style.border = '1px solid black';
        content.style.height = `${boxesDim}px`;
        content.style.width = `${boxesDim}px`;
        container.appendChild(content);
    };
    mouseOverFunc();
};

createGrid();



let btn = document.querySelector('#button');

function clearAll() {
    container.innerHTML = "";

}

btn.addEventListener('click', ()=>{
    clearAll();
    numberBoxes = parseInt(prompt('How many squares would you like?'));
    if(numberBoxes>100){
        numberBoxes = parseInt(prompt("Sorry, enter a number lower than 100"))
    }
    createGrid();
})

