// select all the page buttons
let allButtons = document.querySelectorAll('.page-button');

for (let button of allButtons) {
    button.addEventListener('click', function(event){
        // find out which button hs been pressed
        let clickedButton = event.target;
        let pageNumber = clickedButton.dataset.page;

        let allPages = document.querySelectorAll('.page');
            for (let p of allPages) {
                p.classList.remove('show');
                p.classList.add('hidden');
            }
        
        // only show page that the button is for
        document.querySelector("#page-" + pageNumber).classList.remove('hidden');
        document.querySelector("#page-" + pageNumber).classList.add('show');
    })
}

// document.querySelector('#page1-btn').addEventListener('click', function(){
//     // select all the pages and hide them
//     let allPages = document.querySelectorAll('.page');
//     for (let p of allPages) {
//         p.classList.remove('show');
//         p.classList.add('hidden');
//     }

//     // only show page 1
//     document.querySelector('#page-1').classList.add('show');
// })

