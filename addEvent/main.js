const page = {
  querySelectorAll: document.querySelectorAll(".top > button"),
  addEvent:function(i,target){
    console.log(i)
    target.parentNode.parentNode.className= "page"+(i+1);
  }
}
for(let i =0;i<page.querySelectorAll.length;i++){
  console.log("page"+page.querySelectorAll.length);
  page.querySelectorAll[i].addEventListener("click",function(){
    page.addEvent(i,page.querySelectorAll[i])
  })
}


const addBtn = document.querySelectorAll(".add>button");
const removeBtn = document.querySelectorAll(".remove>button");
const ul = document.querySelector("ul");
let numbar = 0;
blockSelect = null;

// <li>作成ボタン
for(let i=0;i<addBtn.length;i++){
  addBtn[i].addEventListener("click",function(){
    const crLi = document.createElement("li");
    crLi.textContent = `${numbar++}`;
    crLi.draggable = true;
    crLi.addEventListener("click",function(){
      const selc = document.querySelectorAll(".select");
      if(this.className !== ""){
        this.className = "";
        return;
      }
      if(selc.length !== 0)   selc[0].className = "";
      this.className = "select";
    })
    crLi.addEventListener("dragstart",function(event){
      blockSelect = event.target;
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
        ul.insertBefore(crLi,selct.nextElementSibling);
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



const lineDrag = document.querySelector(".line-move");
const lineMove = document.querySelectorAll(".line-move span");
let lineselect = null;
lineDrag.addEventListener("dragstart",function(event){
  if(event.target === lineMove[1])  lineselect = true;
})
lineDrag.addEventListener("dragover",function(event){
  
  if(lineselect){
    lineMove[0].style.width = event.clientX-100 + "px";
    event.preventDefault();
  }
})
lineDrag.addEventListener("drop",function(event){
  event.preventDefault();
  if(lineselect)    lineselect = false;
})




// https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/drag_event
const blockBox = document.querySelectorAll(".block-move>ul");
const block = document.querySelectorAll(".block-move>ul>li");
console.log(blockBox.length);
for(let i=0;i<blockBox.length;i++){

  blockBox[i].addEventListener("dragstart",function(event){
    blockSelect = event.target;
  }) 
  blockBox[i].addEventListener("dragover",function(event){
    event.preventDefault();
  }) 
  blockBox[i].addEventListener("drop",function(event){
    event.preventDefault();
    if(blockSelect !== null){
      blockSelect.remove();
      this.appendChild(blockSelect);
      blockSelect =null;
    }
  })
 
  
}




const mousePosition = document.querySelector(".mouse-move")
mousePosition.addEventListener("mousemove",function(e){

  this.firstElementChild.textContent = `clientX${e.clientX}: clientY${e.clientY}`;
})



const scrollBox =  document.querySelector(".scroll");
let sl = scrollBox.firstElementChild.scrollLeft;
const scrollWidth = scrollBox.firstElementChild.scrollWidth;

const li = document.querySelectorAll(".scroll li");
for(let i = 0;i<10;i++){
  const crLi = document.createElement("li");
  crLi.cloneNode(li[i]);
  li[i].parentElement.appendChild(crLi);
}
scrollBox.addEventListener("wheel", function(event){
  wheel(this,1,event);
})


function wheel(addThis,speed,event){
  const target = addThis.firstElementChild;

  sl += speed*event.wheelDelta ;
  console.dir(event.wheelDelta)
  if(sl <= 0)   sl += scrollWidth;
  else if(sl >= scrollWidth)
                sl -= scrollWidth;
  target.scrollLeft = sl;
  event.preventDefault();
}
let n=0;
// setInterval(function(){wheel(10,1)},10)




addEventListener('abort',       function(event) { console.log(`about`)});
addEventListener('ended',       function()      { console.log(`ended`)});
addEventListener('addtrack',    function(event) { console.log(`addtrack`)});
addEventListener('change',      function(event) { console.log(`change`)});
addEventListener('messageerror',function(event) { console.log(`messageerror`)});
addEventListener('message"',    function(event) { console.log(`message"`)});
