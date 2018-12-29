const Rebase = require('re-base')
const firebase = require('firebase')


  const config = {
    apiKey: "AIzaSyASaaFuMUcZNUDUw1q6ZtTxlZp3t6G2ehs",
    authDomain: "meu-app-d6e18.firebaseapp.com",
    databaseURL: "https://meu-app-d6e18.firebaseio.com",
    projectId: "meu-app-d6e18",
    storageBucket: "meu-app-d6e18.appspot.com",
    messagingSenderId: "116853641327"
  
  }
  
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  export const storage = app.storage()
  export const auth = app.auth()

export default base





