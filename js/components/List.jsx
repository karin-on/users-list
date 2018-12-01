import React from 'react';

class List extends React.Component {

    render() {
        return <section className="list-section">
            <div className="list">
                <div className="list-title">Users</div>
                <div className="list-header">
                    <div className="list-header__item list-header__nickname">nickname</div>
                    <div className="list-header__item list-header__email">email</div>
                    <div className="list-header__item list-header__ip-address">IP address</div>
                    <div className="list-header__item list-header__delete">delete user</div>
                </div>

                <ul className="list__items">
                    <li className="list_item">
                        <div className="list-item__inner">
                            <div className="item item__nickname">jakiś nickname</div>
                            <div className="item item__email">email@email.ok</div>
                            <div className="item item__ip-address">IP address 4353:43434</div>
                            <div className="item item__delete">delete</div>

                        </div>
                    </li>
                    <li className="list_item">
                        <div className="list-item__inner">
                            <div className="item item__nickname">jakiś nickname</div>
                            <div className="item item__email">email@email.ok</div>
                            <div className="item item__ip-address">IP address 4353:43434</div>
                            <div className="item item__delete">delete</div>

                        </div>
                    </li>
                    <li className="list_item">
                        <div className="list-item__inner">
                            <div className="item item__nickname">jakiś nickname</div>
                            <div className="item item__email">email@email.ok</div>
                            <div className="item item__ip-address">IP address 4353:43434</div>
                            <div className="item item__delete">delete</div>
                        </div>
                    </li>
                </ul>

                <button className="btn remove-all-btn">
                    Remove list
                </button>

            </div>
        </section>
    }
}

export {List};