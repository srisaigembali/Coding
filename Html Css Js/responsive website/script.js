const buttons = document.querySelectorAll(".carousel-button");
const articles = document.querySelectorAll('.article');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const activeButton = document.querySelector(".active");
        activeButton.classList.remove('active');
        button.classList.add("active");

        const filter = button.getAttribute('data-filter');
        articles.forEach(article => {
            if(filter === 'All') {
                article.style.display = 'block';
            } else {
                if(article.getAttribute('data-topic') === filter) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            }
        });
    });
});

const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".icon");
let isDragging = false;

const dragging = (e) => {
    if(!isDragging) return;
    carousel.classList.add('dragging');
    carousel.scrollLeft -= e.movementX;
    handleIcons();
}

const dragstop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');  
}

const handleIcons = () => {
    let scrollVal = Math.round(carousel.scrollLeft);
    let maxScrollableWidth = carousel.scrollWidth - carousel.clientWidth;
    console.log(scrollVal, maxScrollableWidth);
    if(scrollVal > 0) arrowIcons[0].classList.remove('disable');
    else arrowIcons[0].classList.add('disable');

    if(maxScrollableWidth > scrollVal) arrowIcons[1].classList.remove('disable');
    else arrowIcons[1].classList.add('disable');
}

carousel.addEventListener("mousedown", () => isDragging = true);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id === 'prev' ? -350 : 350;
        setTimeout(() => handleIcons(), 50);
    })
})