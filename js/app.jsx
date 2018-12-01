import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Main} from './components/Main.jsx';

class App extends React.Component {
    render() {
        return <div>
            <Main />
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
