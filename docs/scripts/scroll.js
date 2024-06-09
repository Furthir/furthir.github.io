const scrlbtn = document.getElementById("scrlUp");
const rootElement = document.documentElement;

window.addEventListener("scroll", dist);

function dist() {
  const btn = document.getElementById("scrlUp");
  if (document.body.scrollTop > 80 || rootElement.scrollTop > 80 || window.scrollY > 80) {
    btn.style.display = "block";
    setTimeout(function(){
      btn.classList.add('visible');
    }, 25);
  } else {
    btn.classList.remove('visible');
    setTimeout(function(){
      btn.style.display = "none";
    }, 25);
  }
}

scrlbtn.addEventListener("click", scrlToTop);

function scrlToTop() {
  rootElement.scrollTo({
    top: 0,
  behavior: "smooth"
  })
}

window.addEventListener("DOMContentLoaded", (event) => {
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function() {
      callback();
    };
    script.src = url;
    document.head.appendChild(script);

  }

  loadScript("nav.js", function() {
    console.log("loaded");
  });
});