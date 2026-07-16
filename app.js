const ROUTINE = [
  {
    key: "lunes",
    day: "Lunes",
    title: "Full Body A",
    emphasis: "Cuádriceps + empuje",
    exercises: [
      { name: "Prensa / sentadilla", gym: "Prensa inclinada", home: "Sentadilla goblet", prescription: "3 × 10-15" },
      { name: "Press de pecho", gym: "Press de pecho sentado", home: "Press con mancuernas en banco o piso", prescription: "3 × 8-12" },
      { name: "Remo", gym: "Remo sentado o Hammer", home: "Remo a una mano con apoyo", prescription: "3 × 10-12" },
      { name: "Hip thrust", gym: "Máquina o barra en banco", home: "Puente de glúteo con mancuerna", prescription: "3 × 10-15" },
      { name: "Elevación lateral", gym: "Máquina o polea", home: "Elevaciones laterales con mancuernas", prescription: "2 × 12-15" },
      { name: "Plancha", gym: "En piso o banco", home: "En piso", prescription: "3 × 20-40 s" }
    ]
  },
  {
    key: "miercoles",
    day: "Miércoles",
    title: "Full Body B",
    emphasis: "Femoral / glúteo + jalón",
    exercises: [
      { name: "Peso muerto rumano", gym: "Barra o Smith", home: "RDL con mancuernas", prescription: "3 × 10-12" },
      { name: "Jalón vertical", gym: "Jalón al pecho en polea", home: "Pull-over con mancuerna", prescription: "3 × 10-12" },
      { name: "Press de hombro", gym: "Press militar sentado", home: "Press de hombro con mancuernas", prescription: "3 × 8-12" },
      { name: "Sentadilla búlgara o desplantes", gym: "Con mancuernas o Smith", home: "Sentadilla búlgara con mancuernas", prescription: "3 × 10-12 c/pierna" },
      { name: "Curl femoral", gym: "Máquina acostado o sentado", home: "Puente a una pierna", prescription: "2 × 12-15" },
      { name: "Bíceps", gym: "Curl en polea o predicador", home: "Curl alternado", prescription: "2 × 10-15" }
    ]
  },
  {
    key: "viernes",
    day: "Viernes",
    title: "Full Body C",
    emphasis: "Glúteo + mixto",
    exercises: [
      { name: "Hip thrust (pesado)", gym: "Máquina o barra en banco", home: "Puente de glúteo con mancuerna", prescription: "4 × 8-12" },
      { name: "Prensa pies altos o sentadilla", gym: "Prensa con pies altos", home: "Sentadilla goblet", prescription: "3 × 10-12" },
      { name: "Remo", gym: "Remo sentado o Hammer", home: "Remo a una mano con apoyo", prescription: "3 × 10-12" },
      { name: "Press de pecho o fondos asistidos", gym: "Press máquina o pec deck", home: "Press o aperturas con mancuernas", prescription: "2 × 10-15" },
      { name: "Abducción de cadera", gym: "Máquina de abducción", home: "Abducción lateral acostada con banda o tobillera", prescription: "2 × 12-20" },
      { name: "Tríceps", gym: "Jalón con cuerda", home: "Extensión detrás de la cabeza", prescription: "2 × 10-15" }
    ]
  }
];

