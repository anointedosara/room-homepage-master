let div8 = document.getElementsByClassName("div8")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
for (let i = 0; i < div8.length; i++) {
    let prev = false
    if (prev != true) {
        div8[0].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "flex"
            div8[i].style.background = "hsl(0, 0%, 27%)"
            div9[i].style.background = ""
        })
    }
    let back = false
    if (back != true) {
        div8[2].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "flex"
            div3.style.display = "none"
            div8[i].style.background = "hsl(0, 0%, 27%)"
            div9[i].style.background = ""
        })
    }

    let others = false
    if (others != true) {
        div8[1].addEventListener("click", () => {
            div1.style.display = "flex"
            div2.style.display = "none"
            div3.style.display = "none"
            div8[i].style.background = "hsl(0, 0%, 27%)"
            div9[i].style.background = ""
        })
    }
}

let div9 = document.getElementsByClassName("div9")
let next = false
for (let i = 0; i < div9.length; i++) {
    if (next != true) {
        div9[0].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "flex"
            div9[i].style.background = "hsl(0, 0%, 27%)"
            div8[i].style.background = ""
        })
    }

    let front = false
    if (front != true) {
        div9[1].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "flex"
            div9[i].style.background = "hsl(0, 0%, 27%)"
            div8[i].style.background = ""
        })
    }

    let other = false
    if (other != true) {
        div9[2].addEventListener("click", () => {
            div1.style.display = "flex"
            div2.style.display = "none"
            div3.style.display = "none"
            div9[i].style.background = "hsl(0, 0%, 27%)"
            div8[i].style.background = ""
        })
    }
}

let show = document.querySelector(".show")
let hide = document.querySelector(".hide")
let navbar = document.querySelector(".nav-bar")
let nav = document.querySelector(".nav")

show.addEventListener("click", () => {
    nav.style.display = "none"
    navbar.style.display = "flex"
})

hide.addEventListener("click", () => {
    nav.style.display = "flex"
    navbar.style.display = "none"
})


let div20 = document.getElementsByClassName("div20")
for (let i = 0; i < div20.length; i++) {
    let prev = false
    if (prev != true) {
        div20[0].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "flex"
            div20[i].style.background = "hsl(0, 0%, 27%)"
            div21[i].style.background = ""
        })
    }
    let back = false
    if (back != true) {
        div20[2].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "flex"
            div3.style.display = "none"
            div20[i].style.background = "hsl(0, 0%, 27%)"
            div21[i].style.background = ""
        })
    }

    let others = false
    if (others != true) {
        div20[1].addEventListener("click", () => {
            div1.style.display = "flex"
            div2.style.display = "none"
            div3.style.display = "none"
            div20[i].style.background = "hsl(0, 0%, 27%)"
            div21[i].style.background = ""
        })
    }
}

let div21 = document.getElementsByClassName("div21")

for (let i = 0; i < div21.length; i++) {
    let next = false
    if (next != true) {
        div21[0].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "flex"
            div21[i].style.background = "hsl(0, 0%, 27%)"
            div20[i].style.background = ""
        })
    }

    let front = false
    if (front != true) {
        div21[1].addEventListener("click", () => {
            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "flex"
            div21[i].style.background = "hsl(0, 0%, 27%)"
            div20[i].style.background = ""
        })
    }

    let other = false
    if (other != true) {
        div21[2].addEventListener("click", () => {
            div1.style.display = "flex"
            div2.style.display = "none"
            div3.style.display = "none"
            div21[i].style.background = "hsl(0, 0%, 27%)"
            div20[i].style.background = ""
        })
    }
}