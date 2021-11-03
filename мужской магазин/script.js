
var acc = document.getElementsByClassName("accord");
var i;

for(i=0;i<acc.length;i++){
  acc[i].addEventListener("click",function(){
    this.classList.toggle("active");
    let panel=this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
    }
    else{
      panel.style.maxHeight=panel.scrollHeight+ "px";
    }
  });

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("cv").style.top = "0";
  } else {
    document.getElementById("cv").style.top = "40px";
  }
}

function Burger(x){
  if(x.classList.toggle("change"))
  openNav();
  else{
    closeNav();
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
 

}
function closeNav() {
  document.getElementById("mySidenav").style.width= "0";
}
let modal=document.getElementById("MyModal");
let Img=document.getElementById("myImg");
let ModalImg=document.getElementById("img01");
let caption=document.getElementById("caption-text");
Img.onclick=function(){
  modal.style.display="block";
  ModalImg.src=this.src;
  caption.innerHTML=this.alt;

}
let span=document.getElementsByClassName("close")[0];
span.onclick=function(){
  modal.style.display="none ";
}