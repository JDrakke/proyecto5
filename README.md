Aplicación de Comercio Electrónico
Descripción
Esta es una aplicación FULLSTACK de comercio electrónico que integra MongoDB, Express, React y Node.js. Permite a los usuarios registrarse, iniciar sesión, explorar productos y realizar pagos en línea utilizando PayPal Sandbox.

Características
Frontend: Desarrollado en React, utilizando React Router para la navegación, Context API para el manejo del estado, y botones de PayPal para el procesamiento de pagos.
Backend: Implementado en Node.js con Express, con autenticación de usuarios y almacenamiento en MongoDB.
Rutas: Incluye las rutas Home, Checkout, Registro de usuario, Inicio de sesión, Mi perfil, Producto individual y Listado de productos.
Despliegue: Frontend desplegado en Netlify o GitHub Pages, y Backend en Heroku o una plataforma similar.
Instrucciones de Instalación
Clonar el Repositorio:

bash
Copiar código
git clone https://github.com/JDrakke/proyecto5.git
Instalar Dependencias del Frontend:

bash
Copiar código
cd client
npm install
Instalar Dependencias del Backend:

bash
Copiar código
cd ../server
npm install
Iniciar el Backend:

bash
Copiar código
cd server
node server.js
Iniciar el Frontend:

bash
Copiar código
cd ../client
npm start
Despliegue
Despliegue del Frontend
Netlify:

Crea una cuenta en Netlify si aún no tienes una.
Conecta tu repositorio de GitHub y selecciona la carpeta client para el despliegue.
Configura los ajustes de despliegue y haz clic en "Deploy".
GitHub Pages:

Asegúrate de que el contenido de la carpeta client/build esté listo para el despliegue.
Configura la página en GitHub siguiendo estas instrucciones.
Despliegue del Backend
Heroku:
Crea una cuenta en Heroku si aún no tienes una.

Instala la CLI de Heroku y realiza login con heroku login.

Navega a la carpeta server y crea una nueva aplicación en Heroku:

bash
Copiar código
cd server
heroku create
Despliega tu aplicación a Heroku:

bash
Copiar código
git push heroku master
Configura las variables de entorno necesarias en el panel de Heroku, como la cadena de conexión a MongoDB.

Contribuciones
Si deseas contribuir al desarrollo de esta aplicación, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu característica o corrección de errores.
Realiza los cambios y haz commit.
Envía un pull request describiendo tus cambios.
Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

