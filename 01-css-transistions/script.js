document.querySelector('#change-size-btn').addEventListener('click', function () {
    let box = document.querySelector("#thebox");
    box.classList.add('stretch');
})

window.addEventListener('DOMContentLoaded', function () {
    /* setTimeout is like setInterval, but setTimeout only
happens once */
    setTimeout(function () {
        let autobox = document.querySelector('#autobox');
        autobox.classList.add('stretch');
    }, 100);
})
