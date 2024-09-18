const Todo_schema = require('../../models/Todo_schema');

module.exports = async (req, res) => {
    try {

        const todos = await Todo_schema.find(
            {
                userId: req?.userId,
                status: { $ne: 'deleted' }
            }
        )

        console.log(req?.userId)
        return res.status(200).json(
            {
                success: true,
                message: "successfully get todos",
                todos
            }
        )

    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: error?.message
            }
        )
    }
}