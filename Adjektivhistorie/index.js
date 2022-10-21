// Variables
const text = document.getElementById("text")
let a = "___"
let b = "___"
let c = "___"
let d = "___"
const green = "green"
const red = "red"
const cat = "cat"
const man = "man"
const stared = "stared"
const jumped = "jumped"
const pool = "pool"
const wall = "wall"

// Functions
function btnGreen() {
    a = green
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnRed() {
    a = red
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnCat() {
    b = cat
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnMan() {
    b = man
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnStared() {
    c = stared
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnJumped() {
    c = jumped
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnPool() {
    d = pool
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}

function btnWall() {
    d = wall
    text.innerHTML = `Once, there was a ${a} ${b} that ${c} in the ${d} - and great things happened. The End.`
}