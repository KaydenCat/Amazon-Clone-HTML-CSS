let slideBtnLeft  = document.getElementById("slide-btn-left")
let slideBtnRight  = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-items")

console.log(imgItem.length-1)

let startslider = 0
let endslider = (imgItem.length-1) * 100

slideBtnLeft.addEventListener("click" , ()=>{
    if(startslider < 0)
    {
        startslider = startslider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startslider}%)`;
    })
})
slideBtnRight.addEventListener("click" , ()=>{
    if(startslider >= -endslider+100)
    {
        startslider = startslider - 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startslider}%)`;
    })

    
})