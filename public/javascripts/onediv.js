function secondFunction(){
    if(secondDiv.style.backgroundColor == "blue") {
      secondDiv.style.backgroundColor = "red";
    }
    else {
      secondDiv.style.backgroundColor = "blue";
    }
    secondDiv.innerHTML = "<h1>Thank You! Do it again!</h1>"
}

var secondDiv = document.getElementById("onediv")
secondDiv.addEventListener("click",secondFunction);
