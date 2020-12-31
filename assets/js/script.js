var conlst = document.getElementsByClassName("containerbutton");
var i;
for (i = 0; i < conlst.length; i++) {
  conlst[i].addEventListener("click", function() {
    var cotainer = this.nextElementSibling;
    if (cotainer.style.display === "block") {
        cotainer.style.display = "none";
        this.style.backgroundColor = "#c7ccc4";
    } else {
        cotainer.style.display = "block";
        this.style.backgroundColor = "#a69aab";
    }
  });
}

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    alert("Copied: " + text);
}
