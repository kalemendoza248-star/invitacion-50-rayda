/* =================================
   CUENTA REGRESIVA
================================= */

const fechaEvento = new Date(
  "2026-09-26T22:00:00-05:00"
).getTime();

const contador = document.getElementById("contador");

let intervalo;

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (!contador) {
    return;
  }

  if (diferencia <= 0) {
    contador.innerHTML =
      "<p>¡El gran día ha llegado!</p>";

    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const segundos = Math.floor(
    (diferencia % (1000 * 60)) /
    1000
  );

  document.getElementById("dias").textContent =
    String(dias).padStart(2, "0");

  document.getElementById("horas").textContent =
    String(horas).padStart(2, "0");

  document.getElementById("minutos").textContent =
    String(minutos).padStart(2, "0");

  document.getElementById("segundos").textContent =
    String(segundos).padStart(2, "0");
}

actualizarContador();

intervalo = setInterval(
  actualizarContador,
  1000
);


/* =================================
   DESTELLOS PEQUEÑOS DISTRIBUIDOS
================================= */

const contenedorDestellos = document.getElementById(
  "destellos"
);

if (contenedorDestellos) {

  const columnas = 6;
  const filas = 4;
  const totalDestellos = 24;

  for (let i = 0; i < totalDestellos; i++) {

    const destello = document.createElement("span");

    destello.classList.add("destello");

    const columna = i % columnas;
    const fila = Math.floor(i / columnas);

    const posicionBaseX =
      ((columna + 0.5) / columnas) * 100;

    const posicionBaseY =
      ((fila + 0.5) / filas) * 100;

    const variacionX =
      (Math.random() - 0.5) * 12;

    const variacionY =
      (Math.random() - 0.5) * 12;

    destello.style.left =
      `${posicionBaseX + variacionX}%`;

    destello.style.top =
      `${posicionBaseY + variacionY}%`;

    destello.style.setProperty(
      "--retardo",
      `${Math.random() * 3}s`
    );

    destello.style.setProperty(
      "--duracion",
      `${3 + Math.random() * 3}s`
    );

    contenedorDestellos.appendChild(destello);
  }
}


/* =================================
   ABRIR INVITACIÓN Y MÚSICA
================================= */

const pantallaInicial = document.getElementById(
  "pantalla-inicial"
);

const botonAbrir = document.getElementById(
  "abrir-invitacion"
);

const musica = document.getElementById(
  "musica"
);

if (
  pantallaInicial &&
  botonAbrir &&
  musica
) {

  botonAbrir.addEventListener(
    "click",
    async () => {

      botonAbrir.disabled = true;

      try {
        await musica.play();

        console.log(
          "La música comenzó correctamente"
        );
      } catch (error) {
        console.log(
          "No se pudo reproducir la música"
        );
      }

      pantallaInicial.classList.add(
        "oculta"
      );

      document.body.classList.remove(
        "bloqueo-scroll"
      );

      setTimeout(() => {
        pantallaInicial.remove();
      }, 1200);
    }
  );
}