const UserModel = require('../models/user.model');
const objID = require('mongoose').Types.ObjectId;

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

module.exports.user = async (req, res) => {
    console.log(req.params)


    if (!objID.isValid(req.params.id))
        return res.status(400).send("ID inconnu : " + req.params.id);

    try {
        const user = await UserModel.findById(req.params.id).select('-password');
        res.send(user);
    } catch (error) {
        console.log("ID inconnu : ", req.params.id);
        res.status(500).send("Erreur lors de la recherche de l'utilisateur");
    }
}