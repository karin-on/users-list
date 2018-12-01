import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            ip: ''
        }
    }

    handleChange = (e, input) => {
        this.setState({
            [input]: e.target.value
        });
        this.validateForm(input, e.target.value);
    }

    validateForm = (input, value) => {
        // e.preventDefault();

        const data = {
            [input]: value
        }


        console.log(data);
    }


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     if (typeof this.props.validateForm === 'function') {
    //         this.props.validateForm();
    //     }
    // }


    render() {
        // console.log(this.state);

        return <section className="form-section">
            <form className="form">
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
                               value={this.state.nickname}
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
                               value={this.state.email}
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
                               value={this.state.ip}
                               onChange={e => this.handleChange(e, 'ip')}/>
                    </div>
                </div>

                <button className="btn submit-btn" type="submit" disabled={false}>
                    Add
                </button>
            </form>
        </section>
    }
}

export {Form};