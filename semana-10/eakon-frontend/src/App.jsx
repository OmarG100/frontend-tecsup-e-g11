import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/sections/Header';
import { primaryRoute } from './routes/primaryRoute';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={primaryRoute} />
    </>
  );
}

export default App;