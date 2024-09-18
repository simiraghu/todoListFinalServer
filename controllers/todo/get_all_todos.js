const Todo_schema = require('../../models/Todo_schema');

module.exports = async (req, res) => {
    let success = false;
    try {

        const all_todos = await Todo_schema.find(
            {
                status: {
                    $ne: "deleted"
                }
            }
        )

        return res.status(200).json(
            {
                success:true,
                message:"successfully get",
                all_todos
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