// Portfolio

let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio () {
    filterItems.forEach (item => {
        item.classList.remove('.filter-active');
        this.classList.add('.filter-active');
        });
    }

filterItems.forEach (item => {
    item.addEventListener('click', activePortfolio);
});


// mixitup filter portfolio

let mixer = mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
});