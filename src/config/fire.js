import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoim5-2wgtKCpnMAuWly7vl65ec5pWdVI",
    authDomain: "Vegan-c7914.firebaseapp.com",
    databaseURL: "https://Vegan-c7914.firebaseio.com",
    projectId: "Vegan-c7914",
    storageBucket: "Vegan-c7914.appspot.com",
    messagingSenderId: "313220043968",
    appId: "1:313220043968:web:48a0a9d1a71cddafa64925",
    measurementId: "G-HH4F39LRVK"
  };


  const fire  = firebase.initializeApp(firebaseConfig)

  
  export default fire
  