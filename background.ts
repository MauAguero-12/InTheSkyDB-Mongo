const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3');

const background = mongoose.model('quiz_2_3',
{
    nameOptions: String,   //las 4 opciones de background disponibles en la página
    posicionesLineasDivisorias: [
        {
            posX: Number,
            posY: Number,
            posZ: Number,
            largo: Number,   //el largo de la linea en el mapa
            direccion: String   //derecha, izquierda, arriba, abajo, diagonal...
        }
    ], //este campo es opcional, ya que algunas opciones de background no requiren divisiones en el mapa
    
    nameobjects: [{   //se refiere a los objetos del mapa-> las estrellas, constelaciones, galaxias, etc
        objectName: String,
        posX: Number,
        posY: Number,
        posZ: Number,
        magnitude: Number,
        constalation: String,
        imageURL: String
    }],

    constellationlabels: [{   //este espacio es opcional ya que solo la última opción de background muestra los nombres y posiciones de las constelaciones
        
        constellationName: String,
        posX: Number,
        posY: Number,
        posZ: Number,
        
    }]
});
