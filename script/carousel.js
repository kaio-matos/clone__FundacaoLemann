let imageContainer = document.querySelector(
  ".author__carousel__image_container"
);
let mouseInitialPosition = null;
let moving = false;

const gestureStart = (e) => {
  mouseInitialPosition = e.pageX;
  moving = true;
};

const gestureMove = (e) => {
  const cardsWidth = imageContainer.children[0].clientWidth;

  if (moving) {
    const mouseCurrentPosition = e.pageX;
    const diff = mouseCurrentPosition - mouseInitialPosition;

    const firstPerson = imageContainer.children[0];
    const lastPerson =
      imageContainer.children[imageContainer.children.length - 1];

    const lastView = isInViewport(lastPerson);
    const firstView = isInViewport(firstPerson);

    if (diff < 0) {
      imageContainer.scrollLeft -= diff - cardsWidth;
      if (lastView) {
        imageContainer.scrollLeft = 0;
      }
    } else {
      imageContainer.scrollLeft -= diff + cardsWidth;
      if (firstView) {
        imageContainer.scrollLeft += imageContainer.scrollWidth;
      }
    }
  }
};

const gestureEnd = (e) => {
  moving = false;
};

if (window.PointerEvent) {
  imageContainer.addEventListener("pointerdown", gestureStart);
  imageContainer.addEventListener("pointermove", gestureMove);
  imageContainer.addEventListener("pointerup", gestureEnd);
} else {
  imageContainer.addEventListener("touchdown", gestureStart);
  imageContainer.addEventListener("touchmove", gestureMove);
  imageContainer.addEventListener("touchup", gestureEnd);

  imageContainer.addEventListener("mousedown", gestureStart);
  imageContainer.addEventListener("mousemove", gestureMove);
  imageContainer.addEventListener("mouseup", gestureEnd);
}

function previousPerson() {
  // Update element
  imageContainer = document.querySelector(".author__carousel__image_container");
  const firstPerson = imageContainer.children[0];

  const firstView = isInViewport(firstPerson);

  if (firstView) {
    imageContainer.scrollLeft += imageContainer.scrollWidth;
  } else {
    imageContainer.scrollLeft -= 500;
  }
}

function nextPerson() {
  // Update element
  imageContainer = document.querySelector(".author__carousel__image_container");

  const lastPerson =
    imageContainer.children[imageContainer.children.length - 1];
  const lastView = isInViewport(lastPerson);

  if (lastView) {
    imageContainer.scrollLeft = 0;
  } else {
    imageContainer.scrollLeft += 500;
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
