// const mongoose = require('../config/mongoose.config')
const mongoose = require("mongoose")

const dataResfulSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'title: no puede ser vacio'] },
        description: { type: String, default:'' },
        completed:{type:Boolean},
    }, { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Datarestful = mongoose.model('RestFulDB', dataResfulSchema);

module.exports = Datarestful;