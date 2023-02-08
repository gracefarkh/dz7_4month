
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* <UserList /> */}
    //   {/* <SimpleForm /> */}
    //   <PostList />
    // </div>
  );
}

export default App;