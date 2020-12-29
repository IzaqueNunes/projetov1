import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAT0cQob-JUv_7L69sVACYBcSa3nlIPYsI",
    authDomain: "projetoqueijo-f22a6.firebaseapp.com",
    databaseURL: "https://projetoqueijo-f22a6.firebaseio.com",
    projectId: "projetoqueijo-f22a6",
    storageBucket: "projetoqueijo-f22a6.appspot.com",
    messagingSenderId: "433812826245",
    appId: "1:433812826245:web:cf22d9db0c26646f9f21ec",
    measurementId: "G-DY6L14HNDT"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  const storage = firebase.storage();

  export {storage, firebase as default};