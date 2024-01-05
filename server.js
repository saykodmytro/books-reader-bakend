const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Dmytro:zCK1EBuXxgOdlX1L@cluster0.o4hocu8.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Serv Start");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
