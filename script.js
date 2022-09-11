

const container = document.getElementById('container');
const counter = document.getElementById('count');

function appendGrid(container,rows) {
    let multiplier = rows*rows;
    for (let i=0; i < (multiplier); i++){
        let child = document.createElement('div');
        child.addEventListener('mouseover', function(){
            child.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        })
        child.classList.add('new')
        container.appendChild(child);
        child.style.cssText = `height: ${960/(Math.sqrt(multiplier))}px; width:${960/(Math.sqrt(multiplier))}px`
        
    }
}
     

function clearGrid(){
    let a = document.getElementById("container");
    let child = a.lastElementChild;    
    
    while (child) {
        a.removeChild(child);
        child = a.lastElementChild;
    }
}


window.onload = function(){
    appendGrid(container, 16)
}



counter.addEventListener('click', function(){
    clearGrid(container);
    let gridNumber = prompt('Enter the number of squares in grid');
    appendGrid(container,gridNumber);
})

