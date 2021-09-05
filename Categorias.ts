const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz_2_3');

const Categories = mongoose.model('quiz_2_3',
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
});