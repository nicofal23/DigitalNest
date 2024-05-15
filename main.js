// main.js

// Agrega el script de EmailJS al HTML
const emailjsScript = document.createElement('script');
emailjsScript.src = 'https://cdn.emailjs.com/dist/email.min.js';
document.head.appendChild(emailjsScript);

// Inicializa EmailJS con tu User ID
(function() {
    emailjs.init("user_your_user_id"); // Reemplaza "user_your_user_id" con tu User ID de EmailJS
})();

// Evento que se ejecuta cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');
    
    // Agrega un evento de escucha al enviar el formulario
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        // Obtiene los valores del formulario
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userMessage = document.getElementById('message').value;
        
        try {
            // Envía el correo electrónico utilizando EmailJS
            const response = await emailjs.send("service_your_service_id", "template_your_template_id", {
                to_name: userName,
                from_name: userEmail,
                message: userMessage
            });
            
            // Verifica si la solicitud se completó con éxito
            if (response && response.status === 200) {
                // Muestra un mensaje de éxito utilizando SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'El correo electrónico se ha enviado correctamente.',
                }).then((result) => {
                    // Recarga la página cuando el usuario hace clic en 'OK'
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
                
                // Limpia los campos del formulario
                contactForm.reset();
            } else {
                // Muestra un mensaje de error si la solicitud no se completó con éxito
                showErrorAlert();
            }
        } catch (error) {
            // Muestra un mensaje de error si ocurre un error en la solicitud
            showErrorAlert();
        }
    });
});

// Función para mostrar un mensaje de error utilizando SweetAlert
const showErrorAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
    });
};
