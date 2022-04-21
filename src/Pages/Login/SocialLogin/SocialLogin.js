import React from "react";
import google from "../../../Img/logo/google.svg";
import facebook from "../../../Img/logo/facebook.png";
import github from "../../../Img/logo/GitHub.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <div className="mx-1 mb-1">or</div>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="my-3">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-success d-block mx-auto  my-3 w-50"
        >
          <img className="img-fuild " src={google} alt="" /> Google Sign In
        </button>
        <button className="btn btn-primary d-block mx-auto my-3 w-50">
          <img
            style={{ width: "25px" }}
            className="img-fuild me-2 my-1"
            src={facebook}
            alt=""
          />
          Facebook Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark d-block mx-auto w-50"
        >
          <img
            style={{ width: "25px" }}
            className="img-fuild me-2 my-1"
            src={github}
            alt=""
          />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
