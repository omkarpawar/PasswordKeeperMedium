import { useContext } from "react";
import PasswordSearch from "./PasswordSearch";
import { PostList } from "../store/post-list-store";

const PasswordKeeper=({setSelected})=>{

  const {postList}=useContext(PostList)

  return(
    <div>
      <div className="password-generate">
        <h1>Password Keeper</h1>
        <p>Total Password : {postList.length}</p>
        <button type="button" class="btn btn-dark" onClick={()=>{setSelected(true)}}>ADD NEW PASSWORD</button>
        <PasswordSearch/>
      </div>
    </div>
  )
}

export default PasswordKeeper;