import './App.css';
import { Hospital, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import DecorativeBar from './components/DecorativeBar';

function App() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-screen">
      {/* Header principal */}
      <header className="w-full flex justify-between items-center bg-[#1276bc] text-white p-4">
        <div className="flex items-center gap-2">
          <Hospital className="text-white" size={24} />
          <span className="text-lg font-bold">AVANTE</span>
        </div>
        <div>
          <SearchBar />
        </div>
      </header>
      <DecorativeBar />

      {/* Menú horizontal */}
      <nav className="w-full bg-gray-100 text-gray-800">
        <ul className="flex justify-end gap-6 p-4">
          <li className="hover:text-blue-500 cursor-pointer">Inicio</li>

          {/* Nosotros */}
          <li className="relative">
            <button
              className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleMenu('nosotros')}
            >
              Nosotros
              {openMenu === 'nosotros' ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openMenu === 'nosotros' && (
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded p-2 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">Quienes somos</li>
                <li className="hover:text-blue-500 cursor-pointer">Misión / Visión</li>
                <li className="hover:text-blue-500 cursor-pointer">Valores y principios</li>
                <li className="hover:text-blue-500 cursor-pointer">Historia</li>
              </ul>
            )}
          </li>

          {/* Nuestros Servicios */}
          <li className="relative">
            <button
              className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleMenu('servicios')}
            >
              Nuestros Servicios
              {openMenu === 'servicios' ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openMenu === 'servicios' && (
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded p-2 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">Hospital</li>
                <li className="hover:text-blue-500 cursor-pointer">Centro médico</li>
                <li className="hover:text-blue-500 cursor-pointer">Laboratorio clínico</li>
                <li className="hover:text-blue-500 cursor-pointer">Farmacias</li>
                <li className="hover:text-blue-500 cursor-pointer">Centro de imágenes</li>
              </ul>
            )}
          </li>

          {/* Novedades */}
          <li className="relative">
            <button
              className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
              onClick={() => toggleMenu('novedades')}
            >
              Novedades
              {openMenu === 'novedades' ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {openMenu === 'novedades' && (
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded p-2 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">Revista</li>
                <li className="hover:text-blue-500 cursor-pointer">Descargas</li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-500 cursor-pointer">Contáctenos</li>
        </ul>
      </nav>

      <main className="p-5">
        <h1 className="text-2xl font-bold">Bienvenido a WebAvante</h1>
        <p className="mt-2 text-gray-700">Comienza a construir tu página web aquí.</p>
      </main>
    </div>
  );
}

export default App;