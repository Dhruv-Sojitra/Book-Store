import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      <div className="signup flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box opacity-100">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 border rounded-md px-3 py-1 outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 border rounded-md px-3 py-1 outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 border rounded-md px-3 py-1 outline-none"
              />
            </div>
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 border rounded-md hover:bg-pink-900 px-3 py-1">
                SignUp
              </button>
              <p className="text-xl">
                Have account?
                <button
                  to="/"
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
