import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import axios from "axios";

interface PropsType {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface Post {
  userId: number;
  id: number;
  title: string;
}

function App({ value, onIncrement, onDecrement }: PropsType) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const posts: Post[] = useSelector((state: RootState) => state.posts);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    dispatch(fetchPosts()); //actions은 객체여야함, 현재는 함수를 dispatch하고 있음 => 함수를 넣기 위해선 redux-thunk 설치 필요
  }, [dispatch]);

  const fetchPosts = (): any => {
    return async function fetchPostsThunk(dispatch: any, getState: any) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //page refresh 방지
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo("");
  };

  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
      <div className="todolist">
        <label id="todolist-title">TODOLIST</label>
        <ul>
          {todos.map((todo: string, i: number) => (
            <li key={i} className="todo">
              {todo}
            </li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input type="text" value={todo} onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
      <ul>
        {posts.map((post: Post, i: number) => (
          <li key={i}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
