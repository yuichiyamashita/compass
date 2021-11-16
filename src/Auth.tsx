import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./app/store";
import { userAuthSelector } from "./Selectors";
import { fetchAuthState } from "./operation/userAuth";

const Auth: React.FC = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const userState = useSelector(userAuthSelector);
  const isSignedIn = userState.isSignedIn;

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(fetchAuthState());
    }
  }, [isSignedIn, dispatch]);

  return <>{isSignedIn ? <>{children}</> : <></>}</>;
};

export default Auth;
