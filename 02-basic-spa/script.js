document.querySelector('#page1-btn').addEventListener('click', function(){
    // select all the pages and hide them
    let allPages = document.querySelectorAll('.page');
    for (let p of allPages) {
        p.classList.remove('show');
        p.classList.add('hidden');
    }

    // only show page 1
    document.querySelector('#page-1').classList.add('show');
})

document.querySelector('#page2-btn').addEventListener('click', function(){
    // select all the pages and hide them
    let allPages = document.querySelectorAll('.page');
    for (let p of allPages) {
        p.classList.remove('show');
        p.classList.add('hidden');
    }

    // only show page 1
    document.querySelector('#page-2').classList.add('show');
})

document.querySelector('#page3-btn').addEventListener('click', function(){
    // select all the pages and hide them
    let allPages = document.querySelectorAll('.page');
    for (let p of allPages) {
        p.classList.remove('show');
        p.classList.add('hidden');
    }

    // only show page 1
    document.querySelector('#page-3').classList.add('show');
})