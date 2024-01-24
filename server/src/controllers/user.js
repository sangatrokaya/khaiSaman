const User = require('../models/user')
const registerNewUser = async (req, res) => {
    try {
        const userDetail = await User.findOne({ phoneNumber: req.body.phoneNumber })
        if (userDetail) {
            res.status(403).json({ msg: "Phone number already registered" })
        } else {
            await User.create(req.body)
            res.json({
                msg: "User registered successfully"
            })
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = { registerNewUser }