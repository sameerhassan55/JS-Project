//  Choose with the help of hex code

// const getColor = () => {
//     const a = Math.floor(Math.random() * 16777215)
//     const randomcode = "#" + a.toString(16)
//     console.log(a, randomcode)
//     colorcode.innerText = randomcode
//     colorcode.style.color = randomcode
//     btn.style.backgroundColor = randomcode
//     document.body.style.backgroundColor = randomcode
//     // navigator.clipboard.writeText(randomcode)

// }


// document.getElementById("btn").addEventListener("click", getColor)
// getColor()



// //  Choose with the help of rgb function
// const myColor = () => {
   
//         let a = Math.floor(Math.random() * 256)
//         let b = Math.floor(Math.random() * 256)
//         let c = Math.floor(Math.random() * 256 )
//         let d = Math.floor(Math.random() * 9+1)
//         // d=d.toString()
//         // d= d.substr(0,3)
//         // console.log(a, b, c, d)
        
//         const colors = `rgb(${a},${b},${c},${d})`
//         // console.log(colors)
        
//         colorcode.innerText = colors
//         colorcode.style.color = colors
//         btn.style.backgroundColor = colors
//         document.body.style.backgroundColor = colors
        

// }
// document.getElementById("btn").addEventListener("click", myColor)
// myColor()

// op.addEventListener("change", () => {
//     let w = op.value
//     w = Math.floor(w / 10)
//     if (w > 9.9) return;
//     // console.log(w)
//     let sliced = colorcode.innerText.slice((colorcode.innerText.length - 2), (colorcode.innerText.length ))
//     let newval = colorcode.innerText.replace(sliced, w + ")")
//     // colors= `rgb(${a},${b},${c},${w})`
//     colorcode.innerText = newval
//     colorcode.style.color = newval
//     btn.style.backgroundColor = newval
//     document.body.style.backgroundColor = newval
// })




//  Choose among your favourite colors

// const myColor = () => {
//     let a = "red"
//     let b = "blue"
//     let c = "green"
//     let d = "yellow"
//     let e = "orange"
//     let f = "white"
//     let g = "black"
//     let h = "purple"
//     let i = "pink"
//     let j = "cyan"
//     // console.log(a, b, c, d)

//     const pp = [a, b, c, d,e,f,g,h,i,j]
//     const cc = Math.floor(Math.random()*10)

//     const colors = pp[cc]
//     // console.log(colors)

//     colorcode.innerText = colors
//     colorcode.style.color = colors
//     btn.style.backgroundColor = colors
//     document.body.style.backgroundColor = colors


// }
// document.getElementById("btn").addEventListener("click", myColor)
// myColor()












//  Choose with the help of hex code

const myColor = () => {
    let arr = "0123456789abcdef"
    let n1 = Math.floor(Math.random() * 16)
    let n2 = Math.floor(Math.random() * 16)
    let n3 = Math.floor(Math.random() * 16)
    let n4 = Math.floor(Math.random() * 16)
    let n5 = Math.floor(Math.random() * 16)
    let n6 = Math.floor(Math.random() * 16)
    const colors = "#" + arr[n1] + arr[n2] + arr[n3] + arr[n4] + arr[n5] + arr[n6]

    // console.log(colors)

    colorcode.innerText = colors
    colorcode.style.color = colors
    btn.style.backgroundColor = colors
    document.body.style.backgroundColor = colors
    
    // console.log(colorcode.innerText.length)
    
}
document.getElementById("btn").addEventListener("click", myColor)
document.getElementById("colorcode").addEventListener("click", myColor)
myColor()





//  Choose with the help of rgba function
// const myColor = () => {
   
//     let a = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     let c = Math.floor(Math.random() * 256 )
//     let d = Math.random() * 1
//     d=d.toString()
//     d = d.substr(0, 3)
//     d= parseFloat(d)
//     // console.log(a, b, c, d)
//     if (d < 0.1) {
//         d=d+0.1
//     }
    
    
//     const colors = "rgba" + "(" + a + "," + b + "," + c + "," + d + ")";
//     // console.log(colors)
   
    
    
//     colorcode.innerText = colors
//     colorcode.style.color = colors
//     btn.style.backgroundColor = colors
//     document.body.style.backgroundColor = colors
    
// }
// document.getElementById("btn").addEventListener("click", myColor)
// document.getElementById("colorcode").addEventListener("click", myColor)
// myColor()

// op.addEventListener("change", () => {
// let w = op.value
//     w = w / 100
//     w=w.toString()
//     w = w.substr(0, 3)
//     w= parseFloat(w)
    
//     if (w > 0.99) {
//     w=0.9
//     }
    
//     if (w < 0.01) {
//         w=0.1
//     }
// console.log(w)
// let sliced = colorcode.innerText.slice((colorcode.innerText.length - 4), (colorcode.innerText.length ))
// let newval = colorcode.innerText.replace(sliced, w+ ")")
  

// colorcode.innerText = newval
// colorcode.style.color = newval
// btn.style.backgroundColor = newval
// document.body.style.backgroundColor = newval
// })











