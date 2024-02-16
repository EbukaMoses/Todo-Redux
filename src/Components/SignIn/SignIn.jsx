import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppProvider } from "../AppContext/AppContext";

const SignIn = () => {
  const [username, updateUsername] = useContext(AppProvider);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    updateUsername(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    // navigate to home component
    navigate("/home");
  };

  return (
    <div className="sigin">
      <h1>Please sign in</h1>
        <form action="" onSubmit={handleSignin}>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={(e)=>handleNameChange(e)} required/><br />
            <button type="submit">Sign In</button>
        </form>
    </div>
  );
};

export default SignIn;
