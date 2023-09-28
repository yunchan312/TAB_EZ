import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //ts
  const [answer, setAnswer] = useState(0);
  const [life, setLife] = useState(5);
  const [userAns, setUserAns] = useState("");
  const [hint, setHint] = useState("Guess");
  const [isCor, setIsCor] = useState(false);

  useEffect(() => {
    setAnswer(Math.floor(Math.random() * 100));
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAns(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLife((prev) => prev - 1);
    if (Number(userAns) === answer) {
      setIsCor(true);
    } else {
      if (Number(userAns) > answer) {
        setHint("Down");
      } else {
        setHint("Up");
      }
    }
    check();
  };

  const check = () => {
    if (life === 1) {
      setIsCor(true);
      setUserAns(`Game Over, answer is ${answer}`);
    }
  };

  return (
    <div>
      <h1>Numbers!</h1>
      <div className="answer">{isCor ? userAns : "?"}</div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input type="number" onChange={(e) => handleOnChange(e)} />
        <button>submit</button>
      </form>
      <div>{life}</div>
      <div>{hint}</div>
    </div>
  );
}

export default App;
