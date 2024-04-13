const colorPicker = document.getElementById("bg");
colorPicker.addEventListener("input", myFunction);

function myFun() {

  document.body.style.backgroundColor = colorPicker.value;

}