import mongoose from "mongoose";
const bookScheme = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const Book = mongoose.model("Book", bookScheme);

export default Book;
