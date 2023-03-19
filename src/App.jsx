import { initializeApp} from 'firebase/app';
import { getDatabase, ref, push, onValue,remove } from 'firebase/database';
import { HomePage } from './components/HomePage';
import { useEffect, useState } from 'react';
 

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

  const [allItems,setAllItems] = useState([]);

  function dbPush(item){
    push(shoppingListInDb,item);
  }

  function dbRemove(id){
    const location = ref(db,`shoppingList/${id}`);
    console.log("rem01Run");
    remove(location);
    console.log('rem02Run');
  }
  
  useEffect(
    ()=>{
      return onValue(shoppingListInDb,(s)=>{
        if(s.val()){
          const data = Object.entries(s.val());
          setAllItems(data)
        }else{
          setAllItems([]);
        }
        });

    },[]
  );


  return (
    <div className="App">
      <HomePage
        addToList = {dbPush}
        allItems = { allItems }
        removeFromList = {dbRemove}
        
      />
    </div>
       
  )
}

export default App
