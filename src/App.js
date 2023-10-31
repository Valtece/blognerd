import RoutesApp from "./routes";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import AuthProvider from './contexts/auth'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu/>
        <AuthProvider>
          <ToastContainer autoClose={3000} limit={1}/>
          <RoutesApp/>
        </AuthProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
