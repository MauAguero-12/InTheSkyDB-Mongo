/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3');

const Categories = mongoose.model('Categories',
{
    name: String,
    color: String,

    objects: [{
        objectName: String,
        posX: Number,
        posY: Number,
        posZ: Number,
        magnitude: Number,
        constalation: String,
        imageURL: String
    }]
});*/



//-----------------------------------------------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3');

const background = mongoose.model('background',
{
    nameOptions: String,   //las 4 opciones de background disponibles en la página

    posicionesLineasDivisorias: [  //lineas divisiorias en el mapa
        {                           //se muestran las coordenadas iniciales dela linea y las coordenadas donde se detiene
            posXInicial: Number,
            posYInicial: Number,
            posZInicial: Number,
            posXFinal: Number,
            posYFinal: Number,
            posZFinal: Number
            
        }
    ], //este campo es opcional, ya que algunas opciones de background no requiren divisiones en el mapa
    
    nameobjects: [{   //se refiere a los objetos del mapa-> las estrellas, constelaciones, galaxias, etc
        
        nameCategory: String,
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


//-----------------------------------------------------------------

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3');

const Escala = mongoose.model("Escala",
{   
    distanciaActual : Number,
    distanciaMin : Number, // distancia actual no puede ser menor que esto
    distanciaMax : Number,// distancia actual no puede ser mayor que esto
    //Si sale de los rangos la descripcion ya no applica y se tiene que pasar a otra descripcion
    unidades : String,
    descripcion : String
}
);*/

//-----------------------------------------------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3')

const Zoom = mongoose.model('zoom',
 {
    nombreOpcion : String,

    zoomEstablecido: [{
        escala: [{   
            distanciaActual : Number,
            distanciaMin : Number, // distancia actual no puede ser menor que esto
            distanciaMax : Number,// distancia actual no puede ser mayor que esto
            //Si sale de los rangos la descripcion ya no applica y se tiene que pasar a otra descripcion
            unidades : String,
            descripcion : String
        }] 
    }],
    
    objetos: [{         
        nombre: String,
        posicionX: Number,
        posicionY: Number,
        posicionZ: Number,
        escala: Number,
        constelaciones: String
    }]
});

