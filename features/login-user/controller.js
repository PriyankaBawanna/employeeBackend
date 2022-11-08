import EmployeeDetail from "../register-user/model.js";
export const loginEmployee = async (req, res) => {
  var { role, email, password } = req.body;

  EmployeeDetail.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log("user email is match ");
      switch (role) {
        case "Admin":
          console.log("Admin section ", email, password);

          if (user) {
            if (
              user.role === "Admin" &&
              password === user.password &&
              email === user.email
            ) {
              console.log("email password And role everything are match ");
              res.send(true);
            } else {
              console.log("One thing Is not Match ");
              res.send(false);
            }
          }

          break;
        case "HR":
          console.log("HR section ", email, password);

          if (user) {
            if (
              role === user.role &&
              password === user.password &&
              email === user.email
            ) {
              console.log(
                "email password And role everything are match ",
                user.role
              );
              res.send(true);
            } else {
              console.log("One thing Is not Match ");
              res.send({ message: "Please Check your Credentials " });
            }
          }

          break;

        case "Manger":
          console.log("Manger section ", email, password);

          if (user) {
            if (
              role === user.role &&
              password === user.password &&
              email === user.email
            ) {
              console.log(
                "email password And role everything are match ",
                user.role
              );
              res.send(true);
            } else {
              console.log("One thing Is not Match ", user.role);
              res.send({ message: "Please Check your Credentials " });
            }
          }

          break;

        default:
          console.log("No User Found ");
      }
    } else {
      console.log("No User email Match ");
      res.send({ message: "Please Check your Credentials " });
    }
  });
};
