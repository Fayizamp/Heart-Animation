const bodyEle = document.querySelector("body");


bodyEle.addEventListener("mousemove", (event) =>{
    const x = event.offsetX;   //numbers 
    const y = event.offsetY;
    const spanEle = document.createElement("span");
    spanEle.style.left = x + "px";
    spanEle.style.top =y + "px";

    const size = Math.random()*100;
    spanEle.style.width = size + "px";
    spanEle.style.height = size + "px";

    bodyEle.appendChild(spanEle);

    setTimeout(()=> {
        spanEle.remove();
    },3000);
});

