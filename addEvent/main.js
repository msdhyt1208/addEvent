const addBtn = document.querySelectorAll(".add>button");
const removeBtn = document.querySelectorAll(".remove>button");
const ul = document.querySelector("ul");
const lineDrag = document.querySelector(".line-move");
const lineMove = document.querySelector(".line-move span:nth-child(1)");
let drag = null;


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
  console.log("dragstart:"+event.rayerX);
  
})
lineDrag.addEventListener("dragover",function(event){
  event.preventDefault();
  console.log("dragover:"+event.clientX);
  lineMove.style.width = event.clientX+"px";
})
lineDrag.addEventListener("drop",function(event){
  console.log(event);
  lineMove.style.width = event.clientX+"px";
})
