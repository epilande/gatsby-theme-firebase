declare module "react" {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

export { default as firebase, auth, firestore } from "./src/firebase";
export {
  githubProvider,
  googleProvider,
  twitterProvider,
} from "./src/firebase/auth";
export { default as useAuth } from "./src/hooks/useAuth";
