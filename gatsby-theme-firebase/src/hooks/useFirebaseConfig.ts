import { graphql, useStaticQuery } from "gatsby";

interface Query {
  firebaseConfig: {
    loginPath: string | null;
    socialLogins: string[];
  };
}

const useFirebaseConfig = () => {
  const data = useStaticQuery<Query>(
    graphql`
      query {
        firebaseConfig(id: { eq: "gatsby-theme-firebase-config" }) {
          loginPath
          socialLogins
        }
      }
    `,
  );
  return data.firebaseConfig;
};

export default useFirebaseConfig;
