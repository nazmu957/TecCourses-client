import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="bg-success bg-opacity-10">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
