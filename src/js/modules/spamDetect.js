
export function spamDetect() {
  function handler(e) {
    var elem = e.target;
    var parent = elem.parentElement;
    var checkInput = parent.getElementsByClassName("check")[0];
    checkInput.value = "spamsecret";
  }
  
  var buttons = document.getElementsByClassName("btn-send");
  for (var i =0;i<buttons.length;i++) {
    buttons[i].onclick = handler;
  }
}
