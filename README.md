# Drupal 9
<hr>

Para instalar Drupal, lo haremos a través de Composer. Para ello, ponemos el siguiente comando:

> composer create-project drupal/recommended-project Nombre_Proyecto
> 
Al instalarlo, si da excepción de php-gd, hacer:

> sudo apt install php-gd
> 
Después de eso, hacemos:

> composer update

<hr>

Una manera más fácil de instalarlo, es clonando el siguiente repositorio de Github:
> https://github.com/wodby/docker4drupal

Después de clonarlo, modificamos el archivo .env con nano, poniendo el nombre de nuestro proyecto y la URL respectivamente.

> PROJECT_NAME=curso_drupal
> 
> PROJECT_BASE_URL=curso-drupal.local

Desde el archivo docker-compose.yml podemos instalar algunas dependencias descomentando las lineas. En mi caso, descomentando adminer (Gestor de bases de datos parecido a phpMyAdmin)

También en la linea de traefik, en ports modificamos la linea y ponemos lo siguiente:

> 80:80

Con esto, ya podremos entrar sin usar el puerto.

<hr>

Para levantar el servidor, usamos el siguiente comando:

> docker-compose up -d

Tenemos que modificar con nano el etc/hosts para añadirlo:
> nano etc/hosts

Agregamos lo siguiente:

> 127.0.0.1 curso-drupal.local

Después, entramos a http://curso-drupal.local, Esto debería redirigirnos a una pantalla de instalación de Drupal 9.

Elegimos el idioma que deseemos, y en la selección de perfiles, seleccionamos estandar
