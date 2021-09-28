console.log(`TEST`);

let sound1 = document.getElementById(`sound1`)
let sound2 = document.getElementById(`sound2`)
let sound3 = document.getElementById(`sound3`)
let sound4 = document.getElementById(`sound4`)
let sound5 = document.getElementById(`sound5`)
let sound6 = document.getElementById(`sound6`)
let sound7 = document.getElementById(`sound7`)
let sound8 = document.getElementById(`sound8`)
let sound9 = document.getElementById(`sound9`)

let key1 = document.getElementById(`key1`)
let key2 = document.getElementById(`key2`)
let key3 = document.getElementById(`key3`)
let key4 = document.getElementById(`key4`)
let key5 = document.getElementById(`key5`)
let key6 = document.getElementById(`key6`)
let key7 = document.getElementById(`key7`)
let key8 = document.getElementById(`key8`)
let key9 = document.getElementById(`key9`)

let light1 = document.getElementById(`light1`)
let light2 = document.getElementById(`light2`)
let light3 = document.getElementById(`light3`)
let light4 = document.getElementById(`light4`)
let light5 = document.getElementById(`light5`)
let light6 = document.getElementById(`light6`)
let light7 = document.getElementById(`light7`)
let light8 = document.getElementById(`light8`)
let light9 = document.getElementById(`light9`)






window.addEventListener("keydown", keyPressed)

window.addEventListener("keyup", keyUp)

function keyPressed(evt) {
    console.log(evt);
    if (evt.keyCode == 65) {
        console.log(`I pressed A`);
        sound1.play()
        key1.classList.add("activeKey")
        light1.classList.add("active-light")
        
    }
    if (evt.keyCode == 83) {
        console.log(`I pressed W`);
        sound2.play()
        key2.classList.add("activeKey")
        light2.classList.add("active-light")
    }
    if (evt.keyCode == 68) {
        console.log(`I pressed E`);
        sound3.play()
        key3.classList.add("activeKey")
        light3.classList.add("active-light")
    }
    if (evt.keyCode == 70) {
        console.log(`I pressed R`);
        sound4.play()
        key4.classList.add("activeKey")
        light4.classList.add("active-light")
    }
    if (evt.keyCode == 71) {
        console.log(`I pressed Y`);
        sound5.play()
        key5.classList.add("activeKey")
        light5.classList.add("active-light")
    }
    if (evt.keyCode == 72) {
        console.log(`I pressed U`);
        sound6.play()
        key6.classList.add("activeKey")
        light6.classList.add("active-light")
    }
    if (evt.keyCode == 74) {
        console.log(`I pressed I`);
        sound7.play()
        key7.classList.add("activeKey")
        light7.classList.add("active-light")
    }
    if (evt.keyCode == 75) {
        console.log(`I pressed O`);
        sound8.play()
        key8.classList.add("activeKey")
        light8.classList.add("active-light")
    }
    if (evt.keyCode == 76) {
        console.log(`I pressed P`);
        sound9.play()
        key9.classList.add("activeKey")
        light9.classList.add("active-light")
    }
}

function keyUp(evt) {
    console.log(evt);
    if (evt.keyCode == 65) {
        console.log(`I released Q`);
        sound1.load()
        key1.classList.remove("activeKey")
        light1.classList.remove("active-light")
    }
    if (evt.keyCode == 83) {
        console.log(`I released W`);
        sound2.load()
        key2.classList.remove("activeKey")
        light2.classList.remove("active-light")
    }
    if (evt.keyCode == 68) {
        console.log(`I released E`);
        sound3.load()
        key3.classList.remove("activeKey")
        light3.classList.remove("active-light")
    }
    if (evt.keyCode == 70) {
        console.log(`I released R`);
        sound4.load()
        key4.classList.remove("activeKey")
        light4.classList.remove("active-light")
    }
    if (evt.keyCode == 71) {
        console.log(`I released Y`);
        sound5.load()
        key5.classList.remove("activeKey")
        light5.classList.remove("active-light")
    }
    if (evt.keyCode == 72) {
        console.log(`I released U`);
        sound6.load()
        key6.classList.remove("activeKey")
        light6.classList.remove("active-light")
    }
    if (evt.keyCode == 74) {
        console.log(`I released I`);
        sound7.load()
        key7.classList.remove("activeKey")
        light7.classList.remove("active-light")
    }
    if (evt.keyCode == 75) {
        console.log(`I released O`);
        sound8.load()
        key8.classList.remove("activeKey")
        light8.classList.remove("active-light")
    }
    if (evt.keyCode == 76) {
        console.log(`I released P`);
        sound9.load()
        key9.classList.remove("activeKey")
        light9.classList.remove("active-light")
    }
}


// ? MOUSE EVENTS


window.addEventListener("mousedown", mouseDown)

window.addEventListener("mouseup", mouseUp)

function mouseDown(evt) {
    console.log(evt.originalTarget.nextElementSibling.attributes.id.value);

    let id = evt.originalTarget.nextElementSibling.attributes.id.value

    if (id == "sound1") {
        sound1.play()
    }
    if (id == "sound2") {
        sound2.play()
    }
    if (id == "sound3") {
        sound3.play()
    }
    if (id == "sound4") {
        sound4.play()
    }
    if (id == "sound5") {
        sound5.play()
    }
    if (id == "sound6") {
        sound6.play()
    }
    if (id == "sound7") {
        sound7.play()
    }
    if (id == "sound8") {
        sound8.play()
    }
    if (id == "sound9") {
        sound9.play()
    }
    
}

function mouseUp(evt) {
    console.log(evt.originalTarget.nextElementSibling.attributes.id.value);

    let id = evt.originalTarget.nextElementSibling.attributes.id.value

    if (id == "sound1") {
        sound1.load()
    }
    if (id == "sound2") {
        sound2.load()
    }
    if (id == "sound3") {
        sound3.load()
    }
    if (id == "sound4") {
        sound4.load()
    }
    if (id == "sound5") {
        sound5.load()
    }
    if (id == "sound6") {
        sound6.load()
    }
    if (id == "sound7") {
        sound7.load()
    }
    if (id == "sound8") {
        sound8.load()
    }
    if (id == "sound9") {
        sound9.load()
    }
    
}


