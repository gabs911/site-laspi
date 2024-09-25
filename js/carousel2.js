const track2 = document.querySelector(".carousel__track2");
const prev2 = document.querySelector(".carousel__nav-prev2");
const next2 = document.querySelector(".carousel__nav-next2");

const indicatorParent2 = document.querySelector(".carousel__nav2 ul");



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


next2.addEventListener("click", () => {
  direction = -1;
  infinite = true;
  if (direction === 1) {
    for (i = 0; i < 5; i++) {
      track2.prepend(track2.lastElementChild);
    }
  }

  track2.style.transform = `translateX(-${carouselWidth-1225}px)`;
});

prev2.addEventListener("click", () => {
  direction = 1;
  infinite = true;
  if (direction === -1 || direction === undefined) {
    for (i = 0; i < 5; i++) {
      track2.appendChild(track2.firstElementChild);
    }
  }
  track2.style.transform = `translateX(${carouselWidth-1225}px)`;

  console.log("aa");
});

track2.addEventListener("transitionend", function () {
  if (infinite === true) {
    track2.style.transition = `none`;
    track2.style.transform = `translate(0)`;
    setTimeout(function () {
      track2.style.transition = `transform .5s`;
    });
    if (direction === -1 || direction === "undefined") {
      for (i = 0; i < itemToScroll; i++) {
        track2.appendChild(track2.firstElementChild);
      }
    } else if (direction === 1) {
      for (i = 0; i < itemToScroll; i++) {
        track2.prepend(track2.lastElementChild);
      }
    }
  }
});