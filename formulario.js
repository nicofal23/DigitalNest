document.addEventListener('DOMContentLoaded', () => {
    const sendMessageButton = document.getElementById('sendMessageButton');
    
    sendMessageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Obtén los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Crea un objeto con los parámetros del correo electrónico
        const emailParams = {
            to_name: 'DigitalNest',   // Nombre fijo o dinámico de la empresa o destinatario
            from_name: name,         // Nombre tomado del formulario ({{from_name}})
            reply_to: email,         // Correo electrónico del remitente (opcional)
            message: message,         // Mensaje tomado del formulario ({{message}})
            email: email
        };

        // Envía el formulario utilizando EmailJS
        emailjs.send('service_acct3k1', 'template_fe28b3a', emailParams)
            .then(function(response) {
                console.log('Correo electrónico enviado con éxito', response);
                
                // Mostrar una notificación de éxito con SweetAlert
                Swal.fire({
                    title: '¡Mensaje enviado!',
                    text: 'Nos pondremos en contacto contigo pronto.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                // Limpiar los campos del formulario después de enviar el correo electrónico
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, function(error) {
                console.log('Error al enviar el correo electrónico', error);
                
                // Mostrar una notificación de error con SweetAlert
                Swal.fire({
                    title: '¡Error!',
                    text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });
});











// modal formulario 

document.addEventListener('DOMContentLoaded', () => {
    // Obtén el modal
    const modal = document.getElementById("consultModal");

    // Obtén el botón que abre el modal
    const btn = document.querySelector(".hero .content button");

    // Obtén el <span> que cierra el modal
    const span = document.getElementsByClassName("close-button")[0];

    // Cuando el usuario hace clic en el botón, abre el modal
    btn.addEventListener('click', function() {
        modal.style.display = "block";
    });

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Cuando el usuario hace clic fuera del modal, también cierra el modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Manejador para el formulario de consulta
    const sendConsultButton = document.getElementById('sendConsultButton');
    sendConsultButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario
        
        const name = document.getElementById('consultName').value;
        const email = document.getElementById('consultEmail').value;
        const message = document.getElementById('consultMessage').value;
        const telefono = document.getElementById('consultTelefono').value;
        
        const emailParams = {
            to_name: 'Reparacion - DigitalNest',
            from_name: name,
            email: email,
            message: message,
            telefono: telefono
        };
        
        emailjs.send('service_acct3k1', 'template_fe28b3a', emailParams)
            .then(function(response) {
                Swal.fire({
                    title: '¡Mensaje enviado!',
                    text: 'Nos pondremos en contacto contigo pronto.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                
                document.getElementById('consultName').value = '';
                document.getElementById('consultEmail').value = '';
                document.getElementById('consultMessage').value = '';
                modal.style.display = "none";
            }, function(error) {
                Swal.fire({
                    title: '¡Error!',
                    text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });
});












//Boton de reparacion 

document.getElementById('repairButton').addEventListener('click', function() {
    const phoneNumber = '5493416488215';
    const message = 'Hola, necesito averiguar sobre los servicios de reparación de PC';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});