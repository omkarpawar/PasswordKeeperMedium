import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import ReactDOM from "react-dom";

const FormModal=({setSelected})=>{

  const {addPassword}=useContext(PostList)

  const TitleElement=useRef()
  const PasswordElement=useRef()

  const formSubmitHandlet=(event)=>{
    event.preventDefault();

    const title=TitleElement.current.value;
    const password=PasswordElement.current.value;

    addPassword(title,password)
    setSelected(false)
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <form className="form-modal" onSubmit={formSubmitHandlet}>

        <div class="mb-3">
          <label for="Title" class="form-label">Title</label>
          <input type="text" ref={TitleElement} class="form-control" id="Title" 
          placeholder="Please Enter the Title"/>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="text" ref={PasswordElement} class="form-control" id="password" 
          placeholder="Please Enter the Password"/>
        </div>

        <button type="submit" class="btn btn-primary">ADD</button>
        
        <button type="button" class="btn btn-dark" onClick={()=>{setSelected(false)}}>x</button>

      </form>
    </div>,
    document.getElementById("modal-root")
  )
}

export default FormModal;