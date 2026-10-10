https://youtu.be/-eaJAWkiQD8
function preload() {
  imagenFinal4 = loadImage("data/final4.jpg");
  imagenTotem = loadImage("data/totem.jpg");
  imagenRio = loadImage("data/rio.jpg");
  imagenFortaleza = loadImage("data/fortaleza.jpg");
  imagenCueva = loadImage("data/cueva.jpg");
  imagenFinal2 = loadImage("data/final2.jpg");
  imagenNido = loadImage("data/nido.jpg");
  imagenFondoAbismo = loadImage("data/fondoAbismo.jpg");
  imagenVentisquero = loadImage("data/ventisquero.jpg");
  imagenNave = loadImage("data/nave.jpg");
  imagenCreditos = loadImage("data/imagenCreditos.jpg");
  imagenCaida = loadImage("data/caida.jpg");
  imagenCaminos = loadImage("data/caminos.jpg");
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
}

function draw() {
  if (pantalla == 0) {
    dibujarCreditos();
  } else if (pantalla == 1) {
    dibujarEscena(escenaActual);
  }
}
