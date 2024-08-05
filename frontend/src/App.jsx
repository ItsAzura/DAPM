import { Outlet } from 'react-router-dom';
import Navigation from '../pages/auth/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../pages/auth/Footer';
function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
