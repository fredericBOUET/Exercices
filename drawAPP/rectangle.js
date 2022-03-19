



const body = document.querySelector('body')
const svg = document.querySelector('.geometryContainer')
const rectButton = document.querySelector('.spawnRectangle')
const squareButton = document.querySelector('.spawnSquare')
const circleButton = document.querySelector('.spawnCircle')
const ellipseButton = document.querySelector('.spawnEllipse')
const colors = document.querySelectorAll('.color')
const save = document.querySelector('.Save')
const reset = document.querySelector('.Reset')
let isSelect = false
const mouse = {
    x: undefined,
    y: undefined,
}

let rect
let square
let circle
let ellipse
let elements = []
let rects = []
let squares = []
let circles = []
let ellipses = []
let resizer
let compteur = 0
let compteur2 = 0
let compteur3 = 0
let compteur4 = 0
let coordonate = ["ne","nw", "sw","se"] 



// Retrieve the object from storage
if (localStorage.getItem("o") != null) {
    let retrievedObject = localStorage.getItem('o');
    let oSave = JSON.parse(retrievedObject);
    for (const classe in oSave) {
        let div = document.createElement("div");
        div.className=classe;
        div.style.cssText= oSave[classe];
        document.querySelector('body').appendChild(div);
        let divNe = document.createElement("div");
        let divNw = document.createElement("div");
        let divSw = document.createElement("div");
        let divSe = document.createElement("div");
        divNe.className="resizer ne hidden";
        divNw.className="resizer nw hidden";
        divSw.className="resizer sw hidden";
        divSe.className="resizer se hidden";
        div.appendChild(divNe);
        div.appendChild(divNw);
        div.appendChild(divSw);
        div.appendChild(divSe);
      }
    rects = Array.from(document.querySelectorAll(".rect"));
    squares = Array.from(document.querySelectorAll(".square"));
    circles = Array.from(document.querySelectorAll(".circle"));
    ellipses = Array.from(document.querySelectorAll(".ellipse"));

}


function drawRect(){
    rect = document.createElement('div')
    rect.style.left = 258 + "px"
    rect.style.top = 243 + "px"
    rect.style.height = 60 + "px"
    rect.style.width = 120 + "px"
    // rect.style.borderRadius = 50 + "%"
    rect.style.background = 'red'
    rect.classList.add('el')
    rect.classList.add('rect')
    rect.classList.add('first')
    console.log(compteur)
    rect.classList.add(`${compteur}`)
    compteur++
    console.log(compteur)
    
    
    for (let i=0; i<4; i++)  {
        resizer = document.createElement('div')
        resizer.classList.add("resizer", `${coordonate[i]}`)
        resizer.classList.add('hidden')
        rect.appendChild(resizer)
    }
    rects.push(rect)
    body.appendChild(rect)
    
}

function drawSquare(){
    square = document.createElement('div')
    square.style.left = 258 + "px"
    square.style.top = 243 + "px"
    square.style.height = 80 + "px"
    square.style.width = 80 + "px"
    square.style.background = 'red'
    square.classList.add('el')
    square.classList.add('square')
    square.classList.add('1')
    square.classList.add(`${compteur2}`)
    compteur2++
    

    for (let i=0; i<4; i++)  {
        resizer = document.createElement('div')
        resizer.classList.add("resizer", `${coordonate[i]}`)
        resizer.classList.add('hidden')
        square.appendChild(resizer)
    }
    squares.push(square)
    body.appendChild(square)
    
}

function drawCircle(){
    circle = document.createElement('div')
    circle.style.left = 258 + "px"
    circle.style.top = 243 + "px"
    circle.style.height = 80 + "px"
    circle.style.width = 80 + "px"
    circle.style.borderRadius = 50 + "%"
    circle.style.background = 'red'
    circle.classList.add('el')
    circle.classList.add('circle')
    circle.classList.add('2')
    circle.classList.add(`${compteur3}`)
    compteur3++

    for (let i=0; i<4; i++)  {
        resizer = document.createElement('div')
        resizer.classList.add("resizer", `${coordonate[i]}`)
        resizer.classList.add('hidden')
        circle.appendChild(resizer)
    }
    circles.push(circle)
    body.appendChild(circle)
    
}
function drawEllipse(){
    ellipse = document.createElement('div')
    ellipse.style.left = 258 + "px"
    ellipse.style.top = 243 + "px"
    ellipse.style.height = 60 + "px"
    ellipse.style.width = 120 + "px"
    ellipse.style.borderRadius = 50 + "%"
    ellipse.style.background = 'red'
    ellipse.classList.add('el')
    ellipse.classList.add('ellipse')
    ellipse.classList.add('3')
    ellipse.classList.add(`${compteur4}`)
    compteur4++

    for (let i=0; i<4; i++)  {
        resizer = document.createElement('div')
        resizer.classList.add("resizer", `${coordonate[i]}`)
        resizer.classList.add('hidden')
        ellipse.appendChild(resizer)
    }
    ellipses.push(ellipse)
    body.appendChild(ellipse)
    
}
elements.push(rects)
elements.push(squares)
elements.push(circles)
elements.push(ellipses)
rectButton.addEventListener("click",function(e){
    mouse.x = e.x
    mouse.y = e.y 
    drawRect()
    
    
})

squareButton.addEventListener("click",function(e){
    mouse.x = e.x
    mouse.y = e.y 
    drawSquare()
    
    

})

circleButton.addEventListener("click",function(e){
    mouse.x = e.x
    mouse.y = e.y 
    drawCircle()
    
})

ellipseButton.addEventListener("click",function(e){
    mouse.x = e.x
    mouse.y = e.y 
    drawEllipse()
    
})

