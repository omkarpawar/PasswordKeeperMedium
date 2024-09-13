import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";
import EditModal from "./EditModal";

const PasswordList=()=>{

  const {postList,deletePassword}=useContext(PostList)
  const [editForm,setEditForm]=useState(false)
  const [selectedPost ,setselectedPost]=useState(null)
  const [selectedId,setSelectedId]=useState(null)


  const editButtonHandler=(post,id)=>{ 
    console.log(post,id)
    setSelectedId(id);
    setselectedPost(post);
    setEditForm(true);
    
  }

 

  return(
    <div>
      <h3>All Passwords:</h3>

      <ul class="list-group list">
        {postList.map((post,id)=>
        post &&(<li key={post.id} class="list-group-item listGroup">
          {post.username}{post.password}
          <div className="buttons">
            <button type="button" class="btn btn-danger" onClick={()=>{deletePassword(id)}}>Delete</button>
            <button type="button" class="btn btn-primary"onClick={()=>editButtonHandler(post,id)} >Edit</button>
          </div>  
        </li>)
        )}
      </ul>
      {editForm &&( 
        <EditModal 
          setEditForm={setEditForm} 
          post={selectedPost} 
          id={selectedId}
          />
          
        )}
    </div>
  )
}
export default PasswordList;