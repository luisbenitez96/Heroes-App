import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();
  const OnLogin = () => {
    navigate("/marvel", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={OnLogin}>
        Login
      </button>
    </div>
  );
};
