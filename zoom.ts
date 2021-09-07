const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3')

const Zoom = mongoose.model('zoom',
 {
    nombreOpcion : String,

    zoomEstablecido: [{
        escala: Number,
        limiteNorte: Number,    //hago referencia a los puntos limites donde llega la escala
        LimiteSur: Number       //Con esos numeros solo se le cambiaria el zoom requerido 
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
