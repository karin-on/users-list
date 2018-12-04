import React from 'react';

class List extends React.Component {

    removeUser = (id) => {
        console.log(id);

        fetch('http://localhost:3000/users/' + id, {
            method: 'DELETE',
        }).then(r => console.log(r))
            .then(window.location.reload());
    };


    render() {
        const usersArray = this.props.users;

        let users = usersArray.map((el,i) => {
            return <li className="list_item" key={el.id}>
                <div className="list-item__inner">
                    <div className="item item__nickname">{el.nickname}</div>
                    <div className="item item__email">{el.email}</div>
                    <div className="item item__ip-address">{el.ip}</div>
                    <div className="item item__joined">{el.date}</div>
                    <div className="item item__delete">
                        <button className="btn delete-btn" onClick={e => this.removeUser(el.id)}>delete</button>
                    </div>
                </div>
            </li>
        });

        return <section className="list-section">
            <div className="list">
                <div className="list-title">Users</div>
                <div className="list-header">
                    <div className="list-header__item list-header__nickname">nickname</div>
                    <div className="list-header__item list-header__email">email</div>
                    <div className="list-header__item list-header__ip-address">IP address</div>
                    <div className="list-header__item list-header__joined">joined</div>
                    <div className="list-header__item list-header__delete">delete user</div>
                </div>

                <ul className="list__items">
                    {users}
                </ul>

                {usersArray.length ?
                    <button className="btn delete-all-btn">
                        Remove list
                    </button>
                    : null
                }

            </div>
        </section>
    }
}

export {List};