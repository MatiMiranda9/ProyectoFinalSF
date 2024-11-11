# ITES-2024 - Desarrollo y Despliegue de una Aplicación Web con Docker

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una página web estática utilizando HTML y CSS, con un backend que procesa solicitudes de suscripción y consultas de clientes. Los datos ingresados por los usuarios se almacenan en una base de datos MySQL, y la gestión de esta base de datos se realiza a través de phpMyAdmin. Todo el proyecto está contenerizado utilizando Docker, facilitando su despliegue y ejecución en diferentes entornos.

El objetivo es crear una landing page funcional con un formulario de suscripción, una API que reciba los datos del formulario, y una base de datos para almacenar la información de los clientes.

## Tecnologías Utilizadas

- **Frontend:** HTML, CSS
- **Backend:** Node.js
- **Base de Datos:** MySQL
- **Docker:** Para contenerizar todos los servicios (frontend, backend, base de datos, phpMyAdmin)
- **phpMyAdmin:** Para gestionar la base de datos de manera visual

## Requisitos

- Tener instalado Docker y Docker Compose en tu sistema. Si no lo tienes, puedes descargarlo desde el sitio oficial:
  - [Docker](https://www.docker.com/get-started)
  - [Docker Compose](https://docs.docker.com/compose/install/)

## Instrucciones para Ejecutar el Proyecto

1. Clonar este repositorio:

    ```bash
    git clone https://github.com/usuario/nombre-del-repositorio.git
    ```

2. Navegar al directorio del proyecto:

    ```bash
    cd nombre-del-repositorio
    ```

3. Construir y levantar los servicios con Docker Compose:

    ```bash
    docker-compose up --build
    ```
    **La primera vez que ejecutes el comando build, podrias tener problema a la base de datos, esto se soluciona deteniendo el contenedor (ctrl+c) y levantando nuevamente el contenedor con docker-compose up**

    Esto iniciará los siguientes servicios:
    - **Frontend:** Servido por Nginx
    - **Backend:** API que recibe y procesa los datos del formulario
    - **Base de Datos MySQL**
    - **phpMyAdmin:** Para gestionar visualmente la base de datos

4. Acceder a la aplicación:
   - Frontend: [http://localhost:8080:80](http://localhost:8080:80)
   - phpMyAdmin: [http://localhost:8081](http://localhost:8081) 
   
## Rutas del Backend

- **POST /submit-client-data:**
  
  Este endpoint recibe los datos del formulario de suscripción y los almacena en la base de datos MySQL. Los datos recibidos incluyen:
  - `name`: Nombre del cliente (Requerido)
  - `email`: Correo electrónico del cliente (Requerido)
  - `phone`: Número de teléfono del cliente (Opcional)
  - `message`: Consulta o mensaje dejado por el cliente (Requerido)

  **Ejemplo de solicitud (JSON):**

  ```json
  {
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "phone": "123456789",
    "message": "Quisiera más información sobre sus servicios."
  }
