import TaskContextProvider from "./utils/taskContext";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskContextProvider>
        <InputBar />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
