function openNav() {
    document.getElementById("sidenav").style.right = "100%";
}
 
function closeNav() {
    document.getElementById("sidenav").style.right = "-100%";
}

function closePopout() {
    document.getElementById("popout").style.top = "-50%";
     document.getElementById("shadow").style.height = "0%";
}
function openPopout() {
    document.getElementById("popout").style.top = "50%";
     document.getElementById("shadow").style.height = "100%";
}
function clsAlert() {
     document.getElementById("alert").style.height = "0px";
}
function pic1() {
     document.getElementById("pic1").style.opacity = "1";
     document.getElementById("pic2").style.opacity = "0";
     document.getElementById("pic3").style.opacity = "0";
     document.getElementById("pic4").style.opacity = "0";
     document.getElementById("pic5").style.opacity = "0";
}
function pic2() {
     document.getElementById("pic1").style.opacity = "0";
     document.getElementById("pic2").style.opacity = "1";
     document.getElementById("pic3").style.opacity = "0";
     document.getElementById("pic4").style.opacity = "0";
     document.getElementById("pic5").style.opacity = "0";
}
function pic3() {
     document.getElementById("pic1").style.opacity = "0";
     document.getElementById("pic2").style.opacity = "0";
     document.getElementById("pic3").style.opacity = "1";
     document.getElementById("pic4").style.opacity = "0";
     document.getElementById("pic5").style.opacity = "0";
}
function pic4() {
     document.getElementById("pic1").style.opacity = "0";
     document.getElementById("pic2").style.opacity = "0";
     document.getElementById("pic3").style.opacity = "0";
     document.getElementById("pic4").style.opacity = "1";
     document.getElementById("pic5").style.opacity = "0";
}
function pic5() {
     document.getElementById("pic1").style.opacity = "0";
     document.getElementById("pic2").style.opacity = "0";
     document.getElementById("pic3").style.opacity = "0";
     document.getElementById("pic4").style.opacity = "0";
     document.getElementById("pic5").style.opacity = "1";
}