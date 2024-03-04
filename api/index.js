const port =  8000;
const express = require("express");

require("./db/index");
const app = express();
const user_route = require("./src/routes/user_route");

app.use("/", user_route);

app.listen(port, () => {
  console.log("your server is listen this port " + port);
});

// const User = require("./src/model/user_model");
// const jwt = require("jsonwebtoken");
// const jwtKey = "hellosworld";

// app.post("/upload", async (req, res) => {
//   const files = req.files.image;

//   const fileList = Array.isArray(files) ? files : [files];

//   const uploadResponses = await Promise.all(
//     fileList.map(async (file) => {
//       try {
//         const result = await cloudinary.uploader.upload(file.tempFilePath);
//         return result.url;
//       } catch (error) {
//         console.error("Error uploading file to Cloudinary:", error);
//         return null;
//       }
//     })
//   );

//   res.json(uploadResponses);
// });

// app.use(express.json());

// app.post("/register", async (req, res) => {
//   const userData = req.body;

//   try {
//     const existingUser = await User.findOne({
//       $or: [
//         {
//           email: userData.email,
//         },
//       ],
//     });
//     if (existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     }

//     if (userData.password == userData.confirmPassword) {
//       const user = new User(userData);
//       let response = await user.save();
//       response = response.toObject();
//       delete response.password;
//       jwt.sign({ response }, jwtKey, { expiresIn: "1h" }, (error, token) => {
//         if (error) {
//           res.status(500).json({ error: "Something went wrong" });
//         } else {
//           res.status(201).json({ response, token });
//         }
//       });
//     } else {
//       res.status(400).json({ error: "Passwords do not match" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: "Bad Request " });
//   }
// });
