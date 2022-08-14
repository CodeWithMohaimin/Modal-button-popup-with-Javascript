
let popupBtn = document.getElementById('popup_btn');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close_btn');
let overly = document.getElementById('overly');



function popup() {
    modal.classList.add('active')
    overly.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
    overly.classList.remove('active')
}
// function overlyFunc() {
//     modal.classList.add('active')
//     overly.classList.add('active')
// }

popupBtn.addEventListener('click', popup)
closeBtn.addEventListener('click', closeModal)
// overly.addEventListener('click', overlyFunc)