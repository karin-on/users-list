import React from 'react';
import {Form} from "./Form.jsx";
import {List} from "./List.jsx";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersArray: [],
            pending: true
        }
    }


    loadUsers = () => {
        const url = 'http://localhost:3000/users';

        fetch(url)
            .then(r => r.json())
            .then(users => {
                // console.log(users);

                this.setState({
                    usersArray: users,
                    pending: false
                })
            })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return <div>
            <Form />
            <List users={this.state.usersArray}/>
        </div>
    }
}

export {Main};