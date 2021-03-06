import React from 'react';
import {Form} from "./Form.jsx";
import {List} from "./List.jsx";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:3000/users';
        this.state = {
            usersArray: [],
            pending: true
        }
    }

    loadUsers = () => {

        fetch(this.url)
            .then(r => r.json())
            .then(users => {
                this.setState({
                    usersArray: users,
                    pending: false
                })
            })
    }

    addNewUser = (obj) => {

        fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(window.location.reload())
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return <div>
            <Form addNewUser={this.addNewUser}/>
            <List users={this.state.usersArray}/>
        </div>
    }
}

export {Main};