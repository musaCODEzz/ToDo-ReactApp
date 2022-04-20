
import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input  } from '@mui/material';
import Todo from './Todo';
import { db } from './FirebaseConfig';
import {
  collection, onSnapshot, addDoc, serverTimestamp, orderBy, query
} from 'firebase/firestore';





function App() {


  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  



  // as the app loads we neeed to listen to the database and fetch new todos as they get added

  useEffect(() => {
   /// the code fired when app.js loads

   const colRef = collection(db, 'todos');
   const q = query(colRef, orderBy("timestamp", "asc"));

    // listen to the collection and fetch new todos as they get added to the database

   onSnapshot(q, snapshot => {
      //console.log(snapshot.docs);
      setTodos(snapshot.docs.map(doc =>({id:doc.id, todo: doc.data().todo}) ))
   })

  }, []);


  const addTodo = (event) => {
    //console.log("The button is working");
    event.preventDefault();

    const colRef = collection(db, 'todos');
   

    // colRef.addDoc({
    //   todo: input
    // })
    addDoc(colRef, {
        todo: input,
        timestamp: serverTimestamp()
     })
    

    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Creating a TODO List</h1>
      
      <form>
            {/* <input type= "text"  value={input} onChange={e => setInput(e.target.value)}/> */}
            <FormControl>
                  <InputLabel >Write a TODO</InputLabel>
                  <Input value={input} onChange={e => setInput(e.target.value)} />
                  
            </FormControl>
            <Button disabled={!input} variant="outlined"  type="submit"onClick={addTodo} >Add Task</Button>
            {/* <button type="submit" onClick={addTodo}>Add Task</button> */}
      </form>

      
      <ul>
        {todos.map(todo => (
          // <li>{todo}</li>
          <Todo todo={todo} />
        ))}
        
      </ul>
      
    </div>
  );
}

export default App;
