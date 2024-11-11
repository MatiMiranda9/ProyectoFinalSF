document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

      
        const clientData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        try {
            
            const response = await fetch('http://localhost:3000/submit-client-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clientData)
            });

            if (response.ok) {
                const responseData = await response.json();
                alert('Consulta enviada con éxito: ' + responseData.message);
                form.reset(); 
            } else {
                alert('Error al enviar la consulta. Intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Se produjo un error al enviar la consulta.');
        }
    });
});
