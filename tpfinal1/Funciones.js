function Botones() {

  // INICIO
  if (pantalla == 0) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 1;
    }
  }
// CONVIVENCIA
  else if (pantalla == 1) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 2;
    }
  }
// EXCLUSIÓN
  else if (pantalla == 2) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 6;
    }
  }
// IGNORA
  else if (pantalla == 3) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 0;
    }
  }
// SE ENOJA
  else if (pantalla == 4) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 0;
    }
  }
// INTENTA SOLUCIONARLO
  else if (pantalla == 5) {

    if (clicBoton(300, 350, 200, 50)) {

      pantalla = 0;
    }
  }
// ELECCIÓN
  else if (pantalla == 6) {

    // LO IGNORA
    if (clicBoton(60, 340, 210, 65)) {

      pantalla = 3;
    }

    // SE ENOJA
    else if (clicBoton(295, 340, 210, 65)) {

      pantalla = 4;
    }

    // INTENTA SOLUCIONARLO
    else if (clicBoton(530, 340, 210, 65)) {

      pantalla = 5;
    }
  }
}
