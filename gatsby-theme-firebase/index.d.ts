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
export { default as useFirestoreDoc } from "./src/hooks/useFirestoreDoc";
export { default as useFirestoreQuery } from "./src/hooks/useFirestoreQuery";

export { default as FormState } from "./src/containers/FormState";
export { default as Form } from "./src/components/Form";
export { default as SocialLogins } from "./src/components/SocialLogins";

export { default as theme } from "./src/gatsby-plugin-theme-ui";
