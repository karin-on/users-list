import React from 'react';

class Form extends React.Component {

    handleChange = (e, str) => {
        if (typeof this.props.getData === 'function') {
            this.props.getData(e.target.value, str);
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        console.log('dziala');
    }


    render() {
        return <section className="form-section">
            <form className="form" onSubmit={e => this.handleSubmit(e)}>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="nickname">
                            Your nickname
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="nickname"
                               placeholder="nickname"
                               value={this.props.nickname}
                               onChange={e => this.handleChange(e, 'nickname')}/>
                    </div>
                </div>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="email">
                            Your email
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="email"
                               placeholder="email"
                               value={this.props.email}
                               onChange={e => this.handleChange(e, 'email')}/>
                    </div>
                </div>
                <div className="form__item">
                    <div className="label-box">
                        <label className="label" htmlFor="ip">
                            Your IP address
                        </label>
                    </div>
                    <div className="input-box">
                        <input className="input"
                               type="text"
                               id="ip"
                               placeholder="IP address"
                               value={this.props.ip}
                               onChange={e => this.handleChange(e, 'ip')}/>
                    </div>
                </div>

                <button className="btn submit-btn" type="submit" disabled={true}>
                    Add
                </button>
            </form>
        </section>
    }
}

export {Form};