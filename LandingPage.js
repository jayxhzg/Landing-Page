const start = document.getElementById('start');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const mask = document.getElementById('mask');
const text1 = document.getElementById('one');
const text2 = document.getElementById('two');

black(start);
start.addEventListener('mouseenter', () => {
    text1.style.opacity="0.8"
    text1.style.transition= "1s"
    text2.style.opacity="0.8"
    text2.style.transition= "1s"
    text2.style.transitionDelay="1s"
})
start.addEventListener('mouseleave', () => {
    text1.style.opacity="0";
    text2.style.opacity="0";
    text2.style.transition= "1s"
})
black(section1);
black(section2);
black(section3);
black(section4);
function black(theObject){
    theObject.addEventListener('mouseenter', () => {
        mask.style.opacity="0.5";
        mask.style.transition= "1s"
    })
    theObject.addEventListener('mouseleave', () => {
        mask.style.opacity="0";
        mask.style.transition= "1s"
    })
}
