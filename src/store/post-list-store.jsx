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
    console.log("Updated List",newlist)
  }else if(action.type==="DELETE_PASSWORD"){
    newlist=currlist.filter((post,index)=> index !== action.payload.postId )
  }else if(action.type==="EDIT_PASSWORD"){
    newlist=currlist.map((post,index)=>{
      if (index === action.payload.id) {
        return { ...post, ...action.payload.post }; 
      }
      return post;
    })
    console.log("Updated List",newlist)
  }

  return newlist;
}

const PostListProvider=({children})=>{

  const [postList,dispatchPostList]=useReducer(postListReducer,[])

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

  const editPassword=(post,id)=>{
    console.log(id,post)
    dispatchPostList({
      type:"EDIT_PASSWORD",
      payload:{
        post,
        id,
      },
    })
  }

  return <PostList.Provider value={{postList,addPassword,editPassword,deletePassword}}>{children}</PostList.Provider>
}

export default PostListProvider;