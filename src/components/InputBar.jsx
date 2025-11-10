import { useState, useId } from "react";
import { useTaskDispatchContext } from "../utils/TaskContext";
import "../assets/css/InputBar.css";

function InputBar() {
  const dispatch = useTaskDispatchContext();

  const [inputText, setInputText] = useState("");

  return (
    <div className="container">
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          setInputText("");
          dispatch({
            type: "add",
            task: {
              name: inputText
            },
          })
        }
        }
      >
        <input
          type="text"
          placeholder="What do you need to do?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" disabled={!inputText}>Add</button>
      </form>
    </div>
  );
}

export default InputBar;
