import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<div>logearse</div>} />
        <Route path="/register" element={<div>Registrarse</div>} />
        <Route path="/unJugador" element={<div>Juegos para un jugador</div>} />
        <Route path="/multijugador" element={<div>Juegos Multijugador</div>} />
        <Route path="/ajustes" element={<div>Ajustes</div>}/>
      </Routes >
    </div>
  )
}

export default App
