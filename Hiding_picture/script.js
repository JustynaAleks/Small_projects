const arrowBtn = document.querySelector('.arrow')
const arrowIcn = document.querySelector('.fas')
const img = document.querySelector('.item1')

const showImg = () => {
    img.classList.toggle('hide')

    if(img.classList.contains('hide')) {
        arrowIcn.style.transform = 'rotate(180deg)'
    } else {
        arrowIcn.style.transform = 'rotate(0)'
    }
}

arrowBtn.addEventListener('click', showImg)