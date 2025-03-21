import Book from "../model/Books.model.js";

export const getbook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
