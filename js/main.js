// Selecting DOM
const submit1 = document.getElementById("submitConv");
const submit2 = document.getElementById("submitClr");
const result = document.getElementById("result");

var finaltxt = "";
// Function
function genPass(e) {
  e.preventDefault(e);
  if(finaltxt != "")
  {
    finaltxt = "";
  }
  var str = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&";
  var len = str.length;
  for(var i = 1; i <= 10; i++)
  {
    var idx = Math.floor(Math.random() * (len - 1));
    finaltxt += str[idx];
  }
  result.style.visibility = "visible";
  result.innerHTML = finaltxt;
}

function allClear() {
  const res = document.getElementById("result").value;

  if (txt != "" || res != "") {
    document.getElementById("word").value = "";
    document.getElementById("result").innerHTML = "";
  }
}



submit1.addEventListener("click", genPass);
submit2.addEventListener("click", allClear);
