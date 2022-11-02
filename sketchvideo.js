let imagenes = new Array(24);
let imagenesIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background('#3f4e5e');

  imageMode(CENTER);

  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage('assets/i' + i + '.jpg');
  }

  frameRate(2);

}

function draw() {
  /* imagenesIndex = floor(random(imagenes.length));
  let clipX = [imagenes[imagenesIndex].width / 2, 0]
  let clipY = [imagenes[imagenesIndex].height / 2, 0]

  //image(imagenes[imagenesIndex], mouseX, mouseY, random(100, 250), random(100, 250), random(clipX), random(clipY), random(imagenes[imagenesIndex].width), random(imagenes[imagenesIndex].height));

  image(imagenes[imagenesIndex], mouseX, mouseY, imagenes[imagenesIndex].width / 2, imagenes[imagenesIndex].height / 2);

  /*filter(GRAY);*/ 
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

