//const smothScroolElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

//работает в современных браузерах
// smothScroolElems.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const id = link.getAttribute('href').substring(1);
//         document.getElementById(id).scrollIntoView({
//             behavior: 'smooth'
//         });

//     })
// })



//универсальный
const SPEED = 0.4;
const scrolled = (event) => {
    let start = 0;
    event.preventDefault();
    const target = event.target;
    if(target.matches('[href^="#"]')){
        const pageY = window.pageYOffset;
      //  const hash  = target.href.replace(/[^#]*(.*)/, '$1')
        const hash = target.getAttribute('href');
        if(hash === '#') return
        const elem = document.querySelector(hash);
        const coordinateElem = elem.getBoundingClientRect().top;
        const step = time => {
            if(!start) start = time;
            const progress = time - start;
            const r = (coordinateElem < 0 ? Math.max(pageY - progress / SPEED, pageY + coordinateElem) : 
            Math.min(pageY + progress / SPEED,  pageY + coordinateElem));

            window.scrollTo(0, r);

            if(r < pageY + coordinateElem){
                requestAnimationFrame(step);
            }
            
     }

     requestAnimationFrame(step);
    }
}

document.body.addEventListener('click', scrolled)