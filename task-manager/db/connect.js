const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://akash:uWwJbfoSukkJD3c8@cluster0.ikpaltn.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO THE DATABASE..."))
  .catch((err) => console.log(err));
