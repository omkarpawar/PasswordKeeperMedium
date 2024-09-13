import { useContext,useState } from "react";
import { PostList } from "../store/post-list-store";
import ReactDOM from "react-dom";


const EditModal=({setEditForm,post,id})=>{
  console.log(post,id)
  const {editPassword,postList}=useContext(PostList)
  const [username, setUsername] = useState(post.username);
  const [password, setPassword] = useState(post.password);


  const editFormSubmitHandler=(event)=>{
    event.preventDefault();
    editPassword({username,password},id)
    setEditForm(false)
  }
  
  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay">
        <form className="form-modal" onSubmit={editFormSubmitHandler}>

        <div class="mb-3">
          <label for="Title" class="form-label">Edit Title</label>
          <input type="text" class="form-control" id="Title" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Please Enter the Edited Title"/>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Edit Password</label>
          <input type="text"  class="form-control" id="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Please Enter the Edited Password"/>
        </div>

        <button type="submit" class="btn btn-primary">ADD</button>
        
        <button type="button" class="btn btn-dark"on onClick={()=>setEditForm(false)}>x</button>

        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  )
}

export default EditModal;