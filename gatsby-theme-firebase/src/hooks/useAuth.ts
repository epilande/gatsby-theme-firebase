import * as React from "react";
import firebase from "firebase";
import { auth } from "../firebase";

const useAuth = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [profile, setProfile] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setProfile(user);
        setIsLoggedIn(true);
      } else {
        setProfile(null);
        setIsLoggedIn(false);
      }

      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    isLoggedIn,
    profile,
  };
};

export default useAuth;
