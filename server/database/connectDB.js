import mongoose from "mongoose";


const Connections = async (password) => {
  try {
    await mongoose.connect(
      process.env.DATABASE.replace("<PASSWORD>", password),
      () => {
        console.log("Database is Connected");
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

export default Connections;