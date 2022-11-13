const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./server/config/mongoose');

const router = require('./server/config/router')
app.use(router)

//exponemos el servidor en el la ip:puerto requerido
app.listen(8000, function () {
    console.log('servidor ejecutandose en http://localhost:8000/task');
});