function getStyle(a, b) {
  return window.getComputedStyle(b, null)[a];
}


function startPosition(e){
    window.addEventListener('mouseup', finishedPosition)
    
    window.addEventListener('mousemove', move)
    let prevX = e.clientX
    let prevY = e.clientY
    function move(e){
    
        let newX = prevX - e.clientX
        let newY = prevY - e.clientY
        let index
        let index2
        // let posX
        // let posY
        // elX = parseInt(getStyle('top', e.target))
        // elY = parseInt(getStyle('left', e.target))
        // const rect = el.getBoundingClientRect()
        // posX = elX - newX
        // posY = elY - newY
        index = e.target.classList[2]
        if(index === 'first'){
            index = 0
        }
        index2 = e.target.classList[3]
        
        if (e.target.classList[0] === "el"){
            el = elements[index][index2]
            // console.log(el.getBoundingClientRect())
            console.log(elements)
            const rect = el.getBoundingClientRect()
            el.style.left = rect.left - newX + "px"
            el.style.top = rect.top - newY + "px"

            




            prevX = e.clientX
            prevY = e.clientY
        }else{
            return
        }
        
    }

    function finishedPosition(){
        window.removeEventListener('mousemove',move)
        window.removeEventListener('mouseup',finishedPosition)
    }

}
let parentIndex
let parentIndex2
function resizeDown(e){
    target = e.target
    classCo = e.target.classList[0]
    if(classCo === "resizer"){
        classCo = e.target.classList.value
        
    }
    prevX = e.clientX
    prevY = e.clientY
    let resizerSelect
    if(classCo === "el"){
        resizerSelect = target.childNodes
        target.childNodes.forEach(element => {
            
            element.classList.remove('hidden')
            isSelect = true
            
            
        });
    }
    
    if(classCo === "resizer nw" || classCo === "resizer ne" || classCo === "resizer sw" || classCo === "resizer se"){
        
        window.addEventListener('mousemove', resizeMove)
        window.addEventListener('mouseup', mouseUp)

        parentIndex = target.parentNode.classList[2]
        if(parentIndex === 'first'){
            parentIndex = 0
        }
        parentIndex2 = target.parentNode.classList[3]
        
        function resizeMove(e){
            // elCo = rect.getBoundingClientRect()
            if (classCo === "resizer se" ){
                elements[parentIndex][parentIndex2].style.width = parseInt(elements[parentIndex][parentIndex2].style.width) - (prevX - e.clientX) + "px"
                elements[parentIndex][parentIndex2].style.height = parseInt(elements[parentIndex][parentIndex2].style.height) - (prevY - e.clientY) + "px"
                
                
            }else if(classCo === "resizer sw"){
                elements[parentIndex][parentIndex2].style.width = parseInt(elements[parentIndex][parentIndex2].style.width) + (prevX - e.clientX) + "px"
                elements[parentIndex][parentIndex2].style.height = parseInt(elements[parentIndex][parentIndex2].style.height) - (prevY - e.clientY) + "px"
                elements[parentIndex][parentIndex2].style.left = parseInt(elements[parentIndex][parentIndex2].style.left) - (prevX - e.clientX) + "px"
            }else if(classCo === "resizer ne"){
                elements[parentIndex][parentIndex2].style.width = parseInt(elements[parentIndex][parentIndex2].style.width) - (prevX - e.clientX) + "px"
                elements[parentIndex][parentIndex2].style.height = parseInt(elements[parentIndex][parentIndex2].style.height) + (prevY - e.clientY) + "px"
                elements[parentIndex][parentIndex2].style.top = parseInt(elements[parentIndex][parentIndex2].style.top) - (prevY - e.clientY) + "px"
            }else if(classCo === "resizer nw"){
                elements[parentIndex][parentIndex2].style.width = parseInt(elements[parentIndex][parentIndex2].style.width) + (prevX - e.clientX) + "px"
                elements[parentIndex][parentIndex2].style.height = parseInt(elements[parentIndex][parentIndex2].style.height) + (prevY - e.clientY) + "px"
                elements[parentIndex][parentIndex2].style.top = parseInt(elements[parentIndex][parentIndex2].style.top) - (prevY - e.clientY) + "px"
                elements[parentIndex][parentIndex2].style.left = parseInt(elements[parentIndex][parentIndex2].style.left) - (prevX - e.clientX) + "px"
            }           

            prevX = e.clientX
            prevY = e.clientY
            
            if (target.parentElement.classList.contains("square")||target.parentElement.classList.contains("circle")){
                console.log(target.parentElement.classList)
                elements[parentIndex][parentIndex2].style.width = elements[parentIndex][parentIndex2].style.height
            }
        }

        function mouseUp(){
            window.removeEventListener('mousemove',resizeMove)
            window.removeEventListener('mouseup',mouseUp)
        }
    }
}


window.addEventListener('mousedown', startPosition)
window.addEventListener('mousedown', resizeDown)


let color

function showColor(e){
    console.log(e)
    color = e.target.id
    if(isSelect){
        elements[parentIndex][parentIndex2].style.background = color
    }
    // console.log(rect)
}

function saveIt(){
   let elementsArray = document.querySelectorAll(".el");
   let o = new Object();

   elementsArray.forEach(function (element) { 
    o[element.classList.value]=element.style.cssText;
       
   });
   localStorage.setItem('o', JSON.stringify(o));

}
function resetIt(){

    localStorage.clear();
 
 }
save.addEventListener('click',saveIt)
reset.addEventListener('click',resetIt)
colors.forEach(color => {
        color.addEventListener('click',showColor)
});
