import {useEffect} from "react";

function Resume() {
  useEffect(() => {

  })
 
  function showDropDownMenu(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter").innerText =
      targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");

  }
  function showDropDownMenuOne(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-one").innerText =
      targetText;
    document.getElementById("drop-down-div-one").classList.toggle("hidden");

  }
  function showDropDownMenutwo(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo(el) {
    const targetText = el.target.innerHTML;
    document.getElementById("drop-down-content-setter-two").innerHTML =
      targetText;
    document.getElementById("drop-down-div-two").classList.toggle("hidden");

  }


  return (
    <>


    </>
  );
}

export default Resume;
