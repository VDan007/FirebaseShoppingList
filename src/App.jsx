import { initializeApp} from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { HomePage } from './components/HomePage';
import { useEffect } from 'react';
 

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyA7XJCIHCwF_NY8df7YmYV0pcYvkifzxWg",
    authDomain: "shoppingcart-6634d.firebaseapp.com",
    databaseURL: "https://shoppingcart-6634d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shoppingcart-6634d",
    storageBucket: "shoppingcart-6634d.appspot.com",
    messagingSenderId: "652281085381",
    appId: "1:652281085381:web:3ca50c1fe66dfd43811fac"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const shoppingListInDb = ref(db,'shoppingList');

  function dbPush(item){
    push(shoppingListInDb,item);
  }
  
  useEffect(
    ()=>{
     return onValue(shoppingListInDb,(s)=>{
     const data = s.val()
     console.log(data)})

    },[]
  );


  return (
    <div className="App">
      <HomePage
        addToList = {dbPush}
      />
    </div>
       
  )
}

export default App
