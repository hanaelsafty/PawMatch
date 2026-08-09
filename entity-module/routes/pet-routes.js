const express = require("express");
const Pet = require("../models/pet-model");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const pet = await Pet.create(req.body);

        res.status(201).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const pets = await Pet.find();

        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;