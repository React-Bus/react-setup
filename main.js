/* react Library */
import React from 'react';

/* Need renderer to render items*/
import { render } from 'react-dom';

/* Need common store for entire app*/
import { createStore } from 'redux';

/* Need outer container that act as top most parent for all the child compoenents*/
import { Provider } from 'react-redux';

import App from './App.jsx';
import crudApp from './reducers/reducers';

let store = createStore(crudApp);

let rootElement = document.getElementById('app');

render(

   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)