function createSquare(){
    let sqr = document.createElement('div')
    sqr.classList.add('square')
    return sqr
}

function createSquaresLine(){
    let line = document.createElement('div')
    for(let i = 0; i < 16; i++){
        line.appendChild(createSquare())
    }
    return line
}

function createSquaresTable(){
    let table = document.createElement('div')
    for(let i = 0; i < 16; i++){
        table.appendChild(createSquaresLine())
    }
    return table
}

document.querySelector('body')
   .appendChild(createSquaresTable())
