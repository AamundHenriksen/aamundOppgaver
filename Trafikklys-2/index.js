const redLight = document.getElementById("red-light")
const greenLight = document.getElementById("green-light")
const redMan = document.getElementById("red-man")
const greenMan = document.getElementById("green-man")

redMan.style.visibility = "hidden"
greenMan.style.visibility = "hidden"

function trafficLight(light1, light2) {
    if (light1) {
        setTimeout(function() {
            redMan.style.visibility = "visible"
        }, 1000)
    } if (light2) {
        setTimeout(function() {
            redMan.style.visibility = "hidden"
            greenMan.style.visibility = "visible"
        }, 2000)
    }
}