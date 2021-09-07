import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { sp } from "@pnp/sp/presets/all";
export const App = () => {
  const [Items, setItems] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const getListItems = useCallback(async () => {
    setLoading(true);
    try {
      const items = await sp.web.lists.getByTitle('BaseDatosPersona').items.getAll();
      setItems(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getListItems();
  }, []);
  return (
    <div className="App">
      {loading ? <div>cargando</div> :
        <div>
          <h1>Listado Base Datos Persona</h1>
          <ul>
            {Items.map((elemento: any) => 
            <li>{elemento.Title}-{elemento.Name1}</li> )}
          </ul>
        </div>
      }

    </div>
  );
}

export default App;
