import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
  BANK: String,
  IFSC: {
    type: String,
    unique: true,
  },
  BRANCH: String,
  ADDRESS: String,
  CONTACT: String,
  CITY: String,
  DISTRICT: String,
  STATE: String,
});


export const BankDetail = mongoose.model("Bank", BankSchema)