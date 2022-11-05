# Proyecto React-App por Andres Quijano.

Este proyecto tiene como funcion principal la simulación de todas las etapas de
un proceso de ventas para un eCommerce.

El entorno de desarrollo empleado es Create React App. 

[Read more](https://create-react-app.dev/)

## Instalación.


Clonar el codigo https://github.com/aquijano93/Proyecto-React.git

Se requiere [Node.js](https://nodejs.org/) v10+.

Instalar las dependencias utilizadas.

```sh
cd proyecto-react
```

```sh
npm install
```

## Configuración del proyecto.


Para correr este proyecto es necesario contar con una cuenta de FireBase
* [FireBase](https://firebase.google.com/?hl=es-419&gclid=EAIaIQobChMI6d7qh6GX-wIVbU9IAB0Wvw3iEAAYASAAEgL3ovD_BwE&gclsrc=aw.ds)

Inicializar un nuevo proyecto en FireStore
* [FireStore](https://firebase.google.com/products/firestore?hl=es-419&gclid=EAIaIQobChMIm8T9m6GX-wIVEE-RCh0FBQ53EAAYASAAEgIaOPD_BwE&gclsrc=aw.ds)

Iniciar una colección nominada 'allProducts'
> Note: `allProducts` es requerido para la correcta renderizacion del proyecto.

El formato de los documentos se compone con la siguiente estructura

```jsx
{
    category:''
    description:''
    img:''
    name:''
    price:''
    stock:''
}
```

> Note: `category` deberás configurar 3 categorías diferentes para su  correcto filtrado dentro del componente 'itemListContainer', 'Item', o puedes usar las categorías predeterminadas 'Machines', 'Needdles', 'Ink'.

## Enlazando tu proyecto a FireStore.


Deberás crear un carpeta para almacenar las key proporcionadas por FireStore, con la siguiente estructura: 


> Note: `src/services/firebase`


Procede a crear el archivo index.js

Aplica la siguiente configuración

```jsx

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    REACT_APP_apiKey='',
    REACT_APP_authDomain='',
    REACT_APP_projectId='',
    REACT_APP_storageBucket='',
    REACT_APP_messagingSenderId='',
    REACT_APP_appId=''
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

```


> Note: Deberás completar los campos con las `keys` que te proporciona FireStore.


## Tu Proyecto está listo para inicializar.


```sh
npm start
```

### Gracias por leer.
