const datasController = require('../controller/quotes')
const express = require('express');
const router = express.Router();

router.get('/dataAll', function (req, res) {
        datasController.dataAll(req,res);
    });
router.post('/dataNew', function (req, res) {
        datasController.dataNew(req,res);
    });
router.get('/dataId/:id', function (req, res) {
        datasController.dataId(req,res);
    });
router.put('/dataUpdate/:id', function (req, res) {
        datasController.dataUpdate(req,res);
    });

router.delete('/dataDelete/:id', function (req, res) {
        datasController.dataDelete(req,res);
    });

module.exports = router
