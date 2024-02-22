const dataConnect = require("./mongodb");


const deleted = async () => {
    let result = await dataConnect();
    let response = await result.deleteMany({ })
    console.log(response);
}

deleted();