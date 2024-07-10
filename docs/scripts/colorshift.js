window.addEventListener("DOMContentLoaded", (event) => {
// ------------------- Color Changing ------------------- \\

const cards = document.getElementsByClassName('card');
// const thresh = [
//   {position: 0, color: 'rgb(198, 137, 240)'},  
//   {position: 25, color: 'rgb(185, 111, 235)'},  
//   {position: 50, color: 'rgb(182, 98, 238)'}, 
//   {position: 75, color: 'rgb(163, 74, 223)'},
//   {position: 100, color: 'rgb(152, 62, 212)'}   
// ];

const thresh = [
  {pos: 10, color: 'rgb(192, 129, 232)'},
  {pos: 20, color: 'rgb(186, 121, 226)'},
  {pos: 30, color: 'rgb(179, 112, 218)'},
  {pos: 40, color: 'rgb(171, 101, 210)'},
  {pos: 50, color: 'rgb(164, 90, 201)'},
  {pos: 60, color: 'rgb(155, 78, 192)'},
  {pos: 70, color: 'rgb(145, 65, 181)'},
  {pos: 80, color: 'rgb(135, 53, 170)'},
  {pos: 90, color: 'rgb(124, 40, 157)'},
  {pos: 100, color: 'rgb(110, 27, 144)'}
]


function colorShift() {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  // console.log(scrollPercent);
  let newColor = 'rgb(198, 137, 240)';
  for (const threshold of thresh) {
    // console.log(threshold.pos)
    if (scrollPercent >= threshold.pos) {
        newColor = threshold.color;
        // console.log(newColor);
    } else {
        break; 
    }
    for (const elem of cards) {
      elem.style.borderColor = newColor;
    }
}
}

window.addEventListener("scroll", colorShift);

// ----- end -----
});