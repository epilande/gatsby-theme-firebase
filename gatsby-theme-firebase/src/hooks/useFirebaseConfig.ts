import { graphql, useStaticQuery } from "gatsby";

interface Query {
  firebaseConfig: {
    loginPath: string | null;
    loginRedirectPath: string;
    socialLogins: string[];
  };
}

const useFirebaseConfig = () => {
  const data = useStaticQuery<Query>(
    graphql`
      query {
        firebaseConfig(id: { eq: "gatsby-theme-firebase-config" }) {
          loginPath
          loginRedirectPath
          socialLogins
        }
      }
    `,
  );
  return data.firebaseConfig;
};

export default useFirebaseConfig;
