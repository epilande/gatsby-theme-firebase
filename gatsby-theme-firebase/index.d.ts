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

export { default as Form } from "./src/components/Form";
export { default as FormState } from "./src/containers/FormState";

export { default as theme } from "./src/gatsby-plugin-theme-ui";
