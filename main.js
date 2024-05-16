document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const botonEnviar = document.getElementById('botonEnviar');
  
    botonEnviar.addEventListener('click', async (event) => {
        event.preventDefault();
  
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
  
        const body = {
            service_id: 'service_acct3k1',
            template_id: 'template_6h8ehdl',
            user_id: 'O4mvOOZbR9fx_QTde',
            template_params: {
                'to_name': nombre,
                'from_name': email,
                'message': mensaje,
            }
        };
  
        try {
            const response = await sendEmail(body);
            console.log(response);
            if (response && response.includes('OK')) {
                // Mostrar SweetAlert de éxito
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'El correo electrónico se ha enviado correctamente.',
                }).then((result) => {
                    // Refrescar la página cuando el usuario hace clic en 'OK'
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
                // Limpiar los campos del formulario
                document.getElementById('nombre').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensaje').value = '';
            } else {
                // Mostrar SweetAlert de error si la respuesta no contiene 'OK'
                showErrorAlert();
            }
        } catch (error) {
            // Mostrar SweetAlert de error si hay un error en la solicitud
            showErrorAlert();
        }
    });
  
    const showErrorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
        });
    };
  
    const sendEmail = async (body) => {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
        const data = await response.text(); // Obtener la respuesta como texto
        return data;
    };
  });