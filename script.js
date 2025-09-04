document.getElementById("icon").onclick=function(){
    document.getElementById("btn").classList.add("hello")
}
document.querySelector("body").ontouchstart=function(){
    document.getElementById("btn").classList.remove("hello")
}

document.querySelector("body").onscroll=function(){
    document.getElementById("btn").classList.remove("hello")
}

