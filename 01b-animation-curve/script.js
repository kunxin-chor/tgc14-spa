document.querySelector('#change-size-btn').addEventListener('click', function () {
    console.log("clicked")
    document.querySelector('#linear').classList.add('stretch-linear');
    document.querySelector('#linear').classList.add('long');
    document.querySelector('#ease').classList.add('stretch-ease');
    document.querySelector('#ease').classList.add('long');
    document.querySelector('#ease-in').classList.add('stretch-ease-in');
    document.querySelector('#ease-in').classList.add('long');
    document.querySelector('#ease-out').classList.add('stretch-ease-out');
    document.querySelector('#ease-out').classList.add('long');
    document.querySelector('#ease-in-out').classList.add('stretch-ease-in-out');
    document.querySelector('#ease-in-out').classList.add('long');
})

