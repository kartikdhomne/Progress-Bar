import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div>
      <div className="title">Progress Bar</div>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span className="message">{success ? "Complete..!🤩" : "Loading...🙄"}</span>
      <div>Note : Please refresh page to get started</div>
    </div>
  );
}

export default App;
