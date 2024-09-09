import PasswordKeeper from './components/Passwordkeeper'
import PasswordList from './components/PasswordList';
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from './store/post-list-store';
import FormModal from './components/FormModal';
import './App.css'
import { useState } from 'react';

function App() {
  
  const [selected,setSelected]=useState(false)

  return (
    <PostListProvider>
      {selected && <FormModal setSelected={setSelected}/>}
      <PasswordKeeper setSelected={setSelected}/> 
      <PasswordList setSelected={setSelected}/>
    </PostListProvider>
  )
}

export default App
