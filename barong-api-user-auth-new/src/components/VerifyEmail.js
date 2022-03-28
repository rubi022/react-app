import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const VerifyEmail = ({ user }) => {
  useEffect(() => {
    if (user) {
      toast.success("Succesfully Registered! Please verify email.", {
        position: "top-center",
      });
    } else {
      toast.error("Please login first", {
        position: "top-center",
      });
    }

    // const getIteminfo = localStorage.getItem('user-info')
    // console.log(getIteminfo)
  });

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="verify-email-div">
      <div className="col-sm-4 offset-sm-4 ">
        <h3>Verify email</h3>
        <button className="btn btn-info"> Verify</button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default VerifyEmail;
