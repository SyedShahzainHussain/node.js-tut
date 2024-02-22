// ! conect mongodb

const dataConnec = require("./mongodb");

// async function getData() {
//   let data = await dataConnect();
//   data = await data.find().toArray();
//   console.log(data);
// }

// getData();

function getData() {
  dataConnec().then((data) => {
    data
      .find({name:"syed"})
      .toArray()
      .then((data) => {
        console.log(data);
      });
  });
}

getData();
