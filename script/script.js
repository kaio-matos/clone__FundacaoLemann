const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];
const styleFont = getComputedStyle(body);

function search() {}

function mail() {}

function letterType() {
  const styleFont = getComputedStyle(body);
  const secondFont = '"Balsamiq Sans", cursive';
  const principalFont = "Montserrat";
  console.log(styleFont.fontFamily);
  console.log(secondFont);

  if (styleFont.fontFamily == secondFont) {
    body.style.fontFamily = principalFont;
  } else {
    body.style.fontFamily = secondFont;
  }
}

function letterSize() {
  const secondFontSize = "20px";

  if (styleFont.fontSize == secondFontSize) {
    body.style.fontSize = "16px";
  } else {
    body.style.fontSize = secondFontSize;
  }
}

function blackMode() {
  const secondBackgroundColor = "rgb(51, 51, 51)";

  const changeColorP = document.getElementsByClassName("changeColorWhite");
  const gridColorS = document.getElementsByClassName("smallImage");
  const gridColorB = document.getElementsByClassName("largeImage")[0];

  console.log(secondBackgroundColor);
  console.log(styleFont.backgroundColor);

  if (styleFont.backgroundColor == secondBackgroundColor) {
    body.style.backgroundColor = "white";

    for (let i = 0; i < changeColorP.length; i++) {
      changeColorP[i].style.color = "black";
    }

    for (let i = 0; i < gridColorS.length; i++) {
      gridColorS[i].style.color = "rgb(8, 48, 80)";
      gridColorB.style.color = "rgb(8, 48, 80)";
    }
  } else {
    body.style.backgroundColor = secondBackgroundColor;

    for (let i = 0; i < changeColorP.length; i++) {
      changeColorP[i].style.color = "white";
    }

    for (let i = 0; i < gridColorS.length; i++) {
      gridColorS[i].style.color = "white";
      gridColorB.style.color = "white";
    }
  }
}
