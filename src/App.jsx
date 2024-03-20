import { useEffect } from 'react';
import { fetchData } from './services/api';

import './App.css';

function App() {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await fetchData();
        console.log('Datos recibidos del Api:', response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    test();
  }, []);

  return (
    <>
      <h1>Hola</h1>
    </>
  );
}

export default App;
