const elHero = document.querySelector(".hero");
const elHeading = elHero.querySelector("h1");
const walk = 100;

function shadowMove(evt) {
  const {offsetWidth: width, offsetHeight: height} = elHero;
  let { offsetX: x, offsetY: y } = evt;
  
  if (this !== evt.target) {
    x = x + evt.target.offsetLeft;
    y = y + evt.target.offsetTop;
  };
  
  const xWalk = Math.floor((x/width*walk) - walk/2);
  const yWalk = Math.floor((y/height*walk) - walk/2);
  
  elHeading.style.textShadow = `${xWalk}px ${yWalk}px 10px rgba(255,0,0,7)`;
}

elHero.addEventListener("mousemove", shadowMove);
elHero.addEventListener("mouseout", ()=> {
  elHeading.style.textShadow = `0px 0px 10px rgba(255,0,0,7)`
});
elHero.addEventListener("touchmove", shadowMove);
elHero.addEventListener("touchend", ()=> {
  elHeading.style.textShadow = `0px 0px 10px rgba(255,0,0,7)`
});