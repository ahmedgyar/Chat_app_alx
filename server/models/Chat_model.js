const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    members: {
        type: [String], // Ensure that only an array of strings (user IDs) is stored
        required: true, // Makes it required to have members in a chat
    },
}, {
    timestamps: true,
});

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;