function createSquare(){
    let sqr = document.createElement('div')
    sqr.classList.add('square')
    return sqr

    document.querySelector('#app')
      .appendChild(sqr)
}

function createSquareLine(){
    let line = document.createElement('div')
    line.classList.add('line')
    for(let i = 0; i < 16; i++){
        line.appendChild(createSquare())
    }
    return line 
}

function createSquareTable(){
    let table = document.createElement('div')
    for(let i = 0; i < 16; i++){
        table.appendChild(createSquareLine())
    }
    return table
}

let app = document.querySelector('#app')

app.appendChild(createSquareTable())
