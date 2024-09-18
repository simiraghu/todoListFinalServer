const Todo_schema = require('../../models/Todo_schema');

module.exports = async (req, res) => {
    try {
        const { id } = req?.params

        const get_todo_by_id = await Todo_schema.findOne(
            {
                _id: id,
                status: {
                    $ne: 'deleted'
                }
            }
        )

        return res.status(200).json(
            {
                success: true,
                messsage: "successfully get todo",
                get_todo_by_id
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