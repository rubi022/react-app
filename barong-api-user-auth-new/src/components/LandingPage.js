import { Navigate } from "react-router-dom";

const LandingPage = ({ user }) => {
  //   const userDetails = JSON.parse(localStorage.getItem("user-info"));
  if (!user) return <Navigate to="/login" />;

  const { email, state, role, uid } = user;

  return (
    <div className="landing-div" style={{ textAlign: "center" }}>
      <h3>Landing page</h3>
      <br />
      <h3>User Email: {email}</h3>
      <h3>User UID: {uid}</h3>
      <h3>State: {state}</h3>
      <h3>Role: {role}</h3>
    </div>
  );
};

export default LandingPage;
