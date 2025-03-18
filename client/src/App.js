import { ToastContainer } from "react-toastify";
import AppRouter from "./Router/Router";

function App() {
  return (
    <div className="overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      <AppRouter />
    </div>
  );
}

export default App;
