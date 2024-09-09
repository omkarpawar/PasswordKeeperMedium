import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const PasswordList=({setSelected})=>{
  const {postList,deletePassword,editPassword}=useContext(PostList)

  return(
    <div>
      <h3>All Passwords:</h3>

      <ul class="list-group list">
        {postList.map((post,id)=>
        <li class="list-group-item listGroup">
          {post.username}{post.password}
          <div className="buttons">
            <button type="button" class="btn btn-danger" onClick={()=>{deletePassword(id)}}>Delete</button>
            <button type="button" class="btn btn-primary"onClick={()=>{setSelected(true)&& editPassword(id)}}>Edit</button>
          </div>  
        </li>)}
      </ul>

    </div>
  )
}
export default PasswordList;