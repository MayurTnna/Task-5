import "./App.css";
import { Toaster } from "react-hot-toast";
import RouterPath from "./routes/RouterPath";

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterPath />
    </div>
  );
}

export default App;
