import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";




const PasswordSearch=()=>{

  const [serachQuery,setSearchQuery]=useState("")
  
  const {postList}=useContext(PostList)

  const PasswordSearch=(event)=>{
    setSearchQuery(event.target.value)
  }

  const filterList=postList.filter((item)=>
    item.username.toLowerCase().includes(serachQuery.toLocaleLowerCase())
  );
  
  return(
    <div>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" name="search" onChange={PasswordSearch} placeholder="search" />


      {serachQuery && (
        <ul className="list-group searchList">
          {filterList.map((list) => (
            <li key={list.id} className="list-group-item">
              {list.username} {list.password}
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}
export default PasswordSearch;