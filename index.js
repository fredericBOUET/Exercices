const showCV = document.querySelector(".showCV")
const cv = document.querySelector(".cv")
const suprrButton = document.querySelector(".suprrButton")
const overlay = document.querySelector(".overlay")

//EVENT LISTENER

showCV.addEventListener('click', showCv)
suprrButton.addEventListener('click',hideCv)


//FUNCTION

function showCv (){
    cv.classList.add("active")
    overlay.style.display = "block"
}
function hideCv (){
    cv.classList.remove("active")
    overlay.style.display = "none"
}

/*
document.querySelector(".showCV").onclick = function(){
    const cv = document.querySelector(".cv")
    const overlay = document.querySelector(".overlay")
    
    window.addEventListener("scroll", noscroll)

    overlay.style.display = "block"
    cv.classList.add("active")
}

document.querySelector(".suprrButton").onclick = function(){
    const cv = document.querySelector(".cv")
    const overlay = document.querySelector(".overlay")

    window.removeEventListener("scroll", noscroll)
    overlay.style.display = "none"    
    cv.classList.remove("active")

}
*/