const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
            minlength: [2, "First name must be at least 2 characters"],
            maxlength: [50, "First name cannot exceed 50 characters"],
        },

        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
            minlength: [2, "Last name must be at least 2 characters"],
            maxlength: [50, "Last name cannot exceed 50 characters"],
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: [true, "Email is required"],
            unique: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email"],
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false,
        },

        role: {
            type: String,
            enum: {
                values: ["user", "admin"],
                message: "Role must be user or admin",
            },
            default: "user",
        },

        phone: {
            type: String,
            trim: true,
            match: [/^\+?[0-9]{10,15}$/, "Invalid Phone number"],
        },

        imageUrl: {
            type: String,
            trim: true,
            default: "default-user.png",
        },

        adoptedPets: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Pet",
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;