let nodeList = document.getElementsByTagName("li");
for (var i = 0; i < nodeList.length; i++) {
  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  nodeList[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
document.getElementById("count").innerHTML = nodeList.length