import React from 'react';
import {Form} from "./Form.jsx";
import {List} from "./List.jsx";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            ip: ''
        }
    }

    getData = (value, input) => {
        this.setState({
            [input]: value
        });
    }


    render() {
        console.log(this.state);


        return <div>
            <Form state={this.state} getData={this.getData}/>
            <List />
        </div>
    }
}

export {Main};