let buyBtns = document.querySelectorAll(".js-buy-ticker")
let modal = document.querySelector(".modal")
let close = document.querySelector(".close-btn")
let modalcontainer = document.querySelector(".modal-container")
let header = document.querySelector(".header")
let mobileMenu = document.querySelector(".mobile-menu-btn")


/* open buy ticker */
for (const btn of buyBtns) {
    btn.addEventListener('click',() => {
        modal.classList.add('open')
    })
}

/* close buy ticker */
close.addEventListener('click',() => {
    modal.classList.remove('open')
})
modal.addEventListener('click',() => {
    modal.classList.remove('open')
})

/* ngăn chặn sự kiện nổi bọt */
modalcontainer.addEventListener('click',(e) => {
    e.stopPropagation()
})

/* click mobile menu */

mobileMenu.onclick = () => {
    alert('thongbao')
}