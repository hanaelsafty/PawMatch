const Pet = require("../models/pet-model");
const deleteUploadedFiles = require("../utils/delete-uploaded-file");


// GET ALL PETS
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


// CREATE PET
const createPet = async (req, res) => {
    try {
        const newPet = await Pet.create({
            ...req.body,
            imageUrl: req.file?.filename
        });

        res.status(201).json({
            status: "success",
            message: "Pet added",
            data: {
                pet: newPet
            }
        });

    } catch (error) {
        if (req.file) {
            deleteUploadedFile("pets", req.file.filename);
        }

        res.status(400).json({
            status: "error",
            message: `Error in creating pet: ${error.message}`
        });
    }
};


// GET PET BY ID
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


// UPDATE PET
const updatePet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({
                status: "error",
                message: "Pet not found",
            });
        }

        const updatedData = {
            ...req.body,
        };

        if (req.body.name) {
            updatedData.name = req.body.name.toLowerCase();
        }

        if (req.body.breed) {
            updatedData.breed = req.body.breed.toLowerCase();
        }

        // If a new image was uploaded
        if (req.file) {
            updatedData.imageUrl = req.file.filename;

            // Delete old image
            if (pet.imageUrl) {
                deleteUploadedFiles("pets", pet.imageUrl);
            }
        }

        const updatedPet = await Pet.findByIdAndUpdate(
            req.params.id,
            updatedData,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            status: "success",
            message: "Pet updated",
            data: {
                pet: updatedPet,
            },
        });

    } catch (error) {

        // Delete newly uploaded image if update fails
        if (req.file) {
            deleteUploadedFiles("pets", req.file.filename);
        }

        res.status(400).json({
            status: "error",
            message: `Error in updating pet: ${error.message}`,
        });
    }
};


// DELETE PET
const deletePet = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);

        if (!deletedPet) {
            return res.status(404).json({
                status: "error",
                message: "Pet not found",
            });
        }

        // Delete pet image from uploads
        if (deletedPet.imageUrl) {
            deleteUploadedFiles("pets", deletedPet.imageUrl);
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