function pageChenge(){
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
}
pageChenge();

function addRemove(){
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
}
addRemove();

function lineMove(){
  const drag = document.querySelector(".line-move");
  const move = document.querySelectorAll(".line-move span");
  let lineselect = null;
  drag.addEventListener("dragstart",function(event){
    if(event.target === lineMove[1])  lineselect = true;
  })
  drag.addEventListener("dragover",function(event){
    
    if(lineselect){
      move[0].style.width = event.clientX-100 + "px";
      event.preventDefault();
    }
  })
  drag.addEventListener("drop",function(event){
    event.preventDefault();
    if(lineselect)    lineselect = false;
  })
}
lineMove();

function blockMove(){
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
}
blockMove();

function mousePosition(){
  const mousePosition = document.querySelector(".mouse-move")
  mousePosition.addEventListener("mousemove",function(e){
  
    this.firstElementChild.textContent = `clientX${e.clientX}: clientY${e.clientY}`;
  })
}
mousePosition();

// スクロール
scroll={
  scrollBox:null,
  li:null,
  scrollEnd:null,
  scrollWidth:null,

  action:function(){
    this.scrollBox = document.querySelector(".scroll>ul");
    this.li =        document.querySelectorAll(".scroll li");
    this.scrollWidth = this.scrollBox.scrollWidth;
    this.addbox(this.li);
    this.scrollEnd = this.scrollWidth + this.scrollStart;
    this.scrollBox.scrollLeft =  this.scrollWidth-10;
    this.wheel.addEventListener(this.scrollBox);
    this.scroll.addEventListener(this.scrollBox);
  },
  addbox: function(li) {
    console.log(li.length);
    for(let i = 0;i<10;i++){
      const crLi = document.createElement("li");
      console.log(li.length);
      crLi.textContent = li[i].textContent;
      crLi.cloneNode(li[i]);
      li[i].parentElement.appendChild(crLi);
    }
  },
  wheel : {
    whThis:this,
    addEventListener:function(){
      aThis = this;
      scroll.scrollBox.addEventListener("wheel", function(event){
       scroll.wheel.action(this,100,event.wheelDelta);
        event.preventDefault();
      })
    },
    action:function(target,speed,wheel){
      target.scrollLeft += speed*wheel/150 ;
    }
  },
  scroll:{
    addEventListener:function(scrollBox){
      aThis = this;
      scrollBox.addEventListener("scroll", function(event){
        aThis.action(this,aThis);
        event.preventDefault();
      })
    },
    action:function(target,scThis){
      console.dir(target.scrollLeft);
    if     (target.scrollLeft <= scThis.scrollStart)
        target.scrollLeft += scrollWidth;
    else if(target.scrollLeft > scThis.scrollEnd)
        target.scrollLeft -= scrollWidth;      
    }
  }
}
scroll.action();

function mausedrow(){
  const drowErea = document.querySelector(".draw");
  drowSlect = false;
  drowErea.addEventListener("click",function(event){
    crSq = document.createElement("div");
    crSq.style.top = event.clientY+"px";
    crSq.style.left = event.clientX+"px";
    drowErea.appendChild(crSq);
    console.dir(crSq)
  })
  // drowErea.addEventListener("dragstart",function(event){

  //   drowSlect = true;
  //   console.log("sdfghjk");
  // })
  // drowErea.addEventListener("dragover",function(event){
  //   setInterval(function(){
  //     if(drowSlect){
  //       crSq = document.createElement("div");
  //       crSq.style.top = event.clientY+"px";
  //       crSq.style.left = event.clientX+"px";
  //       drowErea.appendChild(crSq);
  //     }
  //   },10)
  //   event.preventDefault();
  // })
  // drowErea.addEventListener("drop",function(event){
  //   drowSlect = false;
  //   event.preventDefault();
  // })
}
mausedrow();



// setInterval(function(){wheel(scrollBox,1,-50)},100)




addEventListener('abort',       function(event) { console.log(`about`)});
addEventListener('ended',       function()      { console.log(`ended`)});
addEventListener('addtrack',    function(event) { console.log(`addtrack`)});
addEventListener('change',      function(event) { console.log(`change`)});
addEventListener('messageerror',function(event) { console.log(`messageerror`)});
addEventListener('message"',    function(event) { console.log(`message"`)});
