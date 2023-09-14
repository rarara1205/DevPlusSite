function openSideMenu(){
  document.getElementById("right-side-menu").style.transform = "translateX(0)";
}

function closeSideMenu(){
  document.getElementById("right-side-menu").style.transform = "translateX(100%)";
}

const modalImg = document.getElementById("modal-img");
const modalFig = document.getElementById("modal-fig");

function modalAnim(){
  modalFig.classList.add("animate");
  modalFig.addEventListener("animationend", ()=>{
    modalFig.classList.remove("animate");
  })
}

function openModal(num){
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+num+".png";
  document.getElementById("modal").classList.add("modal-active");
  modalAnim();
}

function closeModal(){
  document.getElementById("modal").classList.remove("modal-active");
}

function showPreviousImg(){
  modalFig.className = "";
  const src = modalImg.src;
  const currentNum = parseInt(src.charAt(src.length - 5));
  const nextNum = currentNum != 1 ? currentNum - 1 : 6;
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+nextNum+".png";
  modalAnim();
}

function showNextImg(){
  modalFig.className = "";
  const src = modalImg.src;
  const currentNum = parseInt(src.charAt(src.length - 5));
  const nextNum = currentNum != 6 ? currentNum + 1 : 1;
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+nextNum+".png";
  modalAnim();
}

let currentAnsNum = undefined;
let currentActiveBtn = undefined;

const btns = document.getElementsByClassName("accordion-btn");
const bodys = document.getElementsByClassName("accordion-body");
for(i=0;i<btns.length;i++){
  btns[i].addEventListener("click",showAnswer);
}

function showAnswer(e){
  if(currentAnsNum == undefined){
    console.log("first");
    currentAnsNum = e.target.value-1;
    btns[currentAnsNum].classList.add("active");
    bodys[currentAnsNum].classList.add("active");
    bodys[currentAnsNum].style.setProperty("--max-height", `${bodys[currentAnsNum].firstElementChild.getBoundingClientRect().height}px`);
  }
  else if(currentAnsNum != e.target.value-1){
    console.log("change");
    btns[currentAnsNum].classList.remove("active");
    bodys[currentAnsNum].classList.remove("active");
    currentAnsNum = e.target.value-1;
    btns[currentAnsNum].classList.add("active");
    bodys[currentAnsNum].classList.add("active");
    bodys[currentAnsNum].style.setProperty("--max-height", `${bodys[currentAnsNum].firstElementChild.getBoundingClientRect().height}px`);
  }
  else{
    console.log("same");
    btns[currentAnsNum].classList.toggle("active");
    bodys[currentAnsNum].classList.toggle("active");
    bodys[currentAnsNum].style.setProperty("--max-height", `${bodys[currentAnsNum].firstElementChild.getBoundingClientRect().height}px`);
  }
  btns[currentAnsNum].firstElementChild.classList.toggle("fa-bell-slash");
}

function scrollUp(){
  window.scroll({top: 0, behavior: 'smooth'});
}