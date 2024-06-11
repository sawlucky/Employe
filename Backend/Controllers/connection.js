const UserSchema = require("../models/user");

const insertdata = async (req, res) => {
  try {
    const user = new UserSchema(req.body);
    console.log(user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.json({ message: "shah lucky" });
    // res.status(500).send({ message: "error.message" });
  }
};

module.exports = { insertdata };
