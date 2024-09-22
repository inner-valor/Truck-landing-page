// nav info

const truckInfo = document.querySelector('.nav-info');
const truckImg = truckInfo.querySelector('.nav-img img');
const truckText = {
    header: truckInfo.querySelector('.nav-text h1'),
    paragraph: truckInfo.querySelector('.nav-text p')
};
const navDivs = document.querySelectorAll('.truck-nav-content');

for (let nav of navDivs) { // take all the divs from truck nav content
    nav.addEventListener('click', () => {
        // replace img, text and class of truck info
        truckImg.src = nav.querySelector('img').src;
        truckText.header.innerText = nav.querySelector('p').innerText;
        truckInfo.classList.toggle('hide');
        for (let i = 0; i < navDivs.length; i++) {
            // change all nav div class at the same time
            navDivs[i].classList.toggle('hide');
        }
    })
}

function cancelInfo() {
    truckInfo.classList.toggle('hide');
    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.toggle('hide');
    }
}