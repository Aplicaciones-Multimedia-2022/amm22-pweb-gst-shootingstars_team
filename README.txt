BIENVENIDOS A NUESTRO JUEGO.
Para poder disfrutar de la experiencia de Shooting Stars, deberás abrir el archivo de 'portada' de la carpeta de html.
Lo primero que encontraremos será la portada, en esta página tenemos varias funciones:
- RUEDA DE AJUSTES = la función de esta pagina es subir o bajar el volumen según lo desee el usuario, además podremos elegir el diseño de la nave con la que queramos jugar.
- PLAY = nos llevará a la pagina de PREJUEGO, aquí introduciremos nuestro nombre y seremos advertidos de las diferentes dificultades disponibles, una vez hayamos elegido una, seremos diseccionados automáticamente a la pagina JUEGO donde encontramos el videojuego.
- CÓMO JUGAR = en esta página encontramos una pequeña explicación, tanto escrita como visual, de cómo se juega a Shooting Stars. Te recomendamos leerlo antes de jugar.
- AUTORES = Para los más curiosos, en esta página podrás conocer a los creadores de la página, con las tareas que se ha ocupado cada uno (a grandes rasgos). 
- DESARROLLO = Aquí encontramos cinco puntos que definen muy bien lo de queremos explicar:
	- Responsabilidades = como anteriormente he dicho, en autores podemos conocer un poco, a grandes rasgos, de lo que se ha encargado cada uno. Pues en este punto lo podremos saber a mayor detalle
	- Técnicas y Tecnología = una pequeña guía del proyecto
	- Problemas = aquí son nombrados los principales problemas que hemos tenido a lo largo de la realización del trabajo
	- Puntos Fuertes = encontraremos lo que a nuestro parecer destaca más en Shooting Stars, ya sea de diseño o de la jugabilidad
	- Planificación = aquí exponemos nuestra organización por semanas a la hora de trabajar en la página.
- REFERENCIAS = Aunque el juego es totalmente de los autores dichos, estos se han ayudado de algunos recursos encontrados en los links que aparecen en esta página, colocados por los lenguajes de programación usados.

///ENTREGA 2 DEL PROYECTO///

Gstreamer se debe introducir la siguiente línea en la terminal desde la carpeta media (también explicado désde la página web de gstreamer).

gst-launch-1.0 filesrc location="videogv.ogv" ! oggdemux ! theoradec ! videoconvert ! videobalance saturation=0.0 ! textoverlay font-desc="Sans bold 30" text="Video en blanco y negro" color=4294967040 ! queue ! theoraenc ! m. oggmux name=m ! queue ! tcpserversink host=127.0.0.1 port=9090

Una vez iniciado el pipeline hay que darle al botón de Gstreamer de la página multimedia, y se podrá ver el video en blanco y negro además de un texto superpuesto. En cambio si se le pulsa a video original, la página mostrará el video sin ningún cambio. 


Participantes:
 
- Alicia Antón Rivas --> 100429271
- Paula Gallejones López --> 100429182
- Irene Torres Gámez --> 100429210
- Ignacio Moreno Mulet --> 100383694
