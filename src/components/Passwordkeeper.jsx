import PasswordSearch from "./PasswordSearch";

const PasswordKeeper=({setSelected})=>{
  return(
    <div>
      <div className="password-generate">
        <h1>Password Keeper</h1>
        <p>Total Password : 1</p>
        <button type="button" class="btn btn-dark" onClick={()=>{setSelected(true)}}>ADD NEW PASSWORD</button>
        <PasswordSearch/>
      </div>
    </div>
  )
}

export default PasswordKeeper;