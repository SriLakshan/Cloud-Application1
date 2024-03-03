const router = require('express').Router();
const CloudComputer = require('../model/Cloud_computer');

// CREATE operation
router.post('/', async (req, res) => {
    try {
        const cloudComputer = new CloudComputer(req.body);
        const savedCloudComputer = await cloudComputer.save();
        res.status(201).json(savedCloudComputer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ operation
router.get('/', async (req, res) => {
    try {
        const cloudComputers = await CloudComputer.find();
        res.status(200).json(cloudComputers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE operation
router.patch('/:id', async (req, res) => {
    try {
        const updatedCloudComputer = await CloudComputer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCloudComputer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE operation
router.delete('/:id', async (req, res) => {
    try {
        await CloudComputer.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
