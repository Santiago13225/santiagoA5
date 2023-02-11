alert("Hello, world!");

function alerting() {
    alert("Hello, world!");
}

function makeBig() {
    textarea.style.fontSize = "24pt";
}

function fancify() {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
    alert("Styles added to the text area.");
    const altBtn = document.getElementById('boring')
    altBtn.checked = false;
}

function borify() {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
    
    alert("Styles removed from the text area.");
    const fstBtn = document.getElementById('fancy')
    fstBtn.checked = false;
}

function makeMoo() {
    textarea.style.textTransform = "uppercase";
    let str = textarea.value.split(".");
    let str2 = str.join("-Moo.");
    textarea.value = str2;
    let str3 = textarea.value.split("!");
    let str4 = str3.join("-Moo!");
    textarea.value = str4;
    let str5 = textarea.value.split("?");
    let str6 = str5.join("-Moo?");
    textarea.value = str6;

}