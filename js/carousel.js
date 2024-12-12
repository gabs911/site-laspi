const track = document.querySelector(".carousel__track");
const prev = document.querySelector(".carousel__nav-prev");
const next = document.querySelector(".carousel__nav-next");
let carouselWidth = document.querySelector(".carousel__wrapper").offsetWidth;
let cardWidth = document.querySelector(".card__wrapper").offsetWidth;
let cardLength = document.querySelectorAll(".card__wrapper").length;
const indicatorParent = document.querySelector(".carousel__nav ul");

let direction;
let itemToScroll;
let sectionIndex = 0;
let infinite = false;
let dots;

if (screen.width > 999) {
  itemToScroll = 1;
  dots = false;
} else if (screen.width < 999 && screen.width > 600) {
  itemToScroll = 2;
  dots = true;
} else if (screen.width < 600) {
  itemToScroll = 1;
  dots = true;
}

/*
if (dots == true) {
  next.classList.add("hide");
  prev.classList.add("hide");
  indicatorParent.classList.remove("hide");
  indicatorParent.classList.add("show");
} else {
  next.classList.remove("hide");
  prev.classList.remove("hide");
  indicatorParent.classList.remove("show");
  indicatorParent.classList.add("hide");
}
*/
if (cardLength % 2 == 0) {
  calDots = cardLength / itemToScroll - 1;
} else {
  calDots = Math.floor(cardLength / itemToScroll);
  if (itemToScroll == 1) {
    calDots = calDots - 1;
  }
}
/*
for (i = 0; i <= calDots; i++) {
  let dotLi = document.createElement("LI");
  let dotLiText = document.createTextNode(" ");
  dotLi.appendChild(dotLiText);
  indicatorParent.appendChild(dotLi);
  indicatorParent.firstElementChild.classList.add("selected");
}

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(".carousel__wrapper").offsetWidth;
});
*/


next.addEventListener("click", () => {
  console.log("click");
  direction = -1;
  infinite = true;
  if (direction === 1) {
    for (i = 0; i < 5; i++) {
      track.prepend(track.lastElementChild);
    }
  }

  track.style.transform = `translateX(-${carouselWidth-1225}px)`;
});

prev.addEventListener("click", () => {
  //console.log("click");
  direction = 1;
  infinite = true;
  if (direction === -1 || direction === undefined) {
    for (i = 0; i < 5; i++) {
      track.appendChild(track.firstElementChild);
    }
  }
  track.style.transform = `translateX(${carouselWidth-1225}px)`;

  
});

track.addEventListener("transitionend", function () {
  if (infinite === true) {
    track.style.transition = `none`;
    track.style.transform = `translate(0)`;
    setTimeout(function () {
      track.style.transition = `transform .5s`;
    });
    if (direction === -1 || direction === "undefined") {
      for (i = 0; i < itemToScroll; i++) {
        track.appendChild(track.firstElementChild);
      }
    } else if (direction === 1) {
      for (i = 0; i < itemToScroll; i++) {
        track.prepend(track.lastElementChild);
      }
    }
  }
});
