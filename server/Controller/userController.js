const User = require("../Models/userModel");

//CREATE

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

//UPDATE
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET PRODUCT
exports.getUser = async (req, res) => {
    try {
        const product = await User.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET ALL PRODUCTS
exports.getAllUser = async (req, res) => {
  
    try {
          const products = await User.find()
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
}