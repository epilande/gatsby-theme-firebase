import firebase from "../index";

export const githubProvider = () => {
  return new firebase.auth.GithubAuthProvider();
};

export const googleProvider = () => {
  return new firebase.auth.GoogleAuthProvider();
};

export const twitterProvider = () => {
  return new firebase.auth.TwitterAuthProvider();
};

export const facebookProvider = () => {
  return new firebase.auth.FacebookAuthProvider();
};
