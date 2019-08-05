import firebase from "./index";

export const githubProvider = (scope = "repo:status") => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope(scope);
  return provider;
};

export const googleProvider = () => {
  return new firebase.auth.GoogleAuthProvider();
};

export const twitterProvider = () => {
  return new firebase.auth.TwitterAuthProvider();
};
