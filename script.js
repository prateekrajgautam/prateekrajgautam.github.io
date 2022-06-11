console.log("loaded")
var intro = document.getElementById("introduction").innerHTML
var embedintro = document.getElementsByClassName("intro")
embedintro[0].innerHTML = intro + embedintro[0].innerHTML;
function copyHTML() {
    var data = document.getElementById("code").innerHTML
    // navigator.clipboard.writeText(data)
    // alert("Copied to clip")
}


introArray = ["hi", "how are you"]
introduction.innerHTML += gen(p, "", introArray, 'p1')