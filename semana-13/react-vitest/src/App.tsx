import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <>
      <h1>React Vitest</h1>
      <Accordion title="JSX">
        <p>Extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario.</p>
      </Accordion>
    </>
  )
}

export default App;