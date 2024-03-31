const { mongoose } = require("mongoose");
const User = require("../models/User");

//***CreateUser*****//
exports.createUser = async (req, res) => {
    try {

        const { Name, Email, Phone, Age } = req.body;

        const saveUser = await new User({
            Name: Name,
            Email: Email,
            Phone: Phone,
            Age: Age,
        })

        const user = saveUser.save();

        if (!user) {
            return res.status(400).json({ success: false, message: "Failed to create user" })
        }


        return res.status(200).json({ success: true, message: "User created successfully!", data: saveUser })


    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong!", error: error })
    }
}

//****GetUsers*****//
exports.getUsers = async (req, res) => {
    try {

        const users = await User.find();

        if (!users) {
            return res.status(400).json({ success: false, message: "No users found!", data: [] })
        }

        return res.status(200).json({ success: true, message: "Users found!", data: users })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong!", error: error })
    }
}

//****getSingleUser*****//
exports.getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "No User Id Found!" })

        }

        const getUser = await User.findById(id);

        if (!getUser) {
            return res.status(400).json({ success: false, message: "No User Found with Id", data: [] })
        }

        return res.status(200).json({ success: true, message: "User Record Found!", data: getUser })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong!", error: error })
    }
}

//****deleteUser*****//
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "No User Id Found!" })

        }

        const getUser = await User.findById(id);

        if (!getUser) {
            return res.status(400).json({ success: false, message: "No User Found with Id"})
        }


        const deleteUser = await User.deleteOne({_id:id})


        return res.status(200).json({ success: true, message: "User Deleted Successfully!"})

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong!", error: error })
    }
}

//****updateUser*****//
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "No User Id Found!" })

        }

        const getUser = await User.findById(id);

        if (!getUser) {
            return res.status(400).json({ success: false, message: "No User Found with Id"})
        }


        const updateUser = await getUser.set(req.body);
        const saveUser = updateUser.save();
        return res.status(200).json({ success: true, message: "User Updated Successfully!"})

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong!", error: error })
    }
}