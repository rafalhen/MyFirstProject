{
/*Sidemenu*/

function toggleMenu() {
    const navButton = document.querySelector('.burger');
    const sideNav = document.querySelector('.menu');

    navButton.addEventListener('click', function(e){
        e.preventDefault();

        sideNav.classList.toggle('nav-active');
    });
}

/*Active pages*/

const navLinks = document.querySelectorAll('.nav-list .nav-link');
const pages = document.querySelectorAll('.page');

const titleClickHandler = function(event){
    

    const clickedPage = this;
    const activeLinks = document.querySelectorAll('.nav-list a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    clickedPage.classList.add('active');

    const activePages = document.querySelectorAll('active');

    for(let activePage of activePages){
        activePage.classList.remove('active');
    }

    const pageSelector = clickedPage.getAttribute('href');
    const targetPage = document.querySelector(pageSelector);
    targetPage.classList.add('active');
};
const links = document.querySelectorAll('.nav-list a');
for(let link of links) {
    link.addEventListener('click', titleClickHandler);
}

/*Charts*/

function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            // 3
            datasets: [{
                // 4
                label: 'Signups',
                // 5
                backgroumdColor: '#44FE38',
                borderColor: '#44FE38',
                // 6
                data: [46, 47, 40, 28, 50, 55, 30, 8, 8, 52 ],
            },
            {
                label: 'FTD',
                backgroumdColor: '#FF0A01',
                borderColor: '#FF0A01', 
                data: [7, 18, 68, 23, 45, 10, 29, 34, 23, 19],
            },
            {
                label: 'Earned',
                backgroumdColor: '#38EFFE', 
                borderColor: '#38EFFE',
                data: [42, 23, 56, 29, 37, 45, 11, 5, 30, 25],
                // 7 
                hidden: true,
            }]
        },
    });
}

/*Modals*/

const modalClose = document.querySelectorAll('.js--close-modal');
const overlayModal = document.querySelector('#overlay-modal');
const modals = document.querySelectorAll('.modal');
const modalOpen = document.querySelectorAll('.js--open-modal');

const initModal = function(event) {
    for(const button of modalClose) {
        button.addEventListener('click', closeBox);
    }
    overlayModal.addEventListener('click', closeBox);

    document.addEventListener('keyup', (e) => {
        if(e.key === 27) {
            modalClose(event);
        }
    });

    for(const button of modalOpen) {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const id = event.currentTarget.getAttribute('href').replace('#', '');
            for(const modal of modals) {
                modal.classList.toggle('active', modal.id === id);
                if(modal.classList.contains("active")){
                    overlayModal.classList.add('show');
                }

            }
        });
    }
};

const closeBox = function(event) {
    event.preventDefault();
    for(const modal of modals) {
        modal.classList.remove('active');
    }
    overlayModal.classList.remove('show');
};

const app = () => {
    toggleMenu();
    initChart();
    initModal();
};
app();
}