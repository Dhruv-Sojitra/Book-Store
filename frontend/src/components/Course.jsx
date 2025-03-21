import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getbook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-4">
        <div className="mt-16 items-center text-center justify-center">
          <h1 className="p-10 md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse sequi nobis harum cupiditate voluptates aliquid quos, cumque,
            omnis repudiandae repellat at distinctio saepe sunt enim debitis
            tempore blanditiis optio?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tenetur quo explicabo, eos magnam maiores, aperiam
            dolorum asperiores id ad a nostrum commodi quidem laudantium nisi
            eaque! Culpa cumque velit voluptatum!
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md px-4 py-2 mt-5 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 p-10">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
