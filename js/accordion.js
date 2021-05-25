document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    featureLinkElems.forEach((item, i) => {
        item.addEventListener('click',() => {
            if (item.classList.contains('feature__link_active')) {
                item.classList.remove('feature__link_active');
                featureSubElems[i].classList.add('hidden');
            } else{
            featureSubElems.forEach((item) => {
                item.classList.add('hidden');
            });
            featureLinkElems.forEach((item)=> {
                featureSubElems[i].classList.remove('feature__link_active');
            });
            featureSubElems[i].classList.remove('hidden');
            item.classList.add('feature__link_active');
        }
        });
    })
});