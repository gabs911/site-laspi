const track1 = document.querySelector(".carousel__track1");
const prev1 = document.querySelector(".carousel__nav-prev1");
const next1 = document.querySelector(".carousel__nav-next1");

const indicatorParent1 = document.querySelector(".carousel__nav1 ul");



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


next1.addEventListener("click", () => {
  direction = -1;
  infinite = true;
  if (direction === 1) {
    for (i = 0; i < 5; i++) {
      track1.prepend(track1.lastElementChild);
    }
  }

  track1.style.transform = `translateX(-${carouselWidth-1225}px)`;
});

prev1.addEventListener("click", () => {
  direction = 1;
  infinite = true;
  if (direction === -1 || direction === undefined) {
    for (i = 0; i < 5; i++) {
      track1.appendChild(track1.firstElementChild);
    }
  }
  track1.style.transform = `translateX(${carouselWidth-1225}px)`;

  console.log("aa");
});

track1.addEventListener("transitionend", function () {
  if (infinite === true) {
    track1.style.transition = `none`;
    track1.style.transform = `translate(0)`;
    setTimeout(function () {
      track1.style.transition = `transform .5s`;
    });
    if (direction === -1 || direction === "undefined") {
      for (i = 0; i < itemToScroll; i++) {
        track1.appendChild(track1.firstElementChild);
      }
    } else if (direction === 1) {
      for (i = 0; i < itemToScroll; i++) {
        track1.prepend(track1.lastElementChild);
      }
    }
  }
});