function dibujarCreditos() {
  background(20);
  imageMode(CENTER);
  image(imagenCreditos, 400, -200 + creditosY);

  fill(255);
  textSize(45);
  text("EL REINO SUBTERRÁNEO", 400, 0 + creditosY);

  textSize(26);
  text("Basado en la obra original de Edward Packard", 400, 70 + creditosY);

  textSize(16);
  text("Carlos Adrian Puebla  Ailin Nahir Mercado / Comisión 5", 400, 140 + creditosY);

  creditosY += velocidadCreditos;

  if (creditosY > 800) {
    pantalla = 1;
    escenaActual = 0;
  }
}

function dibujarEscena(indice) {
  background(20);
    fill(255);
  textAlign(CENTER, CENTER);

 

  if (indice == 0) {
    imageMode(CORNER);
    image(imagenCaida, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
  }

  if (indice == 1) {
    imageMode(CORNER);
    image(imagenFondoAbismo, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
  }
  if (indice == 2) {
    
    imageMode(CORNER);
    image(imagenCaminos, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Entrar por la escotilla", -150, 50, 600, 120);
    text("Subir hacia el Nido", 95, 50, 600, 120);
    text("Adentrarse en la Selva", 350, 50, 600, 120);
  
  }
  if (indice == 3) {
  imageMode(CORNER);
  image(imagenNave, 0, 0, 800, 450);
 textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
}
if (indice == 4) {
  imageMode(CORNER);
  image(imagenVentisquero, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
}
if (indice == 5) {
  imageMode(CORNER);
  image(imagenNido, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Vuelo directo", -80, 100, 600, 120);
    text("Entrar a la Cueva de Cristal", 310, 100, 600, 120);

}
if (indice == 6) {
  imageMode(CORNER);
  image(imagenFinal2, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);  
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");

}
if (indice == 7) {
  imageMode(CORNER);
  image(imagenCueva, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");
}
if (indice == 8) {
  imageMode(CORNER);
  image(imagenFortaleza, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");
  }
  if (indice == 9) {
  imageMode(CORNER);
  image(imagenRio, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
 
  }
  if (indice == 10) {
  imageMode(CORNER);
  image(imagenTotem, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    
  }
  if (indice == 11) {
  imageMode(CORNER);
  image(imagenFinal4, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);

  }

}


function mousePressed() {
  if (pantalla == 1) {
    if (escenaActual == 0) {
      escenaActual = 1; 
     } 
    else 
      if (escenaActual == 1) {
         escenaActual = 2;
      } else 
          if (escenaActual == 2){ 
             if  (mouseX < 267) {
                escenaActual = 3;
             }else 
                if (mouseX < 534) {
                  escenaActual = 4;
                } else {
                    escenaActual = 8;
                  }
          } else 
              if (escenaActual == 3) {
                 pantalla = 0;
                 creditosY = 0;
              } else 
                  if (escenaActual == 4) {
                    escenaActual = 5;
                  } else
                      if (escenaActual == 5){
                        if(mouseX < 400)
                           escenaActual = 6  
                        else escenaActual = 7 ; 
                      } else
                          if (escenaActual == 6) {
                             pantalla = 0;
                             creditosY = 0;
                           } else
                               if (escenaActual == 7) {
                                 pantalla = 0;
                                 creditosY = 0;
                               }
                               else 
                                 if (escenaActual == 8) {
                                   escenaActual = 9;
                                 } else 
                                     if (escenaActual == 9) {
                                       escenaActual = 10;
                                     }
                                     else
                                       if (escenaActual == 10) {
                                         escenaActual = 11;
                                       }
                                       else
                                         if (escenaActual == 11) {
                                           pantalla = 0;
                                           creditosY = 0;
                                         }
                }
}
