const Datarestful = require('../models/model')

module.exports = {
    dataAll: async function (req, res) {
        await Datarestful.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },

    dataNew: async function (req, res) {
        const body = req.body;
        Datarestful.create(body)
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    dataId: async function (req, res) {
        let id = req.params.id;
        Datarestful.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    dataUpdate: async function (req, res) {
    const id = req.params.id;
        const body = req.body;
        Datarestful.updateOne({ _id: id}, body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    dataDelete: async function (req, res) {
        let id = req.params.id;
        
        Datarestful.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
  
};

