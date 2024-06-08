var scrlbtn = document.getElementById("scrlUp");
var rootElement = document.documentElement;

window.addEventListener("scroll", dist);

function dist() {
  const btn = document.getElementById("scrlUp");
  if (document.body.scrollTop > 80 || rootElement.scrollTop > 80 || window.scrollY > 80) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

scrlbtn.addEventListener("click", scrlToTop);

function scrlToTop() {
  rootElement.scrollTo({
    top: 0,
  behavior: "smooth"
  })
}






