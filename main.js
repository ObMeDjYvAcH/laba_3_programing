var test = document.getElementsByClassName("text-part");
var time = 0;
function makeClick() {
  if (time === 0) {
    test[0].style.display = "flex";
    setTimeout(myFunction, 3000);
    time++;
  } else if (time > 0) {
    return false;
  }
}

function myFunction() {
  test[0].style.display = "none";
  time = 0;
}
