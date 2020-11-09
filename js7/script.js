function sombraMouse(event) {
    let ponto = document.createElement("div");
    ponto.className = "ponto";
    ponto.style.top = (event.pageY - 5) + "px";
    ponto.style.left = (event.pageX - 5) + "px";
    document.body.appendChild(ponto);  
   
    if(8 < document.body.childNodes.length){
        document.body.removeChild(document.body.firstChild);
    }
}

document.addEventListener("mousemove", function(event) {
    sombraMouse(event);
});
