import * as React from "react";
import firebase from "firebase";
import { auth } from "../firebase";

const useAuth = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [profile, setProfile] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setProfile(user);
      } else {
        setProfile(null);
      }

      setIsLoading(false);
    });

    // Unsubscribe to the listener when unmounting
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isLoading,
    isLoggedIn: !!profile,
    profile,
  };
};

export default useAuth;
