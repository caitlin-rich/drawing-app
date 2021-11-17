let isDrawing = false;
let x = 0;
let y = 0;


function selectColor(){
    color = colorSelect.value
}


let colorSelect = document.getElementById('colorselect');
let color = colorSelect.options[colorSelect.selectedIndex].value
console.log(color)
console.log(colorSelect)
//okay this isn't it yet but i need coffee first 

const canvas = document.getElementById('maincanvas');
const context = canvas.getContext('2d');

canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
     //why do we call drawLine on mouseup? oh it might be to call context.closePath?  
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  //TO DO: WRITE FUNCTION THAT CHANGES COLOR
  selectColor()
  context.strokeStyle = color;
  //TO DO: WRITE FUNCTION THAT CHANGES LINE WIDTH
  //Yo yo yo and how to make a circle and not a series of weird lines?!
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

//WEDNESDAY: 
//To do: add basic color selector
//To do: add line width selector
//To do: add shapes creator
//To do: add fill tool
