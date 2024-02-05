let timer;
let seconds = 0;
let minutes = 2; // Inicia en 2 minutos
let hours = 0;
let romanticMessages = [
  "Recuerdo la primera vez que nos vimos, como si fuera ayer...",
  "Ese día, nuestras miradas se cruzaron y mi corazón empezó a latir más rápido.",
  "Fue como si el universo conspirara para unirnos, como una fuerza química irresistible.",
  "Cada encuentro contigo es como una reacción química, creando una conexión más fuerte.",
  "Nuestro amor es como una fórmula perfecta, equilibrada y llena de pasión.",
  "Eres mi átomo especial, el que completa mi estructura molecular.",
  "Como un catalizador, tu amor acelera mi corazón cada vez que estamos juntos.",
  "Cada momento a tu lado es como un elemento único en nuestra historia de amor.",
  "Nuestro amor es tan fuerte como un enlace covalente, compartiendo electrones de felicidad.",
  "Y hoy, celebramos otro mes de esta hermosa unión. GRACIAS POR OTRO MES."
];

let messageIndex = 0;

function startCountdown() {
  document.getElementById("startStop").style.display = "none"; // Oculta el botón de inicio
  timer = setInterval(updateCountdown, 1000);
  showRomanticMessage();
}

function updateCountdown() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    showAnniversaryMessage();
  } else {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    updateDisplay();
    checkForMessageDisplay();
  }
}

function checkForMessageDisplay() {
  // Muestra el mensaje cada 10 segundos después de 2 minutos
  if (minutes >= 0 && seconds % 10 === 0) {
    showRomanticMessage();
  }
}

function showRomanticMessage() {
  const container = document.getElementById('messages-container');
  const message = document.createElement('div');
  message.className = 'romantic-message';
  message.innerHTML = `<p>${romanticMessages[messageIndex % romanticMessages.length]}</p>`;
  container.appendChild(message);

  // Animación para mover el mensaje a la derecha o izquierda
  if (messageIndex % 2 === 0) {
    message.style.left = '70%';
  } else {
    message.style.left = '30%';
  }

  message.style.display = 'block';

  // Ocultar el mensaje después de 10 segundos
  setTimeout(() => {
    message.style.display = 'none';
    message.remove();
    messageIndex++;
  }, 10000);
}

function showAnniversaryMessage() {
  const anniversaryMessageContainer = document.getElementById('anniversary-message');
  anniversaryMessageContainer.innerHTML = `<p>${romanticMessages[messageIndex % romanticMessages.length]}</p>`;
  anniversaryMessageContainer.style.display = 'block';
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function resetCountdown() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 2;
  updateDisplay();
  document.getElementById("startStop").style.display = "block"; // Muestra el botón de inicio
  messageIndex = 0; // Reinicia el índice de mensajes
  const container = document.getElementById('messages-container');
  const anniversaryMessageContainer = document.getElementById('anniversary-message');
  container.innerHTML = ''; // Limpia los mensajes anteriores
  anniversaryMessageContainer.innerHTML = ''; // Limpia el mensaje de aniversario
}
