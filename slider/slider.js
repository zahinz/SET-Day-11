console.log(`TEST`);

// ? ID variables
let sliderHolder = document.getElementById(`slideHolder`)

// ? slider movement value 
let move = 0

// ? limit width for slider holder
let limitWidth = 0

// // ? variable for create new div
// let createSliderEle = document.createElement(`div`)

// // ? give attribute ID to the newly created div

// createSliderEle.setAttribute("id", "slide");

// // ! NEW KNOWLEDGE
// sliderHolder.appendChild(createSliderEle)




// ? declare the array
let sliderList = [`slider 1`, `slider 2`, `slider 3`, `slider 4`, `slider 5`]




// ? inject the div using for based on the number of the array

for (let i = 0; i < sliderList.length; i++) {

    console.log(`create element`, i);


    // ? variable for create new div
    let createSliderEle = document.createElement(`div`)


    // ? give attribute ID to the newly created div
    createSliderEle.setAttribute("id", "slide");


    // ! NEW KNOWLEDGE
    // ? set the nth child here
    sliderHolder.appendChild(createSliderEle)


    // ? set the width for #sliderHolder
    sliderHolder.style.width = ((i+2)*100) + "vw"


    // ? update the limit depend on the array.Length
    limitWidth = (i+1)*100
    console.log("limit width: ", limitWidth);


}




// ? auto slide every 3 seconds
let slideAuto = setInterval( function autoSlide() {

    console.log(`AUTO SLIDE`);
    move += -100

    sliderHolder.style.transform = `translateX(${move}vw)`

    if (sliderHolder.style.transform == `translateX(-${limitWidth}vw)`) {
        move = 0
        console.log(`AUTO SLIDE RESET`);
        console.log(" ");
    }

    sliderHolder.style.transform = `translateX(${move}vw)`
    console.log(sliderHolder.style.transform);

}, 3000);




// ? button function
// function prevBtn() {
//     console.log(`PREV`);
//     move += 25

//     if (sliderHolder.style.transform == "translateX(0%)") {
//         move = 0
//     }

//     sliderHolder.style.transform = `translateX(${move}%)`
//     console.log(sliderHolder.style.transform);
// }

// function nextBtn() {
//     console.log(`NEXT`);
//     move -= 25

//     if (sliderHolder.style.transform == "translateX(-75%)") {
//         move = -75
//     }

//     sliderHolder.style.transform = `translateX(${move}%)`
//     console.log(sliderHolder.style.transform);
    
// }

// ? compile into one function
function slideBtn(num) {


    if (num > 0) {
        console.log(`PREV`);
        move += num
    
        if (sliderHolder.style.transform == "translateX(0vw)") {
            move = 0
        }
    
        sliderHolder.style.transform = `translateX(${move}vw)`
        console.log(sliderHolder.style.transform);
    }

    else if (num < 0) {
        console.log(`NEXT`);
        move += num
    
        // ? calculation;  100 / (number 0f image) * (number of image - 1)
        if (sliderHolder.style.transform == `translateX(-${limitWidth-100}vw)`) {
            move = -`${limitWidth-100}`
        }
    
        sliderHolder.style.transform = `translateX(${move}vw)`
        console.log(sliderHolder.style.transform);
    }  
}




// ? stop resume slider when hover at the button

function stopSlider() {
    console.log(`STOP`);
    // ? reset autoSlide
    clearInterval(slideAuto)

}

function resumeSlider() {
    console.log(`RESUME`);
}


