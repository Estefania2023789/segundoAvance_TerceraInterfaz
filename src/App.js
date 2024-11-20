// import logo from './logo.svg';
import './App.css';
import logo from './flama.png';
import icono from './iconoIngresar.png';

function App() {
  return (
    <div className='App'>
      {/* Header */}
      <header className="header">
        <div className="contenedor-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1>APP_NAME</h1>
        </div>
        
        <div className="contenedor-informativo">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">Sobre Nosotros</a>
            <a href="#contact">Contáctenos</a>
            <a href="#messages">Mensajes</a>
          </nav>
          <img src={icono} alt="icono" className="profile-icon"/>
        </div>
        
      </header>

      <div className="contenido-principal">
        <div className="gestion-pedidos">
          <h2>Gestión de Pedidos</h2>

          <div className="menu-pestanas">
            <a href="#todos" className="pestana activa">TODOS</a>
            <a href="#pendiente" className="pestana">Pendiente</a>
            <a href="#confirmado" className="pestana">Confirmado</a>
            <a href="#procesado" className="pestana">Procesado</a>
            <a href="#enviado" className="pestana">Enviado</a>
            <a href="#entregado" className="pestana">Entregado</a>
            <a href="#cancelado" className="pestana">Cancelado</a>
          </div>

          <div className="barra-busqueda">
            <input type="text" placeholder="Buscar" className="input-buscar" />
            <button className="boton-filtrar">Filtrar ▼</button>
          </div>

          <table className="tabla-pedidos">
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>CREADO</th>
                <th>CLIENTE</th>
                <th>TOTAL</th>
                <th>GANANCIA</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>Joseph Wheeler</td>
                <td>$654</td>
                <td>$154</td>
                <td><span className="estado pendiente">Pending</span></td>
              </tr>
              <tr>
                <td>#6549</td>
                <td>5 min ago</td>
                <td>Emily Smith</td>
                <td>$780</td>
                <td>$200</td>
                <td><span className="estado confirmado">Confirmed</span></td>
              </tr>
              <tr>
                <td>#6550</td>
                <td>10 min ago</td>
                <td>John Doe</td>
                <td>$920</td>
                <td>$250</td>
                <td><span className="estado enviado">Shipped</span></td>
              </tr>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>Joseph Wheeler</td>
                <td>$654</td>
                <td>$154</td>
                <td><span className="estado pendiente">Pending</span></td>
              </tr>
              <tr>
                <td>#6549</td>
                <td>5 min ago</td>
                <td>Emily Smith</td>
                <td>$780</td>
                <td>$200</td>
                <td><span className="estado confirmado">Confirmed</span></td>
              </tr>
              <tr>
                <td>#6550</td>
                <td>10 min ago</td>
                <td>John Doe</td>
                <td>$920</td>
                <td>$250</td>
                <td><span className="estado enviado">Shipped</span></td>
              </tr>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>Joseph Wheeler</td>
                <td>$654</td>
                <td>$154</td>
                <td><span className="estado pendiente">Pending</span></td>
              </tr>
              <tr>
                <td>#6549</td>
                <td>5 min ago</td>
                <td>Emily Smith</td>
                <td>$780</td>
                <td>$200</td>
                <td><span className="estado confirmado">Confirmed</span></td>
              </tr>
              <tr>
                <td>#6550</td>
                <td>10 min ago</td>
                <td>John Doe</td>
                <td>$920</td>
                <td>$250</td>
                <td><span className="estado enviado">Shipped</span></td>
              </tr>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>Joseph Wheeler</td>
                <td>$654</td>
                <td>$154</td>
                <td><span className="estado pendiente">Pending</span></td>
              </tr>
              <tr>
                <td>#6549</td>
                <td>5 min ago</td>
                <td>Emily Smith</td>
                <td>$780</td>
                <td>$200</td>
                <td><span className="estado confirmado">Confirmed</span></td>
              </tr>
              <tr>
                <td>#6550</td>
                <td>10 min ago</td>
                <td>John Doe</td>
                <td>$920</td>
                <td>$250</td>
                <td><span className="estado enviado">Shipped</span></td>
              </tr>
            </tbody>
          </table>

          <div className="seccion-paginacion">
            <div className="mostrar-registros">
              <label htmlFor="registros">Showing</label>
              <select id="registros" className="select-registros">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <span>of 50</span>
            </div>
            <div className="paginacion">
              <button className="boton-paginacion">&laquo;</button>
              <button className="boton-paginacion activo">1</button>
              <button className="boton-paginacion">2</button>
              <button className="boton-paginacion">3</button>
              <button className="boton-paginacion">4</button>
              <button className="boton-paginacion">5</button>
              <button className="boton-paginacion">&raquo;</button>
            </div>
          </div>

        </div>
      </div>
          
    </div>
  );
}

export default App;
