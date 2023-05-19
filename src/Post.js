import {db} from './firebase.js'
import {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';

function Post(props){

  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp', 'desc').onSnapshot(function(snapshot){
      setComentarios(snapshot.docs.map(function(document){
        return {id: document.id, info:document.data()}
      }))
    })
  }, [])

    function comentar(id, e){
        e.preventDefault()

        let comentarioAtual = document.querySelector('#comentario-'+id).value

        db.collection('posts').doc(id).collection('comentarios').add({
          nome: props.user,
          comentario: comentarioAtual,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        alert('Comentário realizado')

        document.querySelector('#comentario-'+id).value = ""

      }

    return(
        <div className='postSingle'>
              <p> <b>{props.info.userName}</b> {props.info.titulo} </p>
              <img src= {props.info.image}></img>

              <div className='coments'>

                {
                  comentarios.map(function(val){
                      return(
                        <div className='coment-single'> 
                          <p>  <b>{val.info.nome}:</b> {val.info.comentario}</p>
                        </div>
                      )
                  })
                }

              </div>
              
                {
                  (props.user)?
                  <form className='form-comentario' onSubmit={(e) =>comentar(props.id,e)}>
                  <input type='text' placeholder='Comente...' id={"comentario-"+props.id}></input>
                  <input type='submit' placeholder='Enviar'></input>
                  </form>
                  :
                  <div></div>
                }
              </div>
              
    )
}

export default Post;