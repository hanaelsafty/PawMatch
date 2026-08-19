const User = require("../models/user-model");
const Pet = require("../models/pet-model");

const addPetToUser = async (req, res) => {
    try {
        const { petId } = req.body;

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            });
        }

        const pet = await Pet.findById(petId);

        if (!pet) {
            return res.status(404).json({
                status: "fail",
                message: "Pet not found"
            });
        }

        const alreadyExist = user.adoptedPets.some(
            (id) => id.toString() === petId
        );

        if (alreadyExist) {
            return res.status(400).json({
                status: "fail",
                message: "Pet already added"
            });
        }

        user.adoptedPets.push(petId);

        await user.save();

        return res.status(200).json({
            status: "success",
            message: "Pet added successfully",
            data: {
                adoptedPets: user.adoptedPets
            }
        });

    } catch (err) {
        return res.status(500).json({
            status: "error",
            message: `Error in adding pet: ${err.message}`
        });
    }
};

const getUserPets = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
            .populate("adoptedPets");

        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            });
        }

        return res.status(200).json({
            status: "success",
            data: {
                adoptedPets: user.adoptedPets
            }
        });

    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: `Error in fetching your pets: ${err.message}`
        });
    }
};

module.exports = {
    addPetToUser,
    getUserPets
};