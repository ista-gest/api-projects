const express = require('express');

const router = express.Router()
const Model = require('../model/model');
module.exports = router;

//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        id: req.body.id,
        title: req.body.title,
        noteJ1:-1,
        noteJ2:-1,
        noteJ3:-1,
        noteJ4:-1,
        total:0,
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find({},{_id: 0});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.find({id:req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findOneAndUpdate(
            {id:id}, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findOneAndDelete({id:id})
        res.send(`Project with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
