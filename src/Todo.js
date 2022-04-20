import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { db } from './FirebaseConfig';
import { 
   deleteDoc, doc
} from 'firebase/firestore';
import { DeleteRounded } from '@mui/icons-material';
import './index.css'

const Todo = (props) => {
  return (
    <div>
        <List className='todo-list'>
            <ListItem >
                <ListItemText  primary={props.todo.todo} secondary={props.text} />
            </ListItem>
            <DeleteRounded  id="delete" onClick={event => deleteDoc(doc(db, 'todos', props.todo.id))} />
            {/* <Button onClick={event => deleteDoc(doc(db, 'todos', props.todo.id))}>Delete Me</Button> */}
        </List>
        
    </div>
    
  )
}

export default Todo