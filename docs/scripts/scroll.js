window.addEventListener("DOMContentLoaded", (event) => {
// ------------------- Scroll Button ------------------- \\
const scrlbtn = document.getElementById("scrlUp");
const rootElement = document.documentElement;

window.addEventListener("scroll", dist);

function dist() {
  const btn = document.getElementById("scrlUp");
  if (document.body.scrollTop > 80 || rootElement.scrollTop > 80 || window.scrollY > 80) {
    btn.style.display = "block";
    setTimeout(function(){
      btn.classList.add('visible');
    }, 55);
  } else {
    btn.classList.remove('visible');
    setTimeout(function(){
      btn.style.display = "none";
    }, 55);
  }
}

scrlbtn.addEventListener("click", scrlToTop);

function scrlToTop() {
  rootElement.scrollTo({
    top: 0,
  behavior: "smooth"
  })
}

// ----- end -----
});