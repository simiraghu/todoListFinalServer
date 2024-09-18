const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Todo_schema = new Schema(
    {
        status: {
            type: String,
            default: "saved"
        },

        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        tags: {
            type: String,
            required: true
        }

    }, { timestamps: true }
)

module.exports = mongoose.model('Todo', Todo_schema)