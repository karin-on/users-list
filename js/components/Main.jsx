import React from 'react';
import {Form} from "./Form.jsx";
import {List} from "./List.jsx";

class Main extends React.Component {
    render() {
        return <div>
            <Form />
            <List />
        </div>
    }
}

export {Main};