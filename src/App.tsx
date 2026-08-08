import { useActionState } from "react";

import "./index.css";
import "./App.css";

import { useWindowSize } from "./hooks/useWindowSize";
import { Layout } from "./components/layout";

function App() {
  const { width, height } = useWindowSize();

  const formAction = (prev: number) => {
    return prev + 1;
  };
  const [count, action] = useActionState(formAction, null);

  return (
    <>
      <Layout />
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
