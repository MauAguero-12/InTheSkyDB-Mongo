const mongoose = require('mongoose');
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
);

