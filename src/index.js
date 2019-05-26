import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import 'moment/locale/fa';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';

const App =require('./components/App').default;




export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <Route name="App" path="*" render={(props) => <App {...props} />} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker(); 
