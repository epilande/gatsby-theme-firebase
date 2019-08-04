<div align="center">
  <img width="320" src="https://raw.githubusercontent.com/epilande/gatsby-theme-firebase/master/demo/src/GatsbyFirebase.svg?sanitize=true">
  <h1>gatsby-theme-firebase 🔥</h1>
</div>

 <p align="center">
  <strong>A Gatsby Theme for adding Firebase to your application.</strong>
</p>

## Installation

```sh
$ npm install --save gatsby-theme-firebase
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
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
      },
    },
  ],
};
```
