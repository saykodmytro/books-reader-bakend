const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Dmytro:zCK1EBuXxgOdlX1L@cluster0.o4hocu8.mongodb.net/books_reader?retryWrites=true&w=majority";

const app = require("./app");

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
