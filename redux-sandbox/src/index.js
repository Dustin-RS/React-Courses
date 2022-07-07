import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from "redux";
import { Provider } from 'react-redux'
import App from "./Components/app";
import reducer from "./reducer"

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);