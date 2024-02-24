// ! conect mongodb

const dataConnect = require("./mongodb");

// async function getData() {
//   let data = await dataConnect();
//   data = await data.find().toArray();
//   console.log(data);
// }

// getData();

function getData() {
  dataConnect().then((data) => {
    data
      .find({name:"syed"})
      .toArray()
      .then((data) => {
        console.log(data);
      });
  });
}

getData();
