// SHOW MENU
const btnMenu = document.getElementById('toggle');
const menu = document.getElementById('nav-links');
// links.style.top = "-500px";
btnMenu.addEventListener('click', (e) => {
  menu.classList.toggle('show');
});
//CLICK EVENT GO TO SECTION
const links = document.querySelectorAll('#nav-links li a');
const sections = document.querySelectorAll('body > div');
// console.log(sections);
links.forEach(a => {
  
  a.addEventListener('click', (e) => {
    
    if (e.currentTarget.dataset.link !== undefined) {

      e.preventDefault();

    }

    sections.forEach(sec => {
      if (e.currentTarget.dataset.link === sec.id) {
        sec.scrollIntoView({behavior : "smooth"});
      }
    })
  })
})
//GO-TOP
// Button Go Top Scroll
let btnTop = document.querySelector(".go-top");
btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

let allSlider = document.querySelectorAll('.landing .box-slider');
let ballsContainer = document.querySelector('.ball');
let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');
let timeMs = 2000;
let view = 0;
createBall(allSlider.length, ballsContainer);
let intervalID = setInterval (handelInterval, timeMs);

btnRight.addEventListener('click', (e) => {

  clearInterval(intervalID);

  if (view >= 0 && view < allSlider.length) {

    removeClass(allSlider, "active-slider");
    removeClass(document.querySelectorAll('.ball span'), 'view');
    view++;
    document.querySelectorAll('.landing .box-slider')[view - 1].classList.add('active-slider');
    autoActiveBall();

  }

  if (view === allSlider.length) {
    view = 0;
  }



})

btnLeft.addEventListener('click', (e) => {

  clearInterval(intervalID);

  if (view === 1) {
    view = allSlider.length + 1;
  }

  if (view === 0) {
    view = view = allSlider.length;
  }

  if (view > 1 && view <= allSlider.length + 1) {

    removeClass(allSlider, "active-slider");
    removeClass(document.querySelectorAll('.ball span'), 'view');
    view--;
    document.querySelectorAll('.landing .box-slider')[view - 1].classList.add('active-slider');
    autoActiveBall();
  }

})






// HANDEL Remove Class
function removeClass(Elements, className) {
  Elements.forEach(ele => {
    ele.classList.remove(className);
  })
}
// HANDEL Interval Func
function handelInterval() {

  if (view === allSlider.length) {
    view = 0;
  }

  removeClass(allSlider, "active-slider");
  removeClass(document.querySelectorAll('.ball span'), 'view');
  view ++;
  document.querySelectorAll('.landing .box-slider')[view - 1].classList.add('active-slider');
  autoActiveBall();

}
// HANDEL Creat Balls
function createBall(count, container) {

  for (let i = 0; i < count; i ++) {
    let span = document.createElement('span');
    span.id = i + 1;
    container.appendChild(span);
  }
  document.querySelector('.ball span').classList.add('view');
}
// FUNCTION ACTIVE BALL
function autoActiveBall() {
  let allball = document.querySelectorAll('.ball span');

  allball.forEach(ball => {

    allSlider.forEach(img => {

      if (ball.id == view && img.dataset.id == view) {
        ball.classList.add('view');
      }

    })
  })

}
