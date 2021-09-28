console.log(`TEST KEYBOARD`);


let boxy = document.getElementById(`boxy`)
let boxyPos = { x: 0, y: 0}

let keyList = []

let sound1 = document.getElementById(`sound1`)
let sound2 = document.getElementById(`sound2`)
let sound3 = document.getElementById(`sound3`)
let sound4 = document.getElementById(`sound4`)
let sound5 = document.getElementById(`sound5`)
let sound6 = document.getElementById(`sound6`)
let sound7 = document.getElementById(`sound7`)
let sound8 = document.getElementById(`sound8`)
let sound9 = document.getElementById(`sound9`)

window.addEventListener("keydown", keyPressed)
window.addEventListener("keyup", keyReleased)

function keyPressed (evt) {

    keyList[evt.keyCode] = true
    console.log("keyList : ",keyList);
    // console.log(evt);

    if (evt.code == "ArrowDown") {
        boxyPos.x += 5
    }
    else if (evt.code == "ArrowUp") {
        boxyPos.x -= 5
    }

    else if (evt.code == "ArrowRight") {
        boxyPos.y += 5
    }
    else if (evt.code == "ArrowLeft") {
        boxyPos.y -= 5
    }

    // switch (evt.code) {
    //     case "ArrowDown":
    //         boxyPos.x += 5
    //         break;

    //     case "ArrowUp":
    //         boxyPos.x -= 5
    //         break;

    //     case "ArrowRight":
    //         boxyPos.y += 5
    //         break;

    //     case "ArrowLeft":
    //         boxyPos.y -= 5
    //         break;   
    // }

    boxy.style.top = boxyPos.x + "%"
    boxy.style.left = boxyPos.y + "%" 

    console.log(" ");

}


function keyReleased(evt) {
    console.log(evt, "PRESSED UP");
    keyList[evt.keyCode] = false

    console.log(" ");

}