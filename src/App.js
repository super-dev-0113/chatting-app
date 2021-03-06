import React from 'react';
import Routes from './routes/';

//Import Scss
import themeDark from "./assets/scss/themes-dark.scss";
// import themeLight from  "./assets/scss/themes-light.scss";

import "./assets/scss/theme/index.scss"

//fackbackend
import fakeBackend from './helpers/fake-backend';

// //Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase";


import ThemeSetter from "./ThemeSetter";

import ThemeProvider from "./Contexts/ThemeProvider";
// TODO
fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };
  
// // init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
    
  );
}

export default App;
