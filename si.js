

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    // Desplazar la posición del slider
    let slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Actualizar el índice de la imagen visible
    slideIndex = (slideIndex + 1) % totalSlides;

    // Cambiar la imagen cada 4 segundos
    setTimeout(showSlides, 4000); // Puedes ajustar el tiempo si lo deseas
}

function moveSlide(direction) {
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    // Mover la imagen hacia la izquierda o derecha según la dirección
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    if (slideIndex >= totalSlides) slideIndex = 0;

    // Desplazar la posición del slider
    let slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Iniciar el slider al cargar la página
showSlides();


// Mostrar el modal de sorpresa
function mostrarModalSorpresa() {
    const modal = document.getElementById('modal-sorpresa');
    const heartsContainer = document.getElementById('hearts-container');
    modal.style.display = "flex"; // Mostrar el modal
    heartsContainer.style.display = "block"; // Mostrar el contenedor de corazones

    // Crear corazoncitos infinitamente
    setInterval(crearCorazon, 200); // Crear un corazón cada 200ms
}

// Cerrar el modal
function cerrarModalSorpresa() {
    const modal = document.getElementById('modal-sorpresa');
    const heartsContainer = document.getElementById('hearts-container');
    modal.style.display = "none"; // Ocultar el modal
    heartsContainer.style.display = "none"; // Ocultar el contenedor de corazones
}

// Función para crear un corazoncito
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Coordenadas del punto central (donde saldrán los corazones)
    const centerX = window.innerWidth / 2; // El centro de la pantalla en píxeles
    const centerY = window.innerHeight / 2; // El centro de la pantalla en píxeles

    // Desplazamiento aleatorio en las direcciones X e Y
    const angle = Math.random() * 360; // Ángulo aleatorio para dispersión
    const distance = Math.random() * 300 + 100; // Distancia aleatoria entre 100 y 250 para el vuelo

    // Convertimos la distancia y el ángulo en coordenadas X e Y
    const x = centerX + Math.cos(angle * Math.PI / 180) * distance;
    const y = centerY + Math.sin(angle * Math.PI / 180) * distance;

    // Asignar las posiciones iniciales en píxeles
    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;

    // Usamos custom properties para animar el movimiento
    heart.style.setProperty('--x', `${x - centerX}px`);
    heart.style.setProperty('--y', `${y - centerY}px`);

    // Añadirlo al contenedor de corazones
    document.getElementById('hearts-container').appendChild(heart);

    // Eliminar el corazoncito después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 5000); // Duración de la animación
}