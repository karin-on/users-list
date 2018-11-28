import React from 'react';

class Form extends React.Component {
    render() {
        return <form className="form">
            <div className="form-row">
                <div className="form-item col-lg-6 col-md-8 mb-4">
                    <label htmlFor="nickname">Your nickname</label>
                    <input className="form-control" type="text" id="nickname"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-item col-lg-6 col-md-8 mb-4">
                    <label htmlFor="nickname">Your email</label>
                    <input className="form-control" type="text" id="email"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-item col-lg-6 col-md-8 mb-4">
                    <label htmlFor="nickname">Your IP address</label>
                    <input className="form-control" type="text" id="ip"/>
                </div>
            </div>
        </form>
    }
}

export {Form};