// Your code goes here

// 1 and 2: Mouseover and Mouseout
const busImg = document.querySelector(".bus-img")

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(2)";
    busImg.style.transition = "transform 1s";
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
})

// 3. Keydown
const keyDown = document.querySelector("body")

keyDown.addEventListener("keydown", function checkKeyPress(key){
    if (key.keyCode === 65){
        alert("Fire in the hole!!!")
    }
}, false);

// 4. Wheel
const wheelEvent = document.querySelector(".logo-heading")

wheelEvent.addEventListener("wheel", () => {
    wheelEvent.style.transform = "rotate(360deg)"
    wheelEvent.style.transition = "transform 3s"
})

// 5. Click
const buttonEvent = document.querySelectorAll(".btn")
Array.from(buttonEvent).forEach((buttonElement) => {
    buttonElement.addEventListener("click", ()=> {
        buttonElement.style.backgroundColor = "red"
    })
})

// 6. Dblclick

const dblclickEvent = document.querySelector(".content-destination")

dblclickEvent.addEventListener("dblclick", ()=> {
    dblclickEvent.style.backgroundColor = "purple"
})

// 7 and 8: Mouseenter and Mouseleave
const mouseenterEvent = document.querySelectorAll(".destination")[2]

mouseenterEvent.addEventListener("mouseenter", () => {
    mouseenterEvent.style.transform = "scale(2)";
    mouseenterEvent.style.transition = "transform 1s"
})

mouseenterEvent.addEventListener("mouseleave", () => {
    mouseenterEvent.style.transform = "scale(1)"
})

// 9 and 10: Focus and Blur

const focusEvent = document.querySelector(".form")
    
focusEvent.addEventListener("focus", () => {
    focusEvent.style.backgroundColor = "red";
}, true);

focusEvent.addEventListener("blur", () => {
    focusEvent.style.backgroundColor = "";
}, true);