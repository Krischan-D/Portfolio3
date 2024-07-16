const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');

menu.addEventListener('click', () => {
    toggleMenu();
})


icon.addEventListener('click', () => {
    toggleMenu();
})


function toggleMenu (){
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}



const btn = document.querySelector('.btn-download');
btn.addEventListener('click', () =>{
    window.open('assets/CV.pdf', '_blank')
} )

scrollAnimation();



function scrollAnimation () {

    const observer = new IntersectionObserver ((entries) =>{
        entries.forEach((entry) =>{
             console.log(entry)
             if(entry.isIntersecting){
                if (entry.target.classList.contains('section-1')) {
                    entry.target.classList.add('show-section-1');
                } else if (entry.target.classList.contains('section-2')) {
                    entry.target.classList.add('show-section-2');
                } else if (entry.target.classList.contains('section-3')) {
                    entry.target.classList.add('show-section-3');
                }else if (entry.target.classList.contains('section-4')) {
                    entry.target.classList.add('show-section-4');
                }else if (entry.target.classList.contains('section-5')) {
                    entry.target.classList.add('show-section-5');
                }
             }else{
                if (entry.target.classList.contains('section-1')) {
                    entry.target.classList.remove('show-section-1');
                } else if (entry.target.classList.contains('section-2')) {
                    entry.target.classList.remove('show-section-2');
                } else if (entry.target.classList.contains('section-3')) {
                    entry.target.classList.remove('show-section-3');
                } else if (entry.target.classList.contains('section-4')) {
                    entry.target.classList.remove('show-section-4');
                }else if (entry.target.classList.contains('section-5')) {
                    entry.target.classList.remove('show-section-5');
                }
             }
        });
    });

    const observerWithThreshold = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section-4');
            } else {
                entry.target.classList.remove('show-section-4');
            }
        });
    }, {
        threshold: 0.7 // Adjust the threshold as needed
    });

    const section4Elements = document.querySelectorAll('.section-4');
    section4Elements.forEach((el) => observerWithThreshold.observe(el));

    const observerWithThresholdTwo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section-3');
            } else {
                entry.target.classList.remove('show-section-3');
            }
        });
    }, {
        threshold: 0.7 // Adjust the threshold as needed
    });
    
    const section3Elements = document.querySelectorAll('.section-4');
    section4Elements.forEach((el) => observerWithThreshold.observe(el));
    
  

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));   

}


const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('click', () =>{
    location.href = '#contact'
})

particlesJS.load('particles-js', 'path/to/particles.json', function() {
    console.log('Particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom'
    });

    const links = document.querySelectorAll('nav a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }
});



// AOS.init();
// AOS.refreshHard();