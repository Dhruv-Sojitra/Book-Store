import React from "react";
import Book from "../../public/Banner.jpg";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto flex flex-col md:px-5 px-4 md:flex-row my-15">
        <div className="w-full order-2 md:order-1  md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quasi accusantium nisi sapiente sequi exercitationem dignissimos,
              provident asperiores voluptatibus possimus numquam harum
              blanditiis illo in quis optio amet voluptates dolor.
            </p>
          </div>
          {/* Email Box at Home page */}
          <div className="flex space-x-4 mt-12">
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary w-25 mt-4">Enter</button>
        </div>
        <div className=" w-full order-1 md:w-1/2">
          <img src={Book} alt="Book" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Banner;
