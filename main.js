const nav = document.querySelector(".rightside");
const hamMenu = document.querySelector(".hammenu")
function resize(){
    if (window.innerWidth < 1100){
        nav.classList.add("hidden");
        hamMenu.classList.remove("hidden");
    }
    else {
        nav.classList.remove("hidden");
        hamMenu.classList.add("hidden");
    }
}


window.addEventListener("resize", resize)