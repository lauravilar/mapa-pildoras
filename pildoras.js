// Datos del mapa. Lo genera el flujo de píldoras: una entrada por píldora.
window.PILDORAS = {
 "curso": "4º ESO · Videojuegos · GDevelop",
 "zonas": [
  {
   "id": 1,
   "titulo": "Modelo mental y primer proyecto",
   "ampliacion": false,
   "pildoras": [
    {
     "id": "1.01",
     "n": "01",
     "titulo": "Condición y acción",
     "lema": "Un evento es una regla: si pasa esto, haz aquello.",
     "video": "c1/videos/01-eventos.mp4",
     "portada": "c1/portadas/01-eventos.jpg",
     "esencial": true,
     "sintomas": [
      "No entiendo qué es un evento",
      "¿Cómo le digo al juego que haga algo?"
     ]
    },
    {
     "id": "1.02",
     "n": "02",
     "titulo": "Proyecto no es juego",
     "lema": "Datos y reglas; el juego aparece al ejecutarse.",
     "video": "c1/videos/02-proyecto.mp4",
     "portada": "c1/portadas/02-proyecto.jpg",
     "esencial": false,
     "sintomas": [
      "¿Qué es exactamente lo que guardo?",
      "¿Dónde está mi juego?"
     ]
    },
    {
     "id": "1.03",
     "n": "03",
     "titulo": "Vista previa vacía",
     "lema": "Probar sin publicar. Vacía no es un error.",
     "video": "c1/videos/03-vista-previa.mp4",
     "portada": "c1/portadas/03-vista-previa.jpg",
     "esencial": true,
     "sintomas": [
      "Le doy a vista previa y sale todo vacío",
      "¿Cómo pruebo mi juego?"
     ]
    },
    {
     "id": "1.04",
     "n": "04",
     "titulo": "Tres preguntas",
     "lema": "Gestor, editor de escenas, editor de eventos.",
     "video": "c1/videos/04-zonas.mp4",
     "portada": "c1/portadas/04-zonas.jpg",
     "esencial": false,
     "sintomas": [
      "No sé dónde está cada cosa en GDevelop",
      "Me pierdo entre pestañas"
     ]
    },
    {
     "id": "1.05",
     "n": "05",
     "titulo": "Cada escena, sus reglas",
     "lema": "Cada escena tiene su propia hoja de eventos.",
     "video": "c1/videos/05-hoja-eventos.mp4",
     "portada": "c1/portadas/05-hoja-eventos.jpg",
     "esencial": false,
     "sintomas": [
      "Mis eventos no funcionan en otra escena"
     ]
    },
    {
     "id": "1.06",
     "n": "06",
     "titulo": "Objeto, instancia, escena",
     "lema": "Un molde, muchas copias, un lugar.",
     "video": "c1/videos/06-objeto-instancia.mp4",
     "portada": "c1/portadas/06-objeto-instancia.jpg",
     "esencial": true,
     "sintomas": [
      "Cambio un objeto y cambian todas las copias",
      "¿Qué diferencia hay entre objeto e instancia?"
     ]
    },
    {
     "id": "1.07",
     "n": "07",
     "titulo": "La Y va hacia abajo",
     "lema": "En GDevelop: más Y, más abajo.",
     "video": "c1/videos/07-eje-y.mp4",
     "portada": "c1/portadas/07-eje-y.jpg",
     "esencial": true,
     "sintomas": [
      "Quiero que suba y baja",
      "El personaje va al revés en vertical"
     ]
    },
    {
     "id": "1.08",
     "n": "08",
     "titulo": "Posición, tamaño, ángulo",
     "lema": "Dónde, cuánto y cómo: tres propiedades.",
     "video": "c1/videos/08-propiedades.mp4",
     "portada": "c1/portadas/08-propiedades.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo lo muevo, lo agrando o lo giro?"
     ]
    },
    {
     "id": "1.09",
     "n": "09",
     "titulo": "Velocidad y TimeDelta",
     "lema": "Velocidad por segundo, no por fotograma.",
     "video": "c1/videos/09-time-delta.mp4",
     "portada": "c1/portadas/09-time-delta.jpg",
     "esencial": false,
     "sintomas": [
      "Mi juego va más rápido en un ordenador que en otro",
      "La velocidad cambia sola"
     ]
    }
   ]
  },
  {
   "id": 2,
   "titulo": "Escenas, objetos y recursos",
   "ampliacion": false,
   "pildoras": [
    {
     "id": "2.01",
     "n": "01",
     "titulo": "Escenas",
     "lema": "Una pantalla, una escena.",
     "video": "c2/videos/01-escenas.mp4",
     "portada": "c2/portadas/01-escenas.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo hago el menú, el nivel y la pantalla final?"
     ]
    },
    {
     "id": "2.02",
     "n": "02",
     "titulo": "El sello y sus marcas",
     "lema": "Un objeto, muchas instancias.",
     "video": "c2/videos/02-objeto-instancia.mp4",
     "portada": "c2/portadas/02-objeto-instancia.jpg",
     "esencial": false,
     "sintomas": [
      "He puesto diez monedas, ¿son diez objetos?"
     ]
    },
    {
     "id": "2.03",
     "n": "03",
     "titulo": "Tipos de objeto",
     "lema": "Elige el tipo según lo que hace.",
     "video": "c2/videos/03-tipos-objeto.mp4",
     "portada": "c2/portadas/03-tipos-objeto.jpg",
     "esencial": false,
     "sintomas": [
      "No sé qué tipo de objeto elegir",
      "¿Sprite, texto o mosaico?"
     ]
    },
    {
     "id": "2.04",
     "n": "04",
     "titulo": "Sprites y fotogramas",
     "lema": "Animación = dibujos en secuencia.",
     "video": "c2/videos/04-sprites-animaciones.mp4",
     "portada": "c2/portadas/04-sprites-animaciones.jpg",
     "esencial": true,
     "sintomas": [
      "Mi personaje no se anima",
      "¿Cómo hago una animación?"
     ]
    },
    {
     "id": "2.05",
     "n": "05",
     "titulo": "¿Qué propiedad toco?",
     "lema": "Cada propiedad, una tarea.",
     "video": "c2/videos/05-propiedades.mp4",
     "portada": "c2/portadas/05-propiedades.jpg",
     "esencial": false,
     "sintomas": [
      "No sé qué propiedad cambiar"
     ]
    },
    {
     "id": "2.06",
     "n": "06",
     "titulo": "Capas y orden Z",
     "lema": "Capas para grupos, Z dentro de cada capa.",
     "video": "c2/videos/06-capas-orden-z.mp4",
     "portada": "c2/portadas/06-capas-orden-z.jpg",
     "esencial": true,
     "sintomas": [
      "Un objeto queda tapado por otro",
      "El fondo tapa al personaje"
     ]
    },
    {
     "id": "2.07",
     "n": "07",
     "titulo": "Gratis no es libre",
     "lema": "Antes de usarlo, mira su licencia.",
     "video": "c2/videos/07-recursos-licencias.mp4",
     "portada": "c2/portadas/07-recursos-licencias.jpg",
     "esencial": false,
     "sintomas": [
      "¿Puedo usar esta imagen de internet?",
      "¿Cómo pongo los créditos?"
     ]
    },
    {
     "id": "2.08",
     "n": "08",
     "titulo": "Comportamientos",
     "lema": "Comportamiento: habilidad lista para usar.",
     "video": "c2/videos/08-comportamientos.mp4",
     "portada": "c2/portadas/08-comportamientos.jpg",
     "esencial": true,
     "sintomas": [
      "Quiero que salte sin programarlo todo",
      "¿Qué es un comportamiento?"
     ]
    }
   ]
  },
  {
   "id": 3,
   "titulo": "Eventos y lógica visual",
   "ampliacion": false,
   "pildoras": [
    {
     "id": "3.01",
     "n": "01",
     "titulo": "Crear un evento paso a paso",
     "lema": "Un evento, una prueba.",
     "video": "c3/videos/01-crear-evento.mp4",
     "portada": "c3/portadas/01-crear-evento.jpg",
     "esencial": true,
     "sintomas": [
      "¿Cómo creo mi primer evento?"
     ]
    },
    {
     "id": "3.02",
     "n": "02",
     "titulo": "Solo el cristal tocado",
     "lema": "Primero elige, después actúa.",
     "video": "c3/videos/02-solo-el-tocado.mp4",
     "portada": "c3/portadas/02-solo-el-tocado.jpg",
     "esencial": true,
     "sintomas": [
      "Toco una moneda y desaparecen todas",
      "La acción afecta a todas las copias"
     ]
    },
    {
     "id": "3.03",
     "n": "03",
     "titulo": "Sin condición = siempre",
     "lema": "Sin condición: cada fotograma.",
     "video": "c3/videos/03-sin-condicion.mp4",
     "portada": "c3/portadas/03-sin-condicion.jpg",
     "esencial": true,
     "sintomas": [
      "La acción se repite sin parar",
      "Suma puntos todo el rato"
     ]
    },
    {
     "id": "3.04",
     "n": "04",
     "titulo": "Número a texto",
     "lema": "Para mostrarlo: ToString.",
     "video": "c3/videos/04-texto-y-numero.mp4",
     "portada": "c3/portadas/04-texto-y-numero.jpg",
     "esencial": false,
     "sintomas": [
      "El marcador da error al mostrar el número",
      "No puedo poner un número en un texto"
     ]
    },
    {
     "id": "3.05",
     "n": "05",
     "titulo": "¿Qué debe ser verdad?",
     "lema": "¿Qué es verdad justo antes?",
     "video": "c3/videos/05-elegir-condicion.mp4",
     "portada": "c3/portadas/05-elegir-condicion.jpg",
     "esencial": false,
     "sintomas": [
      "No sé qué condición poner"
     ]
    },
    {
     "id": "3.06",
     "n": "06",
     "titulo": "Un verbo por acción",
     "lema": "Sin verbo, no hay acción.",
     "video": "c3/videos/06-elegir-accion.mp4",
     "portada": "c3/portadas/06-elegir-accion.jpg",
     "esencial": false,
     "sintomas": [
      "No sé qué acción poner"
     ]
    },
    {
     "id": "3.07",
     "n": "07",
     "titulo": "La vida de una variable",
     "lema": "Crear, sumar, comparar, mostrar.",
     "video": "c3/videos/07-variable-escena.mp4",
     "portada": "c3/portadas/07-variable-escena.jpg",
     "esencial": true,
     "sintomas": [
      "¿Cómo cuento puntos o vidas?",
      "¿Qué es una variable?"
     ]
    },
    {
     "id": "3.08",
     "n": "08",
     "titulo": "¿Quién necesita el dato?",
     "lema": "¿Quién necesita conocerlo?",
     "video": "c3/videos/08-alcance.mp4",
     "portada": "c3/portadas/08-alcance.jpg",
     "esencial": true,
     "sintomas": [
      "Los puntos se pierden al cambiar de escena",
      "¿Variable de escena, global o de objeto?"
     ]
    },
    {
     "id": "3.09",
     "n": "09",
     "titulo": "Tipo no es alcance",
     "lema": "Tipo: qué guarda. Alcance: quién lo ve.",
     "video": "c3/videos/09-tipos-variable.mp4",
     "portada": "c3/portadas/09-tipos-variable.jpg",
     "esencial": false,
     "sintomas": [
      "Confundo tipo de variable y alcance",
      "¿Número, texto o booleano?"
     ]
    },
    {
     "id": "3.10",
     "n": "10",
     "titulo": "Subeventos: pregunta y ramas",
     "lema": "Una pregunta, varias ramas.",
     "video": "c3/videos/10-subeventos.mp4",
     "portada": "c3/portadas/10-subeventos.jpg",
     "esencial": false,
     "sintomas": [
      "Quiero que pasen cosas distintas según el caso",
      "¿Para qué sirve un subevento?"
     ]
    },
    {
     "id": "3.11",
     "n": "11",
     "titulo": "Síntoma, causa, revisión",
     "lema": "Del síntoma a la causa.",
     "video": "c3/videos/11-errores-frecuentes.mp4",
     "portada": "c3/portadas/11-errores-frecuentes.jpg",
     "esencial": true,
     "sintomas": [
      "Mi juego no hace lo que debería y no sé por qué",
      "¿Por dónde empiezo a buscar el error?"
     ]
    },
    {
     "id": "3.12",
     "n": "12",
     "titulo": "Preguntas al juego",
     "lema": "Toda condición responde: sí o no.",
     "video": "c3/videos/12-condiciones-habituales.mp4",
     "portada": "c3/portadas/12-condiciones-habituales.jpg",
     "esencial": false,
     "sintomas": [
      "¿Qué condiciones existen?"
     ]
    },
    {
     "id": "3.13",
     "n": "13",
     "titulo": "Lo que una acción cambia",
     "lema": "La condición pregunta; la acción cambia.",
     "video": "c3/videos/13-acciones-habituales.mp4",
     "portada": "c3/portadas/13-acciones-habituales.jpg",
     "esencial": false,
     "sintomas": [
      "¿Qué acciones existen?"
     ]
    },
    {
     "id": "3.14",
     "n": "14",
     "titulo": "Cierra el bucle",
     "lema": "Reglas pequeñas, errores a la vista.",
     "video": "c3/videos/14-completar-bucle.mp4",
     "portada": "c3/portadas/14-completar-bucle.jpg",
     "esencial": false,
     "sintomas": [
      "Tengo piezas sueltas pero no un juego",
      "¿Cómo se gana o se pierde?"
     ]
    }
   ]
  },
  {
   "id": 4,
   "titulo": "Movimiento, interfaz y sistemas de juego",
   "ampliacion": false,
   "pildoras": [
    {
     "id": "4.01",
     "n": "01",
     "titulo": "Primero la intención",
     "lema": "Primero qué quiere; después qué pasa.",
     "video": "c4/videos/01-entrada-consecuencia.mp4",
     "portada": "c4/portadas/01-entrada-consecuencia.jpg",
     "esencial": true,
     "sintomas": [
      "Pulso la tecla y no pasa lo que quiero",
      "¿Cómo conecto teclas y movimiento?"
     ]
    },
    {
     "id": "4.02",
     "n": "02",
     "titulo": "Controles para todo el mundo",
     "lema": "Que todo el mundo pueda jugar.",
     "video": "c4/videos/02-controles-para-todos.mp4",
     "portada": "c4/portadas/02-controles-para-todos.jpg",
     "esencial": false,
     "sintomas": [
      "¿Qué teclas pongo?",
      "Hay quien no puede jugar con mis controles"
     ]
    },
    {
     "id": "4.03",
     "n": "03",
     "titulo": "Caminar y Quieta",
     "lema": "Moverse y animarse: dos reglas.",
     "video": "c4/videos/03-caminar-quieta.mp4",
     "portada": "c4/portadas/03-caminar-quieta.jpg",
     "esencial": false,
     "sintomas": [
      "Se mueve pero no cambia la animación",
      "Se queda con la animación de andar"
     ]
    },
    {
     "id": "4.04",
     "n": "04",
     "titulo": "La cámara es una ventana",
     "lema": "La cámara mira; no mueve el mundo.",
     "video": "c4/videos/04-camara-ventana.mp4",
     "portada": "c4/portadas/04-camara-ventana.jpg",
     "esencial": true,
     "sintomas": [
      "La cámara no sigue al personaje",
      "El personaje se sale de la pantalla"
     ]
    },
    {
     "id": "4.05",
     "n": "05",
     "titulo": "Separar mundo e interfaz",
     "lema": "¿Marcador que se mueve? Capa equivocada.",
     "video": "c4/videos/05-mundo-interfaz.mp4",
     "portada": "c4/portadas/05-mundo-interfaz.jpg",
     "esencial": true,
     "sintomas": [
      "El marcador se mueve con la cámara",
      "El marcador se va de la pantalla"
     ]
    },
    {
     "id": "4.06",
     "n": "06",
     "titulo": "Choca la máscara",
     "lema": "Lo que choca es la máscara.",
     "video": "c4/videos/06-mascara-colision.mp4",
     "portada": "c4/portadas/06-mascara-colision.jpg",
     "esencial": true,
     "sintomas": [
      "Choca antes de tocar",
      "Atraviesa cosas o choca con el aire"
     ]
    },
    {
     "id": "4.07",
     "n": "07",
     "titulo": "¿Hace falta física?",
     "lema": "Física solo si el juego la necesita.",
     "video": "c4/videos/07-fisica-o-comportamiento.mp4",
     "portada": "c4/portadas/07-fisica-o-comportamiento.jpg",
     "esencial": false,
     "sintomas": [
      "¿Uso el motor de física o un comportamiento?",
      "Mi personaje rebota o gira raro"
     ]
    },
    {
     "id": "4.08",
     "n": "08",
     "titulo": "Un contacto, cuatro significados",
     "lema": "La herramienta detecta; tú decides.",
     "video": "c4/videos/08-colision-significado.mp4",
     "portada": "c4/portadas/08-colision-significado.jpg",
     "esencial": true,
     "sintomas": [
      "¿Qué pasa cuando dos objetos se tocan?",
      "Quiero recoger, dañar o bloquear"
     ]
    },
    {
     "id": "4.09",
     "n": "09",
     "titulo": "Informar sin distraer",
     "lema": "Explica el juego; no compite con él.",
     "video": "c4/videos/09-interfaz-informa.mp4",
     "portada": "c4/portadas/09-interfaz-informa.jpg",
     "esencial": false,
     "sintomas": [
      "Mi pantalla está llena de textos"
     ]
    },
    {
     "id": "4.10",
     "n": "10",
     "titulo": "Crear un marcador",
     "lema": "Cambia la variable, cambia el texto.",
     "video": "c4/videos/10-crear-marcador.mp4",
     "portada": "c4/portadas/10-crear-marcador.jpg",
     "esencial": true,
     "sintomas": [
      "¿Cómo muestro los puntos?",
      "El marcador no se actualiza"
     ]
    },
    {
     "id": "4.11",
     "n": "11",
     "titulo": "Música y efectos",
     "lema": "Cada sonido, una vez y con sentido.",
     "video": "c4/videos/11-musica-efectos.mp4",
     "portada": "c4/portadas/11-musica-efectos.jpg",
     "esencial": false,
     "sintomas": [
      "El sonido suena mil veces",
      "¿Cómo pongo música?"
     ]
    },
    {
     "id": "4.12",
     "n": "12",
     "titulo": "Temporizador no es variable",
     "lema": "Tiempo → temporizador. Dato → variable.",
     "video": "c4/videos/12-temporizador-variable.mp4",
     "portada": "c4/portadas/12-temporizador-variable.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo hago una cuenta atrás?",
      "Quiero que pase algo después de unos segundos"
     ]
    },
    {
     "id": "4.13",
     "n": "13",
     "titulo": "Guardianes cada 3 segundos",
     "lema": "Pasan 3 s: crear y reiniciar.",
     "video": "c4/videos/13-oleada.mp4",
     "portada": "c4/portadas/13-oleada.jpg",
     "esencial": false,
     "sintomas": [
      "Quiero que aparezcan enemigos cada cierto tiempo",
      "Aparecen demasiados enemigos a la vez"
     ]
    },
    {
     "id": "4.14",
     "n": "14",
     "titulo": "Guardar el récord",
     "lema": "Guarda lo justo; comprueba al leer.",
     "video": "c4/videos/14-mejor-puntuacion.mp4",
     "portada": "c4/portadas/14-mejor-puntuacion.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo guardo la mejor puntuación?",
      "El récord se borra al cerrar"
     ]
    },
    {
     "id": "4.15",
     "n": "15",
     "titulo": "¿Cuándo guardar?",
     "lema": "Guarda en momentos, no en fotogramas.",
     "video": "c4/videos/15-cuando-guardar.mp4",
     "portada": "c4/portadas/15-cuando-guardar.jpg",
     "esencial": false,
     "sintomas": [
      "El juego va lento cuando guardo",
      "¿En qué momento guardo la partida?"
     ]
    },
    {
     "id": "4.16",
     "n": "16",
     "titulo": "Partículas que ayudan",
     "lema": "Que se note, sin tapar el juego.",
     "video": "c4/videos/16-particulas.mp4",
     "portada": "c4/portadas/16-particulas.jpg",
     "esencial": false,
     "sintomas": [
      "Quiero un efecto al recoger o explotar"
     ]
    },
    {
     "id": "4.17",
     "n": "17",
     "titulo": "¿Qué viaja a la otra escena?",
     "lema": "Viaja solo lo necesario.",
     "video": "c4/videos/17-datos-entre-escenas.mp4",
     "portada": "c4/portadas/17-datos-entre-escenas.jpg",
     "esencial": true,
     "sintomas": [
      "Paso de nivel y pierdo los puntos",
      "¿Cómo llevo datos a otra escena?"
     ]
    },
    {
     "id": "4.18",
     "n": "18",
     "titulo": "Haz jugable el prototipo",
     "lema": "Ya no es un prototipo: es un juego.",
     "video": "c4/videos/18-prototipo-jugable.mp4",
     "portada": "c4/portadas/18-prototipo-jugable.jpg",
     "esencial": false,
     "sintomas": [
      "Funciona, pero no parece un juego",
      "¿Qué le falta a mi juego?"
     ]
    },
    {
     "id": "4.19",
     "n": "19",
     "titulo": "La prueba de alguien nuevo",
     "lema": "Si lo entiende sin ti, funciona.",
     "video": "c4/videos/19-prueba-persona-nueva.mp4",
     "portada": "c4/portadas/19-prueba-persona-nueva.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo sé si mi juego se entiende?",
      "Otra persona no sabe qué hacer en mi juego"
     ]
    }
   ]
  },
  {
   "id": 5,
   "titulo": "Funciones avanzadas y JavaScript",
   "ampliacion": true,
   "pildoras": [
    {
     "id": "5.01",
     "n": "01",
     "titulo": "Una regla, tres escenas",
     "lema": "Una regla, un solo sitio para corregirla.",
     "video": "c5/videos/01-evento-externo.mp4",
     "portada": "c5/portadas/01-evento-externo.jpg",
     "esencial": false,
     "sintomas": [
      "Repito el mismo evento en varias escenas"
     ]
    },
    {
     "id": "5.02",
     "n": "02",
     "titulo": "Una acción con nombre",
     "lema": "Un nombre claro, una tarea clara.",
     "video": "c5/videos/02-funcion.mp4",
     "portada": "c5/portadas/02-funcion.jpg",
     "esencial": false,
     "sintomas": [
      "Repito las mismas acciones muchas veces"
     ]
    },
    {
     "id": "5.03",
     "n": "03",
     "titulo": "SumarPuntos paso a paso",
     "lema": "Una sola regla para la puntuación.",
     "video": "c5/videos/03-sumar-puntos.mp4",
     "portada": "c5/portadas/03-sumar-puntos.jpg",
     "esencial": false,
     "sintomas": [
      "Sumo puntos en muchos sitios distintos"
     ]
    },
    {
     "id": "5.04",
     "n": "04",
     "titulo": "Extensión: ahorro y dependencia",
     "lema": "Instala solo lo que puedas mantener.",
     "video": "c5/videos/04-extension.mp4",
     "portada": "c5/portadas/04-extension.jpg",
     "esencial": false,
     "sintomas": [
      "¿Instalo una extensión o lo hago yo?"
     ]
    },
    {
     "id": "5.05",
     "n": "05",
     "titulo": "Cinco pasos antes de instalar",
     "lema": "Primero compruebas, después instalas.",
     "video": "c5/videos/05-antes-de-instalar.mp4",
     "portada": "c5/portadas/05-antes-de-instalar.jpg",
     "esencial": false,
     "sintomas": [
      "¿Es segura esta extensión?"
     ]
    },
    {
     "id": "5.06",
     "n": "06",
     "titulo": "Parte de algo hecho, hazlo tuyo",
     "lema": "Reutiliza, renombra y documenta.",
     "video": "c5/videos/06-plantillas-reutilizables.mp4",
     "portada": "c5/portadas/06-plantillas-reutilizables.jpg",
     "esencial": false,
     "sintomas": [
      "¿Puedo partir de una plantilla o un ejemplo?"
     ]
    },
    {
     "id": "5.07",
     "n": "07",
     "titulo": "JavaScript con red de seguridad",
     "lema": "Código pequeño, con nombre y comprobado.",
     "video": "c5/videos/07-antes-de-javascript.mp4",
     "portada": "c5/portadas/07-antes-de-javascript.jpg",
     "esencial": false,
     "sintomas": [
      "Quiero usar JavaScript sin romper el juego"
     ]
    },
    {
     "id": "5.08",
     "n": "08",
     "titulo": "¿Eventos o código?",
     "lema": "Eventos para leer; código para lo que no cabe.",
     "video": "c5/videos/08-eventos-o-codigo.mp4",
     "portada": "c5/portadas/08-eventos-o-codigo.jpg",
     "esencial": false,
     "sintomas": [
      "¿Esto lo hago con eventos o con código?"
     ]
    },
    {
     "id": "5.09",
     "n": "09",
     "titulo": "Tu primer JavaScript",
     "lema": "¿Existe? Compruébalo antes de leer.",
     "video": "c5/videos/09-primer-javascript.mp4",
     "portada": "c5/portadas/09-primer-javascript.jpg",
     "esencial": false,
     "sintomas": [
      "¿Cómo escribo mi primera línea de JavaScript?"
     ]
    },
    {
     "id": "5.10",
     "n": "10",
     "titulo": "Un jugador, un paquete de datos",
     "lema": "Datos que van juntos, en una estructura.",
     "video": "c5/videos/10-datos-estructurados.mp4",
     "portada": "c5/portadas/10-datos-estructurados.jpg",
     "esencial": false,
     "sintomas": [
      "Tengo muchas variables sueltas para un mismo jugador"
     ]
    },
    {
     "id": "5.11",
     "n": "11",
     "titulo": "Dos jugadoras, tres preguntas",
     "lema": "Antes de la red, responde tres preguntas.",
     "video": "c5/videos/11-multijugador.mp4",
     "portada": "c5/portadas/11-multijugador.jpg",
     "esencial": false,
     "sintomas": [
      "Quiero que jueguen dos personas en red"
     ]
    },
    {
     "id": "5.12",
     "n": "12",
     "titulo": "Anuncios, compras y clasificaciones",
     "lema": "Cada servicio, con sus normas y anotado.",
     "video": "c5/videos/12-servicios-externos.mp4",
     "portada": "c5/portadas/12-servicios-externos.jpg",
     "esencial": false,
     "sintomas": [
      "¿Puedo poner anuncios, compras o una clasificación?"
     ]
    },
    {
     "id": "5.13",
     "n": "13",
     "titulo": "Que vaya fluido en todos",
     "lema": "Mide, aligera y prueba en lo más lento.",
     "video": "c5/videos/13-rendimiento.mp4",
     "portada": "c5/portadas/13-rendimiento.jpg",
     "esencial": false,
     "sintomas": [
      "Mi juego va lento en otros dispositivos"
     ]
    },
    {
     "id": "5.14",
     "n": "14",
     "titulo": "Diagnosticar tirones",
     "lema": "Reproduce, quita, compara.",
     "video": "c5/videos/14-diagnosticar-tirones.mp4",
     "portada": "c5/portadas/14-diagnosticar-tirones.jpg",
     "esencial": false,
     "sintomas": [
      "Mi juego da tirones y no sé por qué"
     ]
    },
    {
     "id": "5.15",
     "n": "15",
     "titulo": "Refactoriza sin romper",
     "lema": "Mismo juego, menos repetición.",
     "video": "c5/videos/15-refactorizar.mp4",
     "portada": "c5/portadas/15-refactorizar.jpg",
     "esencial": false,
     "sintomas": [
      "Mis eventos son un lío y me da miedo tocarlos"
     ]
    }
   ]
  }
 ]
};
