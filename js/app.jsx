import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Form} from './components/Form.jsx';
import {List} from './components/List.jsx';

class App extends React.Component {
    render() {
        return <div>
            <Form />
            <List />
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
