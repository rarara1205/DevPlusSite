function openSideMenu(){
  document.getElementById("right-side-menu").style.transform = "translateX(0)";
}

function closeSideMenu(){
  document.getElementById("right-side-menu").style.transform = "translateX(100%)";
}

const modalImg = document.getElementById("modal-img");

function openModal(num){
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+num+".png";

  document.getElementById("modal").classList.add("modal-active");
}

function closeModal(){
  document.getElementById("modal").classList.remove("modal-active");
}

function showPreviousImg(){
  const src = modalImg.src;
  const currentNum = parseInt(src.charAt(src.length - 5));
  const nextNum = currentNum != 1 ? currentNum - 1 : 6;
  console.log(nextNum);
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+nextNum+".png";
}

function showNextImg(){
  const src = modalImg.src;
  const currentNum = parseInt(src.charAt(src.length - 5));
  const nextNum = currentNum != 6 ? currentNum + 1 : 1;
  console.log(nextNum);
  modalImg.src = "https://devplus.edu.vn/assets/images/devplus/"+nextNum+".png";
}