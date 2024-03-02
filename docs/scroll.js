var scrlUp = document.getElementById("scrlUp");

var rootElement = document.documentElement

function scrlToTop() {
rootElement.scrollTo({
  top: 0,
  behavior: "smooth"
  })
}

scrlUp.addEventListener("click", scrlToTop)

