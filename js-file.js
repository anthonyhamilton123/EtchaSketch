const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.style.border = '1px solid black';
content.style.height = '20px';
content.style.width = '20px';

container.appendChild(content);

const node = document.querySelector('.content');
[...Array(255)].forEach(_ => node.parentNode.insertBefore(node.cloneNode(true), node));

const contents = container.querySelectorAll('div');
contents.forEach((content) => {
    content.addEventListener('mouseenter', ()=>{
        content.style.background = 'blue';
    });
    content.addEventListener('mouseleave', ()=>{
        content.style.background = 'white';
    });
});