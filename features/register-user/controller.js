import EmployeeDetail from "./model.js";

export const addEmployee = function (req, res) {
  const { name, email, age, pincode, role, gender, password } = req.body;
  EmployeeDetail.findOne({ email: email }, (error, employee) => {
    if (employee) {
      console.log("user already Present ");
      res.send({ message: "user already Present" });
    } else {
      const employee = new EmployeeDetail({
        name,
        email,
        gender,
        pincode,
        age,
        role,
        password,
      });
      employee.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send({ message: "successfully Register" });
        }
      });
    }
  });
};
