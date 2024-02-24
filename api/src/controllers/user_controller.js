const User = require("../model/user_model");
const cloudinary = require("cloudinary").v2;

// ! Configure Cloudinary
cloudinary.config({
  cloud_name: "divedztco",
  api_key: "871532557371698",
  api_secret: "iAjAJJzwO6BnxgD9OGk7KxryTuk",
});

const register_user = async (req, res) => {
  try {
    // ! Check if email already exists
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
      return res
        .status(200)
        .json({ success: false, msg: "This email already exists" });
    }

    // ! Upload image to Cloudinary
    const imageFile = req.files.image;
    const result = await cloudinary.uploader.upload(imageFile.tempFilePath);

    // ! Create new user instance
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      image: result.url,
    });

    // ! Save user to the database
    const user_data = await user.save();
    res.status(201).json({ success: true, data: user_data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  register_user,
};
