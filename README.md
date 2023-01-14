"# PWA-ProyectoFinal2022" 

Explicación modulo ordenes: https://youtu.be/EPmncK7egA0

Pasos para clonar el repositorio:
1) Crea una carpeta en tu computadora
2) Dentro de esa carpeta abre una terminal
3) Escribe el siguiente comando: 
git clone https://github.com/SergioSerrano30/AppPWAeAllModules.git
4) Cambia al directorio de la carpeta creada con el comando
cd AppPWAeAllModules

=======================================================
                    IMPORTANTE
=======================================================

-Crea un archivo llamado .env dentro de la raiz del proyecto
-Copia y pega dentro del archivo lo siguiente
-----------------------------------------------------------------
#FIC: Variables de Entorno

VITE_NAME="E-ALL-MODULES"
VITE_SECRET_KEY=@xxxppS3c0r1tyS3cr3tK3y 

VITE_HOST=https://app-rest-e-all-modules.herokuapp.com
# VITE_HOST=localhost
VITE_PORT=3051
VITE_API_SECURITY=https://app-rest-e-all-modules.herokuapp.com/api/v1
# VITE_API_SECURITY=http://localhost:3051/api/v1
VITE_API_COMMERCE=https://app-rest-e-all-modules.herokuapp.com/api/v1
# VITE_API_COMMERCE=localhost
VITE_API_URL=/api/v1

VITE_URL_PWA=localhost

VITE_AVATAR_DEFAULT=http://dns.com:8080/files/users/avatar/images/UserDefault.jpg

VITE_PATH_SIGNATURE=http://dns.com:8080/files/users/signatures

-----------------------------------------------------------------

5) Dentro de este directorio ejecuta el comando
npm i
6) Una vez finalizada la instalación ejecuta el comando
npm run dev
7) Una vez que se haya terminado de cargar el proyecto abre tu navegador y entra al siguiente enlace 
http://localhost:3051

Link para ver carrito de compras: http://localhost:3051/carrito
Link para ver las compras: http://localhost:3051/mis-compras



