// console.log(`TEST`);

// // ? variables
// let sliderHolder = document.getElementById(`slideHolder`)

// let move = 0




// // ? auto slide every 3 seconds

// setInterval( function autoSlide() {

//     console.log(`AUTO SLIDE`);
//     move += -100

//     sliderHolder.style.transform = `translateX(${move}vw)`

//     if (sliderHolder.style.transform == "translateX(-500vw)") {
//         move = 0
//         console.log(`AUTO SLIDE RESET`);
//     }

//     sliderHolder.style.transform = `translateX(${move}vw)`
//     console.log(sliderHolder.style.transform);

// }, 3000);



// // ? button function
// // function prevBtn() {
// //     console.log(`PREV`);
// //     move += 25

// //     if (sliderHolder.style.transform == "translateX(0%)") {
// //         move = 0
// //     }

// //     sliderHolder.style.transform = `translateX(${move}%)`
// //     console.log(sliderHolder.style.transform);
// // }

// // function nextBtn() {
// //     console.log(`NEXT`);
// //     move -= 25

// //     if (sliderHolder.style.transform == "translateX(-75%)") {
// //         move = -75
// //     }

// //     sliderHolder.style.transform = `translateX(${move}%)`
// //     console.log(sliderHolder.style.transform);
    
// // }

// // ? compile into one function
// function slideBtn(num) {

//     // ? reset autoSlide
//     // clearInterval(autoSlide)


//     if (num > 0) {
//         console.log(`PREV`);
//         move += num
    
//         if (sliderHolder.style.transform == "translateX(0vw)") {
//             move = 0
//         }
    
//         sliderHolder.style.transform = `translateX(${move}vw)`
//         console.log(sliderHolder.style.transform);
//     }

//     else if (num < 0) {
//         console.log(`NEXT`);
//         move += num
    
//         // ? calculation;  100 / (number 0f image) * (number of image - 1)
//         if (sliderHolder.style.transform == "translateX(-400vw)") {
//             move = -400
//         }
    
//         sliderHolder.style.transform = `translateX(${move}vw)`
//         console.log(sliderHolder.style.transform);
//     }  

//     // setInterval (autoSlide, 2000)
// }


