const out = document.querySelector("#out")
function konwertuj() {
    var elms = document.querySelectorAll("[id='in']");
    out.textContent = (+elms[0].value).toString(2)+'.'+(+elms[1].value).toString(2)+'.'+(+elms[2].value).toString(2)+'.'+(+elms[3].value).toString(2);
}