const GUIDE = [
  { name: "Prensa inclinada", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0739-10Z2DXU.gif", cue: "Cadera pegada al respaldo; no bloquees las rodillas arriba." },
  { name: "Sentadilla goblet (casa)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1760-yn8yg1r.gif", cue: "Mancuerna al pecho, talones firmes y pecho arriba." },
  { name: "Press de pecho (máquina)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0577-T0yTjgW.gif", cue: "Manijas a la altura del pecho; no bloquees los codos." },
  { name: "Press de pecho (mancuernas)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0289-SpYC0Kp.gif", cue: "Codos a unos 45° del torso, no completamente abiertos." },
  { name: "Remo sentado / Hammer", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1350-7I6LNUG.gif", cue: "Pecho firme; lleva los codos atrás sin encoger los hombros." },
  { name: "Remo a una mano con apoyo", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0292-C0MA9bC.gif", cue: "Apoya mano y rodilla; tira de la mancuerna hacia la cadera." },
  { name: "Hip thrust", type: "video", src: "https://www.youtube.com/results?search_query=hip+thrust+con+barra+tecnica+correcta", cue: "Banco bajo los omóplatos; aprieta el glúteo un segundo arriba." },
  { name: "Puente de glúteo (casa)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1409-qKBpF7I.gif", cue: "Empuja con los talones y evita arquear la zona lumbar." },
  { name: "Elevación lateral", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0334-DsgkuIt.gif", cue: "Sube hasta la línea del hombro, no más." },
  { name: "Plancha", type: "video", src: "https://www.youtube.com/results?search_query=plancha+abdominal+tecnica+correcta+principiantes", cue: "Forma una línea recta entre hombros, cadera y tobillos; abdomen apretado." },
  { name: "Peso muerto rumano (RDL)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/1459-rR0LJzx.gif", cue: "Haz una bisagra de cadera: glúteo atrás y espalda neutra." },
  { name: "Jalón al pecho", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2330-LEprlgG.gif", cue: "Lleva la barra al pecho sin echar el torso hacia atrás." },
  { name: "Pull-over con mancuerna", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0375-9XjtHvS.gif", cue: "Mantén los codos semiflexionados y fijos; mancuerna vertical." },
  { name: "Press de hombro", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0405-znQUdHY.gif", cue: "Aprieta el abdomen y evita arquear la zona lumbar." },
  { name: "Sentadilla búlgara", type: "video", src: "https://www.youtube.com/results?search_query=sentadilla+bulgara+tecnica+correcta+principiantes", cue: "Empieza sin peso; el pie trasero solamente sirve de apoyo." },
  { name: "Curl femoral (máquina)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0586-17lJ1kr.gif", cue: "Mantén la cadera pegada al banco y baja de manera controlada." },
  { name: "Curl de bíceps", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0294-NbVPDMW.gif", cue: "Codos quietos al costado y sin balancear el cuerpo." },
  { name: "Pec deck / aperturas", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0596-v3xmPAR.gif", cue: "Codos a la altura del pecho; no fuerces el hombro." },
  { name: "Abducción de cadera", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0597-CHpahtl.gif", cue: "Torso quieto; abre de manera controlada y sin rebote." },
  { name: "Tríceps con cuerda", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/0200-dU605di.gif", cue: "Codos pegados al costado; solo se mueve el antebrazo." },
  { name: "Tríceps tras nuca (casa)", type: "gif", src: "https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/videos/2188-kont8Ut.gif", cue: "Codos apuntando al frente y quietos." }
];

const routineDays = document.querySelector("#routineDays");
const visualGuide = document.querySelector("#visualGuide");
const searchInput = document.querySelector("#exerciseSearch");
const noResults = document.querySelector("#noResults");
let environment = localStorage.getItem("fullbody-environment") || "gym";
let completed = new Set(JSON.parse(localStorage.getItem("fullbody-progress") || "[]"));

function renderRoutine() {
  routineDays.innerHTML = ROUTINE.map((day) => `
    <article class="day-card">
      <header class="day-card__header">
        <div>
          <h3>${day.day} — ${day.title}</h3>
          <p>Énfasis: ${day.emphasis}</p>
        </div>
        <span class="day-badge">6 ejercicios</span>
      </header>
      <table class="exercise-table">
        <thead>
          <tr><th>Hecho</th><th>Ejercicio</th><th>${environment === "gym" ? "Máquina / equipo" : "Alternativa en casa"}</th><th>Series × reps</th></tr>
        </thead>
        <tbody>
          ${day.exercises.map((exercise, index) => {
            const id = `${day.key}-${index}`;
            const checked = completed.has(id);
            return `
              <tr class="${checked ? "is-complete" : ""}">
                <td>
                  <label class="check-control" aria-label="Marcar ${exercise.name} como completado">
                    <input type="checkbox" data-progress-id="${id}" ${checked ? "checked" : ""}>
                    <span aria-hidden="true"></span>
                  </label>
                </td>
                <td class="exercise-name">${exercise.name}</td>
                <td class="exercise-variant">${exercise[environment]}</td>
                <td class="exercise-prescription">${exercise.prescription}</td>
              </tr>`;
          }).join("")}
        </tbody>
      </table>
    </article>
  `).join("");

  routineDays.querySelectorAll("[data-progress-id]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const id = event.currentTarget.dataset.progressId;
      event.currentTarget.checked ? completed.add(id) : completed.delete(id);
      localStorage.setItem("fullbody-progress", JSON.stringify([...completed]));
      event.currentTarget.closest("tr").classList.toggle("is-complete", event.currentTarget.checked);
      updateProgress();
    });
  });
  updateProgress();
}

function updateProgress() {
  const total = ROUTINE.reduce((sum, day) => sum + day.exercises.length, 0);
  const current = completed.size;
  const percent = Math.round((current / total) * 100);
  document.querySelector("#progressText").textContent = `${current} de ${total} ejercicios`;
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
}

function renderGuide(query = "") {
  const normalized = query.trim().toLocaleLowerCase("es");
  const matches = GUIDE.filter((item) => `${item.name} ${item.cue}`.toLocaleLowerCase("es").includes(normalized));
  visualGuide.innerHTML = matches.map((item) => {
    const media = item.type === "gif"
      ? `<button class="visual-card__media" type="button" data-open-media data-src="${item.src}" data-name="${item.name}" data-cue="${item.cue}" aria-label="Ampliar animación de ${item.name}">
           <img src="${item.src}" alt="Animación de ${item.name}" loading="lazy" decoding="async">
         </button>`
      : `<div class="visual-card__media">
           <div class="video-placeholder">
             <a href="${item.src}" target="_blank" rel="noopener" aria-label="Buscar video de ${item.name} en YouTube">
               <span class="video-placeholder__icon" aria-hidden="true">▶</span>
               <strong>Abrir técnica en video</strong>
               <span>Resultado de búsqueda en YouTube</span>
             </a>
           </div>
         </div>`;
    return `
      <article class="visual-card">
        ${media}
        <div class="visual-card__body">
          <span class="visual-card__label">${item.type === "gif" ? "Animación" : "Video"}</span>
          <h3>${item.name}</h3>
          <p>${item.cue}</p>
        </div>
      </article>`;
  }).join("");

  noResults.hidden = matches.length > 0;
  visualGuide.querySelectorAll("[data-open-media]").forEach((button) => {
    button.addEventListener("click", () => openMediaDialog(button.dataset));
  });
}

function openMediaDialog(data) {
  const dialog = document.querySelector("#mediaDialog");
  const image = document.querySelector("#mediaDialogImage");
  image.src = data.src;
  image.alt = `Animación de ${data.name}`;
  document.querySelector("#mediaDialogTitle").textContent = data.name;
  document.querySelector("#mediaDialogCue").textContent = data.cue;
  dialog.showModal();
}

document.querySelectorAll("[data-environment]").forEach((button) => {
  const active = button.dataset.environment === environment;
  button.classList.toggle("is-active", active);
  button.setAttribute("aria-pressed", String(active));
  button.addEventListener("click", () => {
    environment = button.dataset.environment;
    localStorage.setItem("fullbody-environment", environment);
    document.querySelectorAll("[data-environment]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderRoutine();
  });
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  const accepted = confirm("¿Reiniciar todos los ejercicios marcados de esta semana?");
  if (!accepted) return;
  completed.clear();
  localStorage.removeItem("fullbody-progress");
  renderRoutine();
});

searchInput.addEventListener("input", (event) => renderGuide(event.currentTarget.value));

// Temporizador
const timerDialog = document.querySelector("#timerDialog");
const timerDisplay = document.querySelector("#timerDisplay");
const timerStart = document.querySelector("#timerStart");
let selectedSeconds = 120;
let remainingSeconds = selectedSeconds;
let timerId = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function paintTimer() {
  timerDisplay.textContent = formatTime(remainingSeconds);
  document.title = timerId ? `${formatTime(remainingSeconds)} · Descanso` : "Rutina Full Body · 3 días";
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  timerStart.textContent = remainingSeconds === selectedSeconds ? "Iniciar" : "Continuar";
  paintTimer();
}

function startTimer() {
  if (timerId) {
    stopTimer();
    timerStart.textContent = "Continuar";
    return;
  }
  if (remainingSeconds <= 0) remainingSeconds = selectedSeconds;
  timerStart.textContent = "Pausar";
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    paintTimer();
    if (remainingSeconds <= 0) {
      stopTimer();
      timerStart.textContent = "Repetir";
      if (navigator.vibrate) navigator.vibrate([180, 80, 180]);
    }
  }, 1000);
}

document.querySelector("#openTimer").addEventListener("click", () => timerDialog.showModal());
timerStart.addEventListener("click", startTimer);
document.querySelector("#timerReset").addEventListener("click", () => {
  stopTimer();
  remainingSeconds = selectedSeconds;
  timerStart.textContent = "Iniciar";
  paintTimer();
});
document.querySelectorAll("[data-seconds]").forEach((button) => {
  button.addEventListener("click", () => {
    stopTimer();
    selectedSeconds = Number(button.dataset.seconds);
    remainingSeconds = selectedSeconds;
    document.querySelectorAll("[data-seconds]").forEach((item) => item.classList.toggle("is-active", item === button));
    timerStart.textContent = "Iniciar";
    paintTimer();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

renderRoutine();
renderGuide();
paintTimer();
