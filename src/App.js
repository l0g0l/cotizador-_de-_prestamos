import React, { Fragment, useState } from 'react'
import Form from './Components/Form'
import Header from './Components/Header'
import Mensaje from './Components/Mensaje'
import Resultado from './Components/Resultado'
import Spinner from './Components/Spinner/Spinner'



function App() {


  // definimos el state. Este state debería estar en Form, que es hijo de App, como no podemos sacer el state de allí hacia arriba, lo quitamos de Form y le ponemos el state al padre, a APP. Le pasamos por props al componente Form el state, para que pueda tener toda la info guardada. De este modo el state está en el componente padre y lo puede utilizar cualquier componente

  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState('')
  const [total, setTotal] = useState(0)
  const [cargando, setCargando] = useState(false)


  //mostrar un componente u otro de manera condicional sin usar un ternario
  let componente


  if (cargando) {
    componente = <Spinner />

  } else if (total === 0) {
    componente = <Mensaje />

  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad} />
  }


  return (
    <Fragment>
      <Header
        titulo="Cotizador de préstamos" />

      <div className="container">
        <Form
          cantidad={cantidad}
          setcantidad={setCantidad}
          plazo={plazo}
          setplazo={setPlazo}
          settotal={setTotal}
          setcargando={setCargando} />

        <div className="mensajes">
          {componente}

        </div>
      </div>

    </Fragment>
  );
}

export default App;
