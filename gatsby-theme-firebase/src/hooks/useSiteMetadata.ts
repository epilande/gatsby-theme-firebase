import { graphql, useStaticQuery } from "gatsby";

interface Query {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return data.site.siteMetadata;
};

export default useSiteMetadata;
