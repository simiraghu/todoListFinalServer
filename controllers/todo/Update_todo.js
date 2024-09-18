const Todo_schema = require('../../models/Todo_schema')

module.exports = async (req, res) => {

    try {

        const { id } = req?.params
        const update_data = req?.body;

        const todo = await Todo_schema.findByIdAndUpdate(id, update_data, { new: true })

        return res.status(200).json(
            {
                success: true,
                message: "sucessfully updated",
                todo
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