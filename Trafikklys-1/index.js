const redLight = document.getElementById("red-light")
const orangeLight = document.getElementById("orange-light")
const greenLight = document.getElementById("green-light")
const container = document.getElementById("container")

function trafficLight(light1, light2, light3) {
    if (light1) {
        setTimeout(function() {
            let red = light1.style.backgroundColor = "red"
            light1.style.backgroundColor = red
        }, 1000)
    } if (light2) {
        setTimeout(function() {
            light1.style.backgroundColor = ""
            let orange = light2.style.backgroundColor = "orange"
            light2.style.backgroundColor = orange
        }, 2000)
    } if (light3) {
        setTimeout(function() {
            light2.style.backgroundColor = ""
            let green = light3.style.backgroundColor = "green"
            light3.style.backgroundColor = green
        }, 3000)
    }
}












