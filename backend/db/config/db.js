const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
};

module.exports = connectDb;
