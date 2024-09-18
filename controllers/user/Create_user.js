const User_schema = require('../../models/User_schema');
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {

    let success = false;

    try {
        const { username, email, password } = req?.body;

        if (!username) {
            return res.status(400).json(
                {
                    success,
                    message: "User name required"
                }
            )
        }

        const user_exists = await User_schema.findOne({ email })

        if (user_exists) {
            return res.status(400).json(
                {
                    success,
                    message: "This user is already exists"
                }
            )
        }

        if (!email) {
            return res.status(400).json(
                {
                    success,
                    message: "Email required"
                }
            )
        }

        const hash_password = await bcrypt.hash(password, 10)

        if (!password) {
            return res.status(400).json(
                {
                    success,
                    message: "Password required"
                }
            )
        }

        const user = await User_schema.create(
            {
                username,
                email,
                password: hash_password
            }
        )

        return res.status(200).json(
            {
                success: true,
                message: "successfully created user",
                user
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