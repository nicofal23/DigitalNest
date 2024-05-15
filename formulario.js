document.addEventListener('DOMContentLoaded', () => {
    // Obtén el botón "Enviar mensaje" por su ID
    const sendMessageButton = document.getElementById('sendMessageButton');
    
    // Agrega un evento click al botón "Enviar mensaje"
    sendMessageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario
        
        // Obtén los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Crea un objeto con los parámetros del correo electrónico
        const emailParams = {
            service_id: 'service_acct3k1',
            template_id: 'template_fe28b3a', // Reemplaza 'template_your_template_id' con el ID de tu plantilla de correo electrónico
            user_id: 'O4mvOOZbR9fx_QTde', // Reemplaza 'user_your_user_id' con tu ID de usuario de EmailJS
            template_params: {
                'to_name': name,
                'from_email': email,
                'message': message
            }
        };
        
        // Envía el formulario utilizando EmailJS
        emailjs.send('default_service', 'template_your_template_id', emailParams)
            .then(function(response) {
                console.log('Correo electrónico enviado con éxito', response);
                // Mostrar una notificación de éxito al usuario
                alert('¡El mensaje se ha enviado con éxito!');
                // Opcionalmente, puedes usar SweetAlert para una notificación más elegante
                // Swal.fire('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success');
                
                // Limpiar los campos del formulario después de enviar el correo electrónico
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, function(error) {
                console.log('Error al enviar el correo electrónico', error);
                // Mostrar una notificación de error al usuario si falla el envío
                alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                // Opcionalmente, puedes usar SweetAlert para una notificación más elegante
                // Swal.fire('¡Error!', 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', 'error');
            });
    });
});
