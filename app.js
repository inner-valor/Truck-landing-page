// nav bar

const truckNavInfo = document.querySelector('.nav-info');
const truckNavImg = truckNavInfo.querySelector('.nav-img img');
const truckNavText = {
    header: truckNavInfo.querySelector('.nav-text h1'),
    paragraph: truckNavInfo.querySelector('.nav-text p')
};
const navDivs = document.querySelectorAll('.truck-nav-content');

for (let nav of navDivs) { // take all the divs from truck nav content
    nav.addEventListener('click', () => {
        // replace img, text and class of truck info
        truckNavImg.src = nav.querySelector('img').src;
        truckNavText.header.innerText = nav.querySelector('p').innerText;
        truckNavInfo.classList.toggle('hide');
        for (let i = 0; i < navDivs.length; i++) {
            // change all nav div class at the same time
            navDivs[i].classList.toggle('hide');
        }
    })
}

function cancelInfo() {
    truckNavInfo.classList.toggle('hide');
    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.toggle('hide');
    }
}

// truck main info

const truckSelection = document.querySelectorAll('.img-container img');

const truckText = [
    {
        name: 'truck1',
        info: "i'm a truck"
    },
    {
        name: 'truck2',
        info: "i'm a truck"
    },
    {
        name: 'truck3',
        info: "i'm not a truck"
    }
]

for (const truck of truckSelection) {
    truck.addEventListener('click', function () {
        changeMainInfo(this);
    });
}

function changeMainInfo(img) {
    const truckImg = document.querySelector('#picked-img img');
    const truckInfo = document.querySelector('.info');
    const truckName = truckInfo.querySelector('.truck-name');
    const truckDescription = truckInfo.querySelector('.truck-manufacturer');

    truckImg.src = img.src;
    if (img.id === 'truck1') {
        truckName.innerText = truckText[0].name;
        truckDescription.innerText = truckText[0].info;
    } else if (img.id === 'truck2') {
        truckName.innerText = truckText[1].name;
        truckDescription.innerText = truckText[1].info;
    } else {
        truckName.innerText = truckText[2].name;
        truckDescription.innerText = truckText[2].info;
    }
}

