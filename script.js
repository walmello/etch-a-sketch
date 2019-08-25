function createSquare(size=25){
    let sqr = document.createElement('div')
    sqr.classList.add('square')
    sqr.style.width = size + 'px'
    sqr.style.height = size + 'px'
    sqr.addEventListener('mouseover', function(event){
        changeColor(this)
    })
    return sqr

    document.querySelector('#app')
      .appendChild(sqr)
}

function changeColor(obj){
    let hue = Math.floor(Math.random() * 360)
    obj.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
    let opacity = obj.style.opacity || 1
    obj.style.opacity = opacity - 0.1
}

function createSquareLine(size=25, w=16){
    let line = document.createElement('div')
    line.classList.add('line')

    line.style.height = size + 'px'
    line.style.width = (size * w) + 'px'
    for(let i = 0; i < w; i++){
        line.appendChild(createSquare(size))
    }
    return line 
}

function createSquareTable(w,h,tablesize = 400){
    let table = document.createElement('div')
    table.classList.add('table')
    let size = tablesize / (w + h / 2) 
    for(let i = 0; i < h; i++){
        table.appendChild(createSquareLine(size, w))
    }

    let app = document.querySelector('#app')
    app.style.width = (size * w) + 'px'

    return table
}

function newTable(){
    let w = parseInt(prompt('width in squares?'))
    let h = parseInt(prompt('height in squares?'))

    table.innerHTML = ""
    table.appendChild(createSquareTable(w,h,800))
}

let table = document.querySelector('#table')

table.appendChild(createSquareTable(50, 50, 800))


let clear = document.querySelector('#clear')

clear.addEventListener('click', newTable)
