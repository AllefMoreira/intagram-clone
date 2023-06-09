import './App.css';
import {auth, db} from './firebase.js'
import {useEffect, useState} from 'react';
import Header from './Header'
import Post from './Post'

function App() {
  const[user, setUser] = useState()

  const[posts, setPosts] = useState([]) 

    useEffect(() =>{

      auth.onAuthStateChanged(function(val){
        if(val != null){
          setUser(val.displayName)
        }
        
      })

      //atualiza a aplicação conforme o post
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(function(snapshot){
        setPosts(snapshot.docs.map(function(document){
          return {id: document.id, info:document.data()}
        }))
      })

    }, [])

  return (

    <div className="App">
      {/* Chamando o Header do nosso projeto */}
      <Header setUser={setUser} user = {user}></Header>

      {
        posts.map(function(val){
          return(
            <Post user={user} info={val.info} id={val.id}/>
        )
        })
      }
    </div>
  );
}

export default App;
