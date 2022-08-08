
let modalBtn = document.getElementById('popup_btn');
let modal = document.getElementById('modal');
let overly = document.getElementById('overly');
let closeBtn = document.getElementById('close_btn');

modalBtn.addEventListener('click', function () {
    modal.classList.add('active')
    overly.classList.add('active')
})

closeBtn.addEventListener('click', function () {
    modal.classList.remove('active')
    overly.classList.remove('active')
})

overly.addEventListener('click', function () {
    modal.classList.remove('active')
    overly.classList.remove('active')
})