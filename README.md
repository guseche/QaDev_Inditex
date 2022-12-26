# QaDev_Inditex

Aquí se encuentra la solución del Proceso de selección Digital de la Prueba Técnica QA DEV para inditex

Autor: Gabriel Jaime Useche Ossa.

dentro del repositorio se encuentra la siguiente distribución por carpetas.

* ejercicio_1
* ejercicio_2
* ejercicio_3

Correspondiente a las siguientes actividades.

* Ejercicio 1: Prueba exploratoria y reporte de bugs

Aquí se encontrara el desarrollo del reporte del bugs junto a sus evidencias.

* Ejercicio 2: Automatización de una web

En este caso se utilizó como herramienta de construcción y ejecución el framework de cypress.

para su ejecución una vez descargado el proyecto en su equipo local, puede realizar la ejecución de este desde la consola de la siguiente manera.

1. ubicarse desde la consola dentro del fichero ejercicio_2.
2. ejecutar el comando npm install con el fin de obtener las dependencias necesarias para la ejecución.
3. ejecutar el comando npm test.
> En caso de que npn test no funcione es posible ejecutar también el comando npx cypress run.

Una vez finalizada la ejecución se podrá observar en la raíz del proyecto la presencia de un archivo llamado cucumber-report.html. Este es el reporte creado al finalizar la ejecución.

Donde podremos identificar tanto el paso a paso realizado, como la captura final de la página.

* Ejercicio 3: Tratamiento de datos en APIs

En este caso se dividió el punto en 2 ficheros.

- punto_1_2
- punto3

Para la solución del punto dos se utilizó como framework karate y gradle como herramienta de automatización para la ejecución de las pruebas.

Pasos para la ejecución:

1. ubicarse desde la consola dentro del fichero ejercicio_3 y acceder al punto_1_2
2. ejecutar el comando gradlew test
> en caso te utilizar como sistema operativo macos o Linux ejecutar el comando ./gradlew test

Una vez finalizada la ejecución se podrá observar en la raíz del proyecto la presencia de un fichero llamado target. Este es el reporte creado al finalizar la ejecución.

dentro de este reporte podremos identificar el paso a paso de la ejecución automatizada.

En el caso del punto 3 se creó el código usando JS, y este podrá ser ejecutado de la siguiente manera.

1. ubicarse desde la consola dentro del fichero ejercicio_3 y acceder al punto3
2. ejecutar el comando npm test
> en caso de tener inconvenientes con este comando se puede ejecutar de igual manera node IdentificarDuplicados.js


