const mongoose = require("mongoose");

const main = async () => {
  mongoose.connect("mongodb://localhost:27017/shahzain").then((_) => {
    console.log("connection created");
  });

  var userSchemas = new mongoose.Schema({
    name: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 1) {
          throw new Error("The value should not be 0");
        }
      },
    },
  },);
  const userModels = new mongoose.model("shahzaindata", userSchemas);

  const saveInDb = async () => {
    try {
      let user = new userModels({ name: -1 });

      let result = await userModels.insertMany(user);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  saveInDb();

  const updateinDb = async () => {
    try {
      //   let user = new userModels({ name: "hussain" });
      //   let user1 = new userModels({ name: "shahzain" });
      //   let user2 = new userModels({ name: "arham" });
      let result = await userModels.findByIdAndUpdate(
        { _id: "65d7353d8545394a8a46edbf" },
        { $set: { name: "shahzainhussain" } },
        { new: true }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // updateinDb();

  const readinDb = async () => {
    try {
      let result = await userModels
        .find({ name: "hussain" })
        .select({ name: 1 });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  //   readinDb();

  const deleteinDb = async (_id) => {
    const data = await userModels.deleteOne({ _id });
    console.log(data);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  //   deleteinDb("65d7353d8545394a8a46edbf");
};

main();
