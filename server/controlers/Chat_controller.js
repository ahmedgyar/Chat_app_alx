const chatModel = require("../models/Chat_model");

const createChat = async(req, res) => {
    const { firstId, secondId } = req.body;
    try {
        // Check if a chat already exists between these two users
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] }
        });

        // If chat exists, return it
        if (chat) return res.status(200).json(chat);

        // If not, create a new chat
        const newChat = new chatModel({
            members: [firstId, secondId] // Store as an array of IDs
        });

        const response = await newChat.save();

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findUserChat = async(req, res) => {
    const userId = req.params.userId;

    try {
        // Find all chats that include the userId in the members array
        const chats = await chatModel.find({
            members: { $in: [userId] }
        });
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findChat = async(req, res) => {
    const { firstId, secondId } = req.params;

    try {
        // Find a chat that contains both user IDs
        const chat = await chatModel.findOne({
            members: { $all: [firstId, secondId] }
        });
        res.status(200).json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { createChat, findChat, findUserChat };