const dataConnect = require("./mongodb");

const insert = async () => {
  let data = await dataConnect();
  let resposne = await data.insertMany([
    {
      name: "hussain",
      age: 12,
      },
      {
        name: "ali",
        age: 20,
      },
  ]);
  console.log(resposne);
};

insert();
