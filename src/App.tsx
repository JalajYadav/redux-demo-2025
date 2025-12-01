import { useSelector } from "react-redux";

import "./App.css";
import PostsPage from "./PostsPage";
import type { ReduxState } from "./interface";

function App() {
  const posts = useSelector((state: ReduxState) => state.posts);

  return <PostsPage postsList={posts} />;
}

export default App;
