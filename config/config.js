const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    process.exit(1);
  }
};

//export
module.exports = connectDb;
