const Pet = require("../models/pet-model");

const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();

        res.status(200).json({
            status: "success",
            count: pets.length,
            data: {
                pets,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: `Error in fetching pets: ${error.message}`,
        });
    }
};

const createPet = async (req, res) => {
    try {
        const newPet = await Pet.create({
            ...req.body,
            imageUrl: req.file? .filename ,
        });

        res.status(201).json({
            status: "success",
            message: "Pet added",
            data: {
                pet: newPet,
            },
        });

    } catch (error) {
        if(req.file){
            deleteupdatedFile("uploads/" , req.file.filename);
        }
        res.status(400).json({
            status: "error",
            message: `Error in creating pet: ${error.message}`,
        });
    }
};

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                status: "error",
                message: "Pet not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                pet,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: `Error in fetching pet: ${error.message}`,
        });
    }
};

const updatePet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                status: "error",
                message: "Pet not found",
            });
        }

        if (req.body.name) req.body.name = req.body.name.toLowerCase();
        if (req.body.breed) req.body.breed = req.body.breed.toLowerCase();

        const updatedData = {
            ...req.body,
        };

        if (req.file) {
            req.body.imageUrl = req.file.filename;
            if(pet.imageUrl) deleteupdatedFile("uploads/", pet.imageUrl);
        }

        Object.assign(course, req.body);
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });

        res.status(200).json({
            status: "success",
            message: "Pet updated",
            data: {
                pet: updatedPet,
            },
        });
    } catch (error) {
        if(req.file){
            deleteupdatedFile("uploads/" , req.file.filename);
        }
        res.status(400).json({
            status: "error",
            message: `Error in updating pet: ${error.message}`,
        });
    }
};
        

const deletePet = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);

        if (!deletedPet) {
            return res.status(404).json({
                status: "error",
                message: "Pet not found",
            });
        }

        if (deletedPet.imageUrl) {
            deleteupdatedFile("uploads/", deletedPet.imageUrl);
        }

        res.status(200).json({
            status: "success",
            message: "Pet deleted",
            data: {
                pet: deletedPet,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: `Error in deleting pet: ${error.message}`,
        });
    }
};

module.exports = {
    getAllPets,
    createPet,
    getPetById,
    updatePet,
    deletePet,
};

