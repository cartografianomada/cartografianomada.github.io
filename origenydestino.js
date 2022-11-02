let imagenes = new Array(23);
let imagenesIndex = 0;

const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background('#3f4e5e');
  let c1 = color(200);
  let c2 = color(100);

  imageMode(CENTER);

  /* setGradient(0, 0, width, height, c1, c2, X_AXIS);*/

  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage('assets/i' + i + '.jpg');
  } 

  frameRate(2);

}

function draw() {
  imagenesIndex = floor(random(imagenes.length));
  let clipX = [imagenes[imagenesIndex].width / 2, 0]
  let clipY = [imagenes[imagenesIndex].height / 2, 0]

  // image(imagenes[imagenesIndex], mouseX, mouseY, random(100, 250), random(100, 250), random(clipX), random(clipY), random(imagenes[imagenesIndex].width), random(imagenes[imagenesIndex].height));
  //image(imagenes[imagenesIndex], mouseX, mouseY, 250, 250, imagenes[imagenesIndex].width / 2, imagenes[imagenesIndex].height / 2, 250, 250);
  //image(imagenes[imagenesIndex], mouseX, mouseY, 200, 200, random(clipX), random(clipY), 200, 200);
  image(imagenes[imagenesIndex], mouseX, mouseY, imagenes[imagenesIndex].width / 2, imagenes[imagenesIndex].height / 2);

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Gradiente de arriba a abajo
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Gradiente de izquierda a derecha
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

