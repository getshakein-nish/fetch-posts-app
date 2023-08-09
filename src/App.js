import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";
import { useState } from "react";

function App() {
  const [id,setId] = useState('');
  return (
    <div className="App">
      <Navbar id={id} setId={setId}/>
      <PostContainer id={id}/>
    </div>
  );
}

export default App;
