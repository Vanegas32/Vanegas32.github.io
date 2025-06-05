function mostrarModal(titulo, mensaje) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = `<h2>${titulo}</h2><p>${mensaje}</p>`;
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function bienvenida() {
    const nombre = prompt("¿Cúal es tu nombre?");
    if (nombre) {
        mostrarModal("¡Bienvenido, " + nombre + "!", "Prepárate para aprender con ITCODE 💡");
    } else {
        mostrarModal("¡Bienvenido!", "¡Comienza tu camino con ITCODE ahora!");
    }
}

function verCurso(nombreCurso) {
    const cursos = {
        'Software': "Este curso te enseña fundamentos de programación, lógica y herramientas para crear software funcional.",
        'Hardware': "Aprenderás sobre componentes físicos del computador, mantenimiento y ensamblaje."
    };
    mostrarModal("Curso de " + nombreCurso, cursos[nombreCurso]);
}

function toggleMenu() {
    const menuLista = document.querySelector('nav ul');
    menuLista.style.display = menuLista.style.display === 'none' ? 'block' : 'none';
}

function navegarA(pagina) {
    mostrarModal("Navegando", `Has hecho clic en el botón: ${pagina}`);
    // Aquí podrías agregar la lógica real para navegar a la página
}

// Año dinámico
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    // Agregamos el evento de clic al botón del menú
    const menuButton = document.querySelector('nav a');
    menuButton.classList.add('menu-button'); // Añadimos una clase para estilos
    menuButton.textContent = '='; // Aseguramos que el contenido sea el símbolo igual
    menuButton.addEventListener('click', toggleMenu);

    // Creamos los botones dinámicamente y los añadimos a la lista
    const menuLista = document.querySelector('nav ul');
    const botonesMenu = ['Inicio', 'Cursos', 'Comunidad', 'Contacto'];

    botonesMenu.forEach(textoBoton => {
        const listItem = document.createElement('li');
        const boton = document.createElement('button');
        boton.textContent = textoBoton;
        boton.addEventListener('click', () => navegarA(textoBoton));
        listItem.appendChild(boton);
        menuLista.appendChild(listItem);
    });
});