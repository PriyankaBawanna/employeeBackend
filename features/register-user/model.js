import mongoose from "mongoose";
const EmployeeDetails = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});
const EmployeeDetail = mongoose.model("EmployeeDetails", EmployeeDetails);
export default EmployeeDetail;
