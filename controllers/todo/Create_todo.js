const Todo_schema = require("../../models/Todo_schema");
const JWT = require('jsonwebtoken')

module.exports = async (req, res) => {
    let success = false;
    try {

        const { title, description, tags } = req?.body;
        const token = req?.header('token')

        if (!token) {
            return res.status(400).json(
                {
                    success,
                    message: "Invalid authentication"
                }
            )
        }
        
        const auth_token = await JWT.verify(token, process.env.JWT_SECRET_KEY)

        if (!auth_token) {
            return res.status(400).json(
                {
                    success,
                    message: "Invalid credential"
                }
            )
        }

        if (!title) {
            return res.status(400).json(
                {
                    success,
                    message: "Title required"
                }
            )
        }

        if (!description) {
            return res.status(400).json(
                {
                    success,
                    message: "Description required"
                }
            )
        }

        if (!tags) {
            return res.status(400).json(
                {
                    success,
                    message: "Tags required"
                }
            )
        }

        const todo = await Todo_schema.create(
            {
                title,
                description,
                tags,
                userId: auth_token?.userId
            }
        )

        return res.status(200).json(
            {
                success: true,
                message: "Todo created successfully",
                todo
            }
        )

    } catch (error) {
        return res.status(400).json(
            {
                success,
                message: error.message
            }
        )
    }
}