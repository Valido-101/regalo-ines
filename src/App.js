import './App.css';
import { BloquePrincipal } from './componentes/BloquePrincipal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className='components'>

          <h1>¡Te queremos, Inés!</h1>

          <h3>Toca alguna de las fotos para ver tu dedicatoria</h3>

          <BloquePrincipal></BloquePrincipal>
        </div>

      </header>
    </div>
  );
}

export default App;
