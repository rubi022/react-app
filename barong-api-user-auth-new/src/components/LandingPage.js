import { Navigate } from "react-router-dom";

const LandingPage = ({ user }) => {
  //   const userDetails = JSON.parse(localStorage.getItem("user-info"));
  if (!user) return <Navigate to="/login" />;
  return (
    <div className="landing-div">
      <h3>Landing page</h3>
    </div>
  );
};

export default LandingPage;
