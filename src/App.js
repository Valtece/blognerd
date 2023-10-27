import RoutesApp from "./routes";
import Menu from "./components/Menu";

import AuthProvider from './contexts/auth'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu/>
        <AuthProvider>
          <ToastContainer autoClose={3000} limit={1}/>
          <RoutesApp/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
