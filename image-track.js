const track = document.querySelector(".image-track");
const trackScroller = document.querySelector(".track-container > div");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, 0%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("track-image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

//Handling touch events

trackScroller.onmousedown = e => handleOnDown(e);

trackScroller.ontouchstart = e => handleOnDown(e.touches[0]);

trackScroller.onmouseup = e => handleOnUp(e);

trackScroller.ontouchend = e => handleOnUp(e.touches[0]);

trackScroller.onmousemove = e => handleOnMove(e);

trackScroller.ontouchmove = e => handleOnMove(e.touches[0]);