import './App.css'
import Menu1 from '../components/Menu1'
import Home from '../routes/Home'
import Contactos from '../routes/Contactos'
import Logout from '../routes/Logout'
import Sistema from '../routes/Sistema'
import Registro from '../routes/Registro'
import { 
  Routes,
  Route,
} from "react-router-dom";
import RequireAuth from '../components/RequireAuth'

const  App = () => {
  
  return (
    <div className="crystal">
      <div>
        <Menu1 />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="registro" element={<Registro />} />
          <Route path="contactos" element={<Contactos />} />
          <Route path="logout" element={<Logout />} />
          <Route
            path="sistema"
            element={
              <RequireAuth>
                <Sistema />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App
