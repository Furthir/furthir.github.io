window.addEventListener("DOMContentLoaded", (event) => {
const cards = document.getElementsByClassName('card');

function colorShift() {
  const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100));
  // console.log(scrollPercent);

  const baseColors = {
    r: 198,
    g: 137, 
    b: 240
  };

  const finalColors = {
    r: baseColors.r - scrollPercent,
    g: baseColors.g - scrollPercent,
    b: baseColors.b - scrollPercent
  }

  for (const el of cards) {
        el.style.borderColor = `rgb(${finalColors.r}, ${finalColors.g}, ${finalColors.b})`;
    }
}

window.addEventListener("scroll", colorShift);

// ----- end -----
});