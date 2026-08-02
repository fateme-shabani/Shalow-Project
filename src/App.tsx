import { useActionState } from "react";
import "./App.css";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();


  const formAction = (prev: number) => {
    return prev + 1;
  };
  const [count, action] = useActionState(formAction, null);

  return (
    <>
      <form>
        <p>{count}</p>
        <button formAction={action}>+</button>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
      </form>
    </>
  );
}

export default App;
