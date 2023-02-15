const addBtn = document.querySelectorAll(".add>button");
const removeBtn = document.querySelectorAll(".remove>button");
const ul = document.querySelector("ul");


const lineDrag = document.querySelector(".line-move");
const lineMove = document.querySelector(".line-move span:nth-child(1)");
let moveX;
let drag = null;




const mousePosition = document.querySelector(".mouse-move")

let numbar = 0;


// <li>作成ボタン
for(let i=0;i<addBtn.length;i++){
  addBtn[i].addEventListener("click",function(){
    const crLi = document.createElement("li");
    crLi.textContent = `${numbar++}`;
    crLi.addEventListener("click",function(){
      const selc = document.querySelectorAll(".select");
      if(this.className !== ""){
        this.className = "";
        return;
      }
      if(selc.length !== 0)   selc[0].className = "";
      this.className = "select";
    })
    ul.appendChild(crLi);
    const selct = document.querySelector(".select");
    switch(i){
      case 0: 
        ul.insertBefore(crLi,ul.firstChild);
        break;
      case 1:
        ul.insertBefore(crLi,selct);
        break;
      case 2:
        ul.insertBefore(crLi,selct.nextSibling);
        break;
    }
  })
}
// <li>削除ボタン
for(let i= 0;i<removeBtn.length;i++){
  removeBtn[i].addEventListener("click",function(){
    const selc = document.querySelector(".select");
    switch(i){
      case 0:
        ul.firstChild.remove();
        break;
      case 1:
        selc.remove();  
        break;
      default:
        ul.lastChild.remove();
    }
  })
}

lineDrag.addEventListener("dragstart",function(event){
})
lineDrag.addEventListener("dragover",function(event){
  event.preventDefault();
  lineMove.style.width = event.clientX-100 + "px";
})
lineDrag.addEventListener("drop",function(event){
  lineMove.style.width = event.clientX-100 + "px";
})

// https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/drag_event
const blockBox = document.querySelectorAll(".block-move>ul");
const block = document.querySelectorAll(".block-move>ul>li");
blockSelect = null;
console.log(blockBox.length);
for(let i=0;i<blockBox.length;i++){

  blockBox[i].addEventListener("dragstart",function(event){
    blockSelect = event.target;

    console.log(event)
    // blockSelect = block[i];
  }) 
  blockBox[i].addEventListener("dragover",function(event){
    event.preventDefault();
  }) 
  blockBox[i].addEventListener("drop",function(event){
    event.preventDefault();
    if(blockSelect !== null){
      blockSelect.remove();
      event.target.appendChild(blockSelect);
      blockSelect =null;
    }
  })


}




mousePosition.addEventListener("mousemove",function(e){
  console.log(e.clientX-e.offsetX);

  this.firstElementChild.textContent = `clientX${e.clientX}: clientY${e.clientY}`;
})
