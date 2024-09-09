import { createContext, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addPassword:()=>{},
  deletePassword:()=>{},
  editPassword:()=>{},
})

const postListReducer=(currlist,action)=>{
  let newlist=currlist;
  if(action.type==="ADD_PASSWORD"){
    newlist=[action.payload,...currlist]
  }else if(action.type==="DELETE_PASSWORD"){
    
    newlist=currlist.filter((post,index)=> index !== action.payload.postId )  
    
  }

  return newlist;
}

const PostListProvider=({children})=>{

  const [postList,dispatchPostList]=useReducer(postListReducer,password)

  const addPassword=(title,password)=>{
    console.log(title,password)
    dispatchPostList({
      type:'ADD_PASSWORD',
      payload:{
       
        username:title,
        password:password,
      },
    })
  }
  
  const deletePassword=(postId)=>{
    console.log(postId)
    dispatchPostList({
      type:"DELETE_PASSWORD",
      payload:{
        postId,
      },
    })
  }

  const editPassword=(postId)=>{
    console.log(postId) 
    
    deletePassword(postId)
    

  }

  return <PostList.Provider value={{postList,addPassword,editPassword,deletePassword}}>{children}</PostList.Provider>
}

const password=[

]

export default PostListProvider;