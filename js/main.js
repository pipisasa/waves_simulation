// const size = 500;
// function createWave(h) {  
//   let oldCnv = document.getElementById("myCanvas");
//   if(oldCnv)oldCnv.remove();

//   const cnv = document.createElement("canvas");
//   cnv.setAttribute("id", "myCanvas");
//   cnv.setAttribute("width", size);
//   cnv.setAttribute("height", size);
//   cnv.style.backgroundColor = '#ccc';
//   document.body.appendChild(cnv);

//   const ctx = cnv.getContext("2d");

//   ctx.fillStyle = '#000';
//   ctx.clearRect(0, 0, 700, 700);

//   let counter = h, x = 0, y = 250;

//   //100 iterations
//   // let increase = 90 / 180 * Math.PI /9;
//   let increase = Math.PI/(2*18);
//   for (let i = 0; i <= 500; i++) {
//     ctx.moveTo(x, y);
//     x = i;
//     y = Math.sin(counter)*120+250;
//     counter += increase;
//     ctx.lineTo(x, y);
//   }
//   ctx.stroke();
// }
// let i = 0;


// setInterval(()=>{
//   createWave(i+=0.5);
// }, 100)

const size = 500;

const cnv = document.createElement("canvas");

cnv.setAttribute("id", "myCanvas");
cnv.setAttribute("width", size);
cnv.setAttribute("height", size);
cnv.style.backgroundColor = '#ccc';

document.body.appendChild(cnv);

const ctx = cnv.getContext("2d");

const getY = x => Math.sin(x)*120+size/2;

function createWave(h) {  


  ctx.fillStyle = '#000';
  ctx.clearRect(0, 0, 700, 700);
  ctx.beginPath();

  let counter = h;
  let y = getY(counter);

  //100 iterations
  // let increase = 90 / 180 * Math.PI /9;
  let increase = Math.PI/(2*18);
  for (let i = 0; i <= size; i++) {
    ctx.moveTo(i, y);
    y = getY(counter);
    ctx.lineTo(i, y);
    counter += increase;
  }
  ctx.stroke();
}

let i = 0;
setInterval(()=>{
  createWave(i+=0.5);
}, 100)