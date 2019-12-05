const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  plugins: [
    "gatsby-theme-gallery",
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: "/login",
        socialLogins: ["google", "github", "facebook"],
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-140749529-2",
      },
    },
  ],
};
