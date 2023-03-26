setInterval(() => {
    document.getElementById("glavid1").style.background = "blue"
    document.getElementById("glavid2").style.background = "white"

}, 300);


 setTimeout(() => {
    setInterval(() => {
        document.getElementById("glavid1").style.background = "white"
        document.getElementById("glavid2").style.background = "blue"


    }, 300);
}, 2500);


setInterval(() => {

    document.getElementById("div1").style.background = "blue"
    document.getElementById("div2").style.background = "blue"
    document.getElementById("div3").style.background = "blue"
    document.getElementById("div4").style.background = "blue"
    document.getElementById("div5").style.background = "yellow"
    document.getElementById("div6").style.background = "red"
    document.getElementById("div7").style.background = "red"
    document.getElementById("div8").style.background = "yellow"

}, 200);

setInterval(() => {

    document.getElementById("div1").style.background = "red"
    document.getElementById("div2").style.background = "red"
    setTimeout(() => {
        
    
    document.getElementById("div5").style.background = "red"
    document.getElementById("div8").style.background = "red"
}, 3000);

}, 500);
setInterval(() => {

    document.getElementById("div3").style.background = "red"
    document.getElementById("div4").style.background = "red"
    document.getElementById("div6").style.background = "yellow"
    document.getElementById("div7").style.background = "yellow"


}, 800);

setInterval(() => {
    document.getElementById('klor1').style.background = "red"
    document.getElementById('klor2').style.background = "black"

}, 100);
setInterval(() => {
    document.getElementById('klor1').style.background = "black"
    document.getElementById('klor2').style.background = "red"

}, 200);