const dataConnect = require("./mongodb");

async function getData() {
  let data = await dataConnect();
  let response = await data.updateMany(
    {
      name: "hussain",
    },
    { $set: { name: "shahzain" } }
  );
  console.log(response);
}

getData